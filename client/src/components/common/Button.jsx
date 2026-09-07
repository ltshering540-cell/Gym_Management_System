function Button({
  children,
  onClick,
  type = "button",
  className = "",
  disabled = false,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`reusable-button ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;