import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Popover from "../common/Popover";
import { SearchIcon } from "../common/icons";

const SearchPopover = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleSubmit = (event, close) => {
    event.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return;
    navigate(`/shop?search=${encodeURIComponent(trimmed)}`);
    setQuery("");
    close();
  };

  return (
    <Popover ariaLabel="Search" trigger={<SearchIcon />} panelClassName="w-80 p-3">
      {({ close }) => (
        <form onSubmit={(event) => handleSubmit(event, close)} className="relative">
          <SearchIcon className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            autoFocus
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search products..."
            className="
              w-full rounded-xl border border-gray-200 bg-gray-50
              py-2.5 pl-9 pr-20 text-sm outline-none transition-colors
              focus:border-[var(--primary)] focus:bg-white
              focus:ring-2 focus:ring-[var(--primary)]/15
            "
          />
          <button
            type="submit"
            className="
              absolute right-1.5 top-1/2 -translate-y-1/2 rounded-lg
              bg-[var(--primary)] px-3 py-1.5 text-xs font-medium text-white
              transition-colors hover:bg-[var(--primary-hover)]
            "
          >
            Search
          </button>
        </form>
      )}
    </Popover>
  );
};

export default SearchPopover;
