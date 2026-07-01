const Button = ({
    children,
    type = "button",
    className = "",
    ...props
  }) => {
    return (
      <button
        type={type}
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
          ${className}
        `}
        {...props}
      >
        {children}
      </button>
    );
  };
  
  export default Button;