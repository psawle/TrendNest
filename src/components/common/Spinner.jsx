const Spinner = ({ className = "" }) => {
  return (
    <div
      role="status"
      aria-label="Loading"
      className={`
        h-6 w-6
        rounded-full
        border-2
        border-gray-300
        border-t-[var(--primary)]
        animate-spin
        ${className}
      `}
    />
  );
};

export default Spinner;
