import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Popover from "../common/Popover";

const SearchPopover = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleSubmit = (event, close) => {
    event.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return;
    navigate(`/shop?search=${encodeURIComponent(trimmed)}`);
    close();
  };

  return (
    <Popover ariaLabel="Search" trigger={<span aria-hidden="true" className="text-xl">🔍</span>}>
      {({ close }) => (
        <form
          onSubmit={(event) => handleSubmit(event, close)}
          className="w-72 bg-white rounded-xl shadow-lg border p-3 flex gap-2"
        >
          <input
            autoFocus
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search products..."
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="px-3 py-2 rounded-lg text-white text-sm bg-[var(--primary)] hover:bg-[var(--primary-hover)]"
          >
            Go
          </button>
        </form>
      )}
    </Popover>
  );
};

export default SearchPopover;
