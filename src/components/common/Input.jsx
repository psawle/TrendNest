const Input = ({
    label,
    error,
    type = "text",
    ...props
  }) => {
    return (
      <div className="space-y-1 px-2">
        {label && (
          <label className="text-sm font-medium">
            {label}
          </label>
        )}
  
        <input
          type={type}
          {...props}
          className="
            w-full
            border
            border-gray-300
            rounded-lg
            px-4
            py-3
            outline-none
            focus:ring-2
            focus:ring-indigo-500
          "
        />
  
        {error && (
          <p className="text-red-500 text-sm">
            {error}
          </p>
        )}
      </div>
    );
  };
  
  export default Input;