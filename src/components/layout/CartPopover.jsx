import { useSelector } from "react-redux";
import Popover from "../common/Popover";

const CartPopover = () => {
  const cartItems = useSelector((state) => state.carts.cartsData);
  const itemCount = cartItems.length;

  return (
    <Popover
      ariaLabel="Cart"
      trigger={
        <span className="relative inline-block text-xl" aria-hidden="true">
          🛒
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-[var(--primary)] text-white text-[10px] flex items-center justify-center">
              {itemCount}
            </span>
          )}
        </span>
      }
    >
      <div className="w-80 bg-white rounded-xl shadow-lg border p-4">
        <h3 className="font-semibold mb-3">Your Cart</h3>

        {itemCount === 0 ? (
          <p className="text-sm text-gray-500">Your cart is empty.</p>
        ) : (
          <ul className="space-y-3 max-h-64 overflow-y-auto">
            {cartItems.map((item) => (
              <li key={item.id} className="flex items-center gap-3">
                <img src={item.image} alt={item.title} className="h-12 w-12 rounded object-cover" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{item.title}</p>
                  <p className="text-xs text-gray-500">Qty {item.quantity ?? 1}</p>
                </div>
                <span className="text-sm font-medium">₹{item.price}</span>
              </li>
            ))}
          </ul>
        )}

        <button
          type="button"
          disabled={itemCount === 0}
          className="w-full mt-4 py-2 rounded-lg text-white bg-[var(--primary)] hover:bg-[var(--primary-hover)] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Checkout
        </button>
      </div>
    </Popover>
  );
};

export default CartPopover;
