const Button = ({
    children,
    type = "button",
    className = "",
    loading = false,
    disabled = false,
    ...props
  }) => {
    return (
      <button
        type={type}
        disabled={disabled || loading}
        className={`
          w-full
          py-3
          rounded-lg
          text-white
          font-medium
          transition-all
          duration-300
          bg-[var(--primary)]
          hover:bg-[var(--primary-hover)]
          disabled:opacity-60
          disabled:cursor-not-allowed
          ${className}
        `}
        {...props}
      >
        {loading ? "Please wait..." : children}
      </button>
    );
  };
  
  export default Button;