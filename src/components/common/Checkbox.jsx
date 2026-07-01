const Checkbox = ({
    label,
    ...props
  }) => {
    return (
      <label className="flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          {...props}
        />
        {label}
      </label>
    );
  };
  
  export default Checkbox;