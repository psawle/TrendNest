import { Link } from "react-router-dom";
import { HeartIcon, StarIcon } from "./icons";

const ProductCard = ({ product, index = 0 }) => {
  const rating = (4.6 + (index % 4) / 10).toFixed(1);
  return <article className="group min-w-0 animate-rise" style={{ animationDelay: `${Math.min(index * 55, 350)}ms` }}>
    <Link to={`/products/${product.id}`} className="block overflow-hidden rounded-[14px] bg-[#efedf2]">
      <div className="relative aspect-[4/5] overflow-hidden"><img src={`${product.image}?auto=format&fit=crop&w=900&q=85`} alt={product.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" /><span className="absolute left-3 top-3 rounded-full bg-white/92 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wide text-[var(--ink)]">{index % 3 === 0 ? "New" : product.category}</span><button type="button" onClick={(e) => e.preventDefault()} className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/92 text-[var(--ink)] opacity-0 transition duration-300 hover:text-[var(--primary)] group-hover:opacity-100" aria-label="Add to wishlist"><HeartIcon className="h-4 w-4" /></button><span className="absolute inset-x-3 bottom-3 translate-y-12 rounded-full bg-[var(--ink)] py-2.5 text-center text-xs font-bold text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">Quick view</span></div>
    </Link>
    <div className="px-1 pb-1 pt-3"><div className="mb-1 flex items-center justify-between gap-2 text-xs"><span className="capitalize text-[var(--muted)]">{product.category}</span><span className="flex items-center gap-1 font-semibold text-[#554f61]"><StarIcon className="h-3.5 w-3.5 text-[#efae3b]" />{rating}</span></div><Link to={`/products/${product.id}`} className="block truncate text-sm font-bold text-[var(--ink)] transition-colors hover:text-[var(--primary)]">{product.title}</Link><div className="mt-2 flex items-center gap-2"><span className="font-extrabold text-[var(--ink)]">₹{Number(product.price).toLocaleString("en-IN")}</span>{index % 2 === 0 && <span className="text-xs text-[var(--muted)] line-through">₹{Math.round(product.price * 1.22).toLocaleString("en-IN")}</span>}</div></div>
  </article>;
};
export default ProductCard;
