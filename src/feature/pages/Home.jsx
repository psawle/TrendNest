import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Navbar from "../../components/layout/Navbar";
import ProductCard from "../../components/common/ProductCard";
import { asyncGetProducts } from "../../store/actions/productActions";
import { ArrowIcon, StarIcon } from "../../components/common/icons";

const categories = [
  ["Fashion", "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=700&q=80"],
  ["Tech", "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=700&q=80"],
  ["Home", "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=700&q=80"],
  ["Essentials", "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=700&q=80"],
];

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.productData);
  useEffect(() => { dispatch(asyncGetProducts()); }, [dispatch]);
  return <div className="site-shell"><Navbar />
    <main>
      <section className="container-custom grid min-h-[600px] items-stretch gap-5 py-5 lg:grid-cols-[1.12fr_.88fr]">
        <div className="relative flex min-h-[530px] overflow-hidden rounded-[18px] bg-[#e3def0] p-7 sm:p-11 lg:min-h-0">
          <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1500&q=90" alt="New season fashion collection" className="absolute inset-0 h-full w-full object-cover object-center" /><div className="absolute inset-0 bg-gradient-to-r from-[#1c1725]/75 via-[#1c1725]/28 to-transparent" />
          <div className="relative z-10 flex max-w-xl flex-col justify-end text-white"><p className="mb-4 text-xs font-bold uppercase tracking-[.18em] text-white/75">The summer edit</p><h1 className="display-title">Made for the moments ahead.</h1><p className="mt-5 max-w-sm text-sm leading-6 text-white/80">Discover considered pieces, thoughtful design, and everyday objects with a little more character.</p><div className="mt-8 flex flex-wrap gap-3"><Link to="/shop" className="button-primary bg-white text-[var(--ink)] shadow-none hover:bg-white">Shop new arrivals <ArrowIcon className="h-4 w-4" /></Link><Link to="/shop/best-sellers" className="button-secondary border-white/40 bg-white/10 text-white hover:bg-white/20">Explore best sellers</Link></div></div>
        </div>
        <div className="flex min-h-[360px] flex-col justify-between overflow-hidden rounded-[18px] bg-[var(--lavender)] p-7 sm:p-10"><div><p className="eyebrow">Selected with intent</p><h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">More to love, less to look for.</h2><p className="mt-4 max-w-sm section-copy">A refined edit across the things that make your day feel more like yours.</p></div><div className="mt-8 grid grid-cols-2 gap-3">{[["48h", "Dispatch"],["4.9/5", "From shoppers"]].map(([value,label]) => <div key={label} className="rounded-xl border border-[#ddd6fa] bg-white/55 p-4"><strong className="block text-xl">{value}</strong><span className="mt-1 block text-xs text-[var(--muted)]">{label}</span></div>)}</div></div>
      </section>
      <section className="container-custom py-16"><div className="mb-7 flex items-end justify-between gap-5"><div><p className="eyebrow">Start somewhere good</p><h2 className="section-title mt-3">Shop by mood.</h2></div><Link to="/shop" className="hidden items-center gap-2 text-sm font-bold text-[var(--primary)] sm:flex">View all <ArrowIcon className="h-4 w-4" /></Link></div><div className="grid grid-cols-2 gap-3 md:grid-cols-4">{categories.map(([name, image]) => <Link to="/shop" key={name} className="group relative aspect-[.9] overflow-hidden rounded-[14px] bg-[#eae7ef]"><img src={image} alt={name} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" /><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 pt-16"><span className="text-sm font-bold text-white">{name}</span></div></Link>)}</div></section>
      <section className="bg-[#f0edff] py-16"><div className="container-custom"><div className="mb-8 flex items-end justify-between"><div><p className="eyebrow">Trending now</p><h2 className="section-title mt-3">The ones getting noticed.</h2></div><Link to="/shop" className="button-secondary hidden sm:inline-flex">Shop all</Link></div><div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">{products.slice(0,4).map((product, index) => <ProductCard product={product} index={index} key={product.id} />)}</div></div></section>
      <section className="container-custom grid gap-5 py-16 lg:grid-cols-[.8fr_1.2fr]"><div className="rounded-[18px] bg-[var(--ink)] p-8 text-white sm:p-11"><p className="text-xs font-bold uppercase tracking-[.16em] text-[#c8bdff]">Why TrendNest</p><h2 className="mt-4 text-3xl font-semibold leading-tight">Nice things, brought together beautifully.</h2><p className="mt-5 max-w-sm text-sm leading-6 text-white/65">We make browsing feel less like a task and more like an escape. Carefully chosen products, a little surprise, zero noise.</p><Link to="/shop" className="button-primary mt-8 bg-[var(--primary)]">Explore the edit <ArrowIcon className="h-4 w-4" /></Link></div><div className="soft-grid grid place-items-center rounded-[18px] p-8 sm:p-12"><blockquote className="max-w-xl text-center"><div className="mb-6 flex justify-center gap-1 text-[#e9a92e]">{Array.from({length:5}).map((_,i) => <StarIcon key={i} className="h-4 w-4" />)}</div><p className="text-2xl font-medium leading-snug sm:text-3xl">&ldquo;The rare shop where every scroll makes me want to see what is next.&rdquo;</p><footer className="mt-6 text-sm font-bold">Aisha M. <span className="font-normal text-[var(--muted)]">Verified shopper</span></footer></blockquote></div></section>
      <section className="border-y border-[var(--line)] bg-white py-14"><div className="container-custom flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left"><div><p className="eyebrow">A note worth getting</p><h2 className="mt-2 text-2xl font-semibold">New drops and private offers.</h2></div><form className="flex w-full max-w-md gap-2"><input aria-label="Email address" type="email" placeholder="Your email address" className="min-w-0 flex-1 rounded-full border border-[var(--line)] px-4 text-sm outline-none focus:border-[var(--primary)]" /><button className="button-primary shrink-0" type="submit">Join us</button></form></div></section>
    </main><footer className="container-custom flex flex-col gap-4 py-9 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between"><span className="font-bold text-[var(--ink)]">TrendNest</span><span>Designed for the delightful everyday.</span><span>India</span></footer>
  </div>;
};
export default Home;
