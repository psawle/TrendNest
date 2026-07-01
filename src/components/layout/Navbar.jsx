// 

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="
      h-16
      bg-white
      border-b
      px-6
      flex
      items-center
      justify-between
    "
    >
      <div className="flex items-center gap-10">
        <h1
          className="
          text-2xl
          font-bold
          text-[var(--primary)]
        "
        >
          Crown Clothing
        </h1>

        <div className="hidden md:flex gap-6">
          <Link>Shop All</Link>
          <Link>New Arrivals</Link>
          <Link>Best Sellers</Link>
          <Link>Deals</Link>
        </div>
      </div>

      <div className="flex gap-5">
        <span>🔍</span>
        <span>🛒</span>
        <span>👤</span>
      </div>
    </nav>
  );
};

export default Navbar;