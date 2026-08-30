from pathlib import Path
from PIL import Image, ImageOps

source = Path(r"C:\Users\KFC\Desktop\交换精选\欧洲")
output = Path(r"C:\Users\KFC\Desktop\personal-portfolio\public\travel\europe")
output.mkdir(parents=True, exist_ok=True)

for source_path in sorted(source.glob("*.jpg")):
    output_path = output / f"{source_path.stem}.webp"
    with Image.open(source_path) as source_image:
        image = ImageOps.exif_transpose(source_image).convert("RGB")
        image.thumbnail((1800, 1800), Image.Resampling.LANCZOS)
        image.save(output_path, "WEBP", quality=84, method=6)
    print(f"prepared {output_path.name}")
