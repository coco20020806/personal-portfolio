export type HomeProject = {
  index: string;
  name: string;
  type: string;
  status: string;
  statusKind: "prototype" | "live-prototype" | "complete";
  description: string;
  meaning: string;
  role: string;
  tags: string[];
  href: string;
  previewKind: "workflow" | "product-shot" | "device";
  previewAlt: string;
  previewAlign: "start" | "end";
  previewSrc?: string;
  cta: string;
  workflow?: {
    chrome: string;
    prompt: string;
    fields: string[];
    steps: string[];
    ready: string;
  };
  steps?: string[];
  metric?: string;
};

export function ProjectPreview({ project }: { project: HomeProject }) {
  return (
    <article className={`project-row preview-${project.previewKind}`} data-preview={project.previewAlign}>
      <div className="project-preview">
        {project.previewKind === "workflow" && project.workflow ? (
          <CateWorkflowPreview workflow={project.workflow} alt={project.previewAlt} />
        ) : null}
        {project.previewKind === "product-shot" && project.previewSrc ? (
          <ProductShotPreview src={project.previewSrc} alt={project.previewAlt} steps={project.steps} />
        ) : null}
        {project.previewKind === "device" && project.previewSrc ? (
          <DevicePreview src={project.previewSrc} alt={project.previewAlt} steps={project.steps} metric={project.metric} />
        ) : null}
      </div>
      <div className="project-main">
        <div className="project-labels">
          <p className="project-type">{project.index} / {project.type}</p>
          <span className={`project-status ${project.statusKind}`}>{project.status}</span>
        </div>
        <h3>
          <a className="project-name-link" href={project.href}>{project.name}</a>
          <span className="project-doodle" aria-hidden="true">
            <i className="doodle-orbit" />
            <i className="doodle-star doodle-star-a" />
            <i className="doodle-star doodle-star-b" />
          </span>
        </h3>
        <p className="project-description">{project.description}</p>
        <div className="project-meaning">
          <p>WHY IT MATTERS</p>
          <p>{project.meaning}</p>
        </div>
        <p className="project-role"><b>MY ROLE</b>{project.role}</p>
        <div className="project-meta">
          {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
        <a className="project-cta" href={project.href}>{project.cta}</a>
      </div>
    </article>
  );
}

function CateWorkflowPreview({
  workflow,
  alt,
}: {
  workflow: NonNullable<HomeProject["workflow"]>;
  alt: string;
}) {
  return (
    <div className="cate-home" role="img" aria-label={alt}>
      <div className="cate-home-inner" aria-hidden="true">
        <div className="cate-home-bar">
          <span className="preview-dots"><i /><i /><i /></span>
          <small>{workflow.chrome}</small>
        </div>
        <p className="cate-home-prompt">“{workflow.prompt}”</p>
        <hr />
        <div className="cate-home-fields">
          {workflow.fields.map((field) => <b key={field}>{field}</b>)}
        </div>
        <ol className="cate-home-flow">
          {workflow.steps.map((step) => <li key={step}>{step}</li>)}
        </ol>
        <p className="cate-home-ready">{workflow.ready}</p>
      </div>
    </div>
  );
}

function ProductShotPreview({
  src,
  alt,
  steps,
}: {
  src: string;
  alt: string;
  steps?: string[];
}) {
  return (
    <figure className="beauty-home">
      <div className="preview-chrome" aria-hidden="true">
        <span className="preview-dots"><i /><i /><i /></span>
        <small>board / makeup decode</small>
      </div>
      <img src={src} alt={alt} />
      {steps?.length ? (
        <ul className="preview-steps beauty-steps">
          {steps.map((step, index) => (
            <li key={step}><span>{String(index + 1).padStart(2, "0")}</span>{step}</li>
          ))}
        </ul>
      ) : null}
    </figure>
  );
}

function DevicePreview({
  src,
  alt,
  steps,
  metric,
}: {
  src: string;
  alt: string;
  steps?: string[];
  metric?: string;
}) {
  return (
    <div className="nikki-home">
      <div className="nikki-home-device">
        <span className="nikki-home-notch" aria-hidden="true" />
        <img src={src} alt={alt} />
      </div>
      <div className="nikki-home-aside">
        {metric ? <p className="nikki-home-metric">{metric}</p> : null}
        {steps?.length ? (
          <ul className="preview-steps nikki-steps">
            {steps.map((step) => <li key={step}>{step}</li>)}
          </ul>
        ) : null}
      </div>
    </div>
  );
}
