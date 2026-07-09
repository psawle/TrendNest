import { useEffect, useRef, useState } from "react";

/**
 * Headless dropdown/popover shell: owns open state, outside-click and Escape
 * dismissal, anchoring, and the floating-card chrome (border/shadow/animation).
 * Content only supplies width and padding via `panelClassName`, so every
 * popover in the app looks and behaves consistently by construction.
 */
const Popover = ({ trigger, children, ariaLabel, align = "right", panelClassName = "" }) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;

    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    const handleEscape = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        aria-label={ariaLabel}
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className={`
          flex h-10 w-10 items-center justify-center rounded-full
          text-gray-600 transition-colors
          hover:bg-gray-100 hover:text-gray-900
          ${open ? "bg-gray-100 text-gray-900" : ""}
        `}
      >
        {trigger}
      </button>

      {open && (
        <div
          className={`
            absolute top-full mt-2 z-50 animate-popover-in
            ${align === "right" ? "right-0 origin-top-right" : "left-0 origin-top-left"}
          `}
        >
          <div
            className={`rounded-2xl border border-gray-200 bg-white shadow-xl shadow-gray-900/10 ${panelClassName}`}
          >
            {typeof children === "function" ? children({ close }) : children}
          </div>
        </div>
      )}
    </div>
  );
};

export default Popover;
