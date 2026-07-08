import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/layout/Navbar";
import ProductCard from "../../components/common/ProductCard";
import Spinner from "../../components/common/Spinner";
import { asyncGetProducts } from "../../store/actions/productActions";
import { getCollectionBySlug } from "../../constants/collections";

const Shop = () => {
  const { collection: collectionSlug = "" } = useParams();
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") ?? "";
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.productData);
  const collection = getCollectionBySlug(collectionSlug);

  // Derived (not duplicated) loading state: "loading" simply means the products
  // currently in the store don't correspond to this collection/search yet.
  const requestKey = `${collection.slug}:${search}`;
  const [loadedKey, setLoadedKey] = useState(null);
  const loading = loadedKey !== requestKey;

  useEffect(() => {
    let isMounted = true;

    const params = { ...collection.params };
    // json-server v1's query syntax: `field:contains` does a case-insensitive
    // substring match (there's no free-text `q` param like the old v0 API).
    if (search) params["title:contains"] = search;

    dispatch(asyncGetProducts(params)).finally(() => {
      if (isMounted) setLoadedKey(requestKey);
    });

    return () => {
      isMounted = false;
    };
  }, [collection, search, dispatch, requestKey]);

  return (
    <>
      <Navbar />

      <div className="min-h-[calc(100vh-64px)] bg-gray-50 px-6 py-8">
        <h1 className="text-2xl font-bold mb-1">{collection.label}</h1>
        {search && (
          <p className="text-gray-500 mb-6">Search results for &quot;{search}&quot;</p>
        )}

        {loading ? (
          <div className="flex justify-center py-16">
            <Spinner />
          </div>
        ) : products.length === 0 ? (
          <p className="text-gray-500">No products found.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Shop;
