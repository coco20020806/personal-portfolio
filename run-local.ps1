$ErrorActionPreference = 'Stop'

# Starts the portfolio locally and opens it in the default browser.
$siteRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$port = 3000
$url = "http://localhost:$port"
$server = Join-Path $siteRoot 'node_modules\.bin\vinext.cmd'
$log = Join-Path $siteRoot '.local-dev.log'

if (-not (Test-Path -LiteralPath $server)) {
  throw 'Dependencies are missing. Run "npm.cmd ci" in this folder once, then try again.'
}

if (-not (Get-NetTCPConnection -LocalPort $port -State Listen -ErrorAction SilentlyContinue)) {
  Start-Process -FilePath $server -ArgumentList "dev --host 127.0.0.1 --port $port" -WorkingDirectory $siteRoot -WindowStyle Hidden -RedirectStandardOutput $log
  for ($attempt = 0; $attempt -lt 30; $attempt++) {
    Start-Sleep -Milliseconds 500
    if (Get-NetTCPConnection -LocalPort $port -State Listen -ErrorAction SilentlyContinue) { break }
  }
}

if (-not (Get-NetTCPConnection -LocalPort $port -State Listen -ErrorAction SilentlyContinue)) {
  throw "The local server did not start. Check $log for details."
}

Start-Process $url
Write-Host "Portfolio opened at $url"
