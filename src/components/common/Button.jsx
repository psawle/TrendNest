const Button = ({ children, type = "button", className = "", variant = "primary", loading = false, disabled = false, ...props }) => (
  <button type={type} disabled={disabled || loading} className={`${variant === "primary" ? "button-primary" : variant === "outline" ? "button-secondary" : "bg-transparent text-[var(--ink)]"} w-full disabled:pointer-events-none disabled:opacity-50 ${className}`} {...props}>
    {loading ? <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-r-transparent" /> : children}
  </button>
);
export default Button;
