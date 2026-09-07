function Card({
  title,
  description,
  children,
  className = "",
  showDescription = true,
}) {
  return (
    <div className={`reusable-card ${className}`}>
      {title && <h3>{title}</h3>}

      {showDescription && description && <p>{description}</p>}

      {children}
    </div>
  );
}

export default Card;