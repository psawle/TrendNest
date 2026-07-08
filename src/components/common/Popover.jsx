import { useEffect, useRef, useState } from "react";

/**
 * Headless dropdown/popover shell: owns open state, outside-click and Escape
 * dismissal, and anchoring. Content is presentation-only, so this same
 * component backs the navbar's search, cart, and profile menus (and any
 * future ones) without duplicating that behavior each time.
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
        className="flex items-center"
      >
        {trigger}
      </button>

      {open && (
        <div
          className={`
            absolute
            top-full
            mt-2
            ${align === "right" ? "right-0" : "left-0"}
            z-50
            ${panelClassName}
          `}
        >
          {typeof children === "function" ? children({ close }) : children}
        </div>
      )}
    </div>
  );
};

export default Popover;
