// Single source of truth for the navbar's shop links. Both the Navbar (rendering
// the links) and the Shop page (resolving a slug to API filter params) read from
// this list, so adding/renaming a collection is a one-line change in one place.
//
// `params` is spread straight into the products API call. Until the product data
// model exposes real fields like `isNew` / `bestSeller` / `onSale`, every
// collection resolves to the full catalog — the filter contract is already wired
// up so real filtering is a one-line change here once that data exists.
export const SHOP_COLLECTIONS = [
  { slug: "", label: "Shop All", params: {} },
  { slug: "new-arrivals", label: "New Arrivals", params: {} },
  { slug: "best-sellers", label: "Best Sellers", params: {} },
  { slug: "deals", label: "Deals", params: {} },
];

export const getCollectionBySlug = (slug = "") =>
  SHOP_COLLECTIONS.find((collection) => collection.slug === slug) ?? SHOP_COLLECTIONS[0];
