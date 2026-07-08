import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import Navbar from "../../components/layout/Navbar";
import Spinner from "../../components/common/Spinner";
import Button from "../../components/common/Button";
import { asyncGetProductById } from "../../store/actions/productActions";

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    dispatch(asyncGetProductById(id))
      .then((data) => {
        if (isMounted) setProduct(data);
      })
      .catch(() => {
        if (isMounted) setError("Could not load this product.");
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [id, dispatch]);

  return (
    <>
      <Navbar />

      <div className="min-h-[calc(100vh-64px)] bg-gray-50 px-6 py-8">
        {loading && (
          <div className="flex justify-center py-16">
            <Spinner />
          </div>
        )}

        {!loading && error && <p className="text-center text-red-500">{error}</p>}

        {!loading && !error && product && (
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm border p-6 grid sm:grid-cols-2 gap-8">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-80 object-cover rounded-lg"
            />
            <div className="space-y-4">
              <p className="text-xs text-gray-500 uppercase">{product.category}</p>
              <h1 className="text-2xl font-bold">{product.title}</h1>
              <p className="text-xl font-semibold text-[var(--primary)]">₹{product.price}</p>
              <p className="text-gray-600">{product.description}</p>

              {/* Enable once cart actions are implemented (cartActions.jsx is currently empty) */}
              <Button type="button" disabled>
                Add to Cart
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Product;
