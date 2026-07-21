import { forwardRef } from "react";

const Input = forwardRef(({ label, error, type = "text", className = "", ...props }, ref) => (
  <label className="group relative block">
    <span className="mb-1.5 block text-xs font-bold tracking-wide text-[#4d4958]">{label}</span>
    <input ref={ref} type={type} className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-[var(--ink)] outline-none transition placeholder:text-[#aaa5b4] focus:border-[var(--primary)] focus:ring-4 focus:ring-[#5b3fd0]/10 ${error ? "border-red-400" : "border-[var(--line)]"} ${className}`} {...props} />
    {error && <span className="mt-1.5 block text-xs font-medium text-red-600">{error}</span>}
  </label>
));
Input.displayName = "Input";
export default Input;
