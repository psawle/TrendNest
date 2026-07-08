import { Link, NavLink } from "react-router-dom";
import { SHOP_COLLECTIONS } from "../../constants/collections";
import SearchPopover from "./SearchPopover";
import CartPopover from "./CartPopover";
import ProfileMenu from "./ProfileMenu";

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
        <Link
          to="/shop"
          className="
          text-2xl
          font-bold
          text-[var(--primary)]
        "
        >
          TrendNest
        </Link>

        <div className="hidden md:flex gap-6">
          {SHOP_COLLECTIONS.map(({ slug, label }) => (
            <NavLink
              key={slug || "all"}
              to={slug ? `/shop/${slug}` : "/shop"}
              end={slug === ""}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? "text-[var(--primary)]" : "text-gray-700 hover:text-[var(--primary)]"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-5">
        <SearchPopover />
        <CartPopover />
        <ProfileMenu />
      </div>
    </nav>
  );
};

export default Navbar;
