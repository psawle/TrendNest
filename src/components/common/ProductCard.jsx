import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link
      to={`/products/${product.id}`}
      className="bg-white rounded-xl shadow-sm border hover:shadow-md transition-shadow overflow-hidden block"
    >
      <img src={product.image} alt={product.title} className="h-40 w-full object-cover" />
      <div className="p-4 space-y-1">
        <p className="text-xs text-gray-500 uppercase">{product.category}</p>
        <h3 className="font-medium truncate">{product.title}</h3>
        <p className="font-semibold text-[var(--primary)]">₹{product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
