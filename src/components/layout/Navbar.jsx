import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { SHOP_COLLECTIONS } from "../../constants/collections";
import SearchPopover from "./SearchPopover";
import CartPopover from "./CartPopover";
import ProfileMenu from "./ProfileMenu";
import { HeartIcon, MenuIcon, CloseIcon } from "../common/icons";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const linkClass = ({ isActive }) => `relative text-sm font-semibold transition-colors after:absolute after:-bottom-2 after:left-0 after:h-px after:w-full after:origin-left after:bg-[var(--primary)] after:transition-transform ${isActive ? "text-[var(--ink)] after:scale-x-100" : "text-[#706d7b] hover:text-[var(--ink)] after:scale-x-0 hover:after:scale-x-100"}`;
  return <header className="sticky top-0 z-40 border-b border-[#e9e7ef]/80 bg-[#fbfafc]/85 backdrop-blur-xl">
    <nav className="container-custom flex h-[72px] items-center justify-between gap-4">
      <div className="flex items-center gap-8 lg:gap-12">
        <Link to="/dashboard" className="flex items-center gap-2.5" aria-label="TrendNest home"><span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--ink)] text-sm font-black text-white">T</span><span className="text-lg font-black tracking-tight">TrendNest</span></Link>
        <div className="hidden items-center gap-7 md:flex">{SHOP_COLLECTIONS.map(({ slug, label }) => <NavLink key={slug || "all"} to={slug ? `/shop/${slug}` : "/shop"} end={!slug} className={linkClass}>{label}</NavLink>)}</div>
      </div>
      <div className="flex items-center gap-1.5"><div className="hidden sm:block"><SearchPopover /></div><button type="button" className="icon-button hidden sm:inline-flex" aria-label="Wishlist"><HeartIcon /></button><CartPopover /><ProfileMenu /><button type="button" onClick={() => setOpen(!open)} className="icon-button md:hidden" aria-label="Toggle menu">{open ? <CloseIcon /> : <MenuIcon />}</button></div>
    </nav>
    {open && <div className="border-t border-[var(--line)] bg-white px-5 py-5 md:hidden animate-popover-in"><div className="mb-4 sm:hidden"><SearchPopover /></div><div className="flex flex-col gap-4">{SHOP_COLLECTIONS.map(({ slug, label }) => <NavLink onClick={() => setOpen(false)} key={slug || "all"} to={slug ? `/shop/${slug}` : "/shop"} className="text-sm font-semibold text-[#4d4958]">{label}</NavLink>)}</div></div>}
  </header>;
};
export default Navbar;
