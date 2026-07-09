import { useSelector } from "react-redux";
import Popover from "../common/Popover";
import { ShoppingBagIcon } from "../common/icons";

const CartPopover = () => {
  const cartItems = useSelector((state) => state.carts.cartsData);
  const itemCount = cartItems.length;
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * (item.quantity ?? 1), 0);

  return (
    <Popover
      ariaLabel="Cart"
      panelClassName="w-80 p-4"
      trigger={
        <span className="relative flex items-center justify-center">
          <ShoppingBagIcon />
          {itemCount > 0 && (
            <span
              className="
                absolute -top-1.5 -right-1.5 flex h-4 min-w-4 items-center justify-center
                rounded-full bg-[var(--primary)] px-1 text-[10px] font-medium text-white
                ring-2 ring-white
              "
            >
              {itemCount}
            </span>
          )}
        </span>
      }
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold">Your Cart</h3>
        {itemCount > 0 && (
          <span className="text-xs text-gray-500">
            {itemCount} item{itemCount > 1 ? "s" : ""}
          </span>
        )}
      </div>

      {itemCount === 0 ? (
        <div className="flex flex-col items-center gap-2 py-8 text-center">
          <ShoppingBagIcon className="h-8 w-8 text-gray-300" />
          <p className="text-sm text-gray-500">Your cart is empty.</p>
        </div>
      ) : (
        <>
          <ul className="space-y-3 max-h-64 overflow-y-auto">
            {cartItems.map((item) => (
              <li key={item.id} className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-12 w-12 rounded-lg object-cover bg-gray-100"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{item.title}</p>
                  <p className="text-xs text-gray-500">Qty {item.quantity ?? 1}</p>
                </div>
                <span className="text-sm font-medium">₹{item.price}</span>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-between mt-4 mb-3 pt-3 border-t border-gray-100 text-sm">
            <span className="text-gray-500">Subtotal</span>
            <span className="font-semibold">₹{subtotal}</span>
          </div>
        </>
      )}

      <button
        type="button"
        disabled={itemCount === 0}
        className="
          w-full py-2.5 rounded-xl text-sm font-medium text-white
          bg-[var(--primary)] transition-colors hover:bg-[var(--primary-hover)]
          disabled:opacity-40 disabled:cursor-not-allowed
        "
      >
        Checkout
      </button>
    </Popover>
  );
};

export default CartPopover;
