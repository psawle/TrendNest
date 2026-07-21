const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
};

export const SearchIcon = ({ className = "h-5 w-5" }) => (
  <svg {...base} className={className}>
    <circle cx="11" cy="11" r="7" />
    <line x1="21" y1="21" x2="16.5" y2="16.5" />
  </svg>
);

export const ShoppingBagIcon = ({ className = "h-5 w-5" }) => (
  <svg {...base} className={className}>
    <rect x="4" y="7" width="16" height="13" rx="2" />
    <path d="M8 7V5a4 4 0 0 1 8 0v2" />
  </svg>
);

export const UserIcon = ({ className = "h-5 w-5" }) => (
  <svg {...base} className={className}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20a8 4 0 0 1 16 0" />
  </svg>
);

export const LogOutIcon = ({ className = "h-5 w-5" }) => (
  <svg {...base} className={className}>
    <path d="M9 21H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" y1="12" x2="9" y2="12" />
  </svg>
);

export const GridIcon = ({ className = "h-5 w-5" }) => (
  <svg {...base} className={className}>
    <rect x="3" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="3" width="7" height="7" rx="1.5" />
    <rect x="3" y="14" width="7" height="7" rx="1.5" />
    <rect x="14" y="14" width="7" height="7" rx="1.5" />
  </svg>
);

export const PlusIcon = ({ className = "h-5 w-5" }) => (
  <svg {...base} className={className}>
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

export const HeartIcon = ({ className = "h-5 w-5" }) => <svg {...base} className={className}><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.9-8.6a5.5 5.5 0 0 0-.1-7.8Z" /></svg>;
export const MenuIcon = ({ className = "h-5 w-5" }) => <svg {...base} className={className}><line x1="4" y1="7" x2="20" y2="7" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="17" x2="20" y2="17" /></svg>;
export const CloseIcon = ({ className = "h-5 w-5" }) => <svg {...base} className={className}><line x1="5" y1="5" x2="19" y2="19" /><line x1="19" y1="5" x2="5" y2="19" /></svg>;
export const ArrowIcon = ({ className = "h-5 w-5" }) => <svg {...base} className={className}><line x1="5" y1="12" x2="19" y2="12" /><polyline points="13 6 19 12 13 18" /></svg>;
export const StarIcon = ({ className = "h-5 w-5" }) => <svg {...base} className={className} fill="currentColor"><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9Z" /></svg>;
