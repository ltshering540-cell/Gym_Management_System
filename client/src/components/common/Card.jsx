function Card({ title, children, className = "" }) {
  return (
    <div className={`common-card ${className}`}>
      {title && <h3 className="card-title">{title}</h3>}

      <div className="card-content">
        {children}
      </div>
    </div>
  );
}

export default Card;