function PageTitle({
  title,
  subtitle,
  showSubtitle = true,
}) {
  return (
    <div className="page-title">
      <h1>{title}</h1>

      {showSubtitle && subtitle && <p>{subtitle}</p>}
    </div>
  );
}

export default PageTitle;