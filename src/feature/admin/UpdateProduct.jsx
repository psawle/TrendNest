import { useEffect, useState } from "react";
import Navbar from "../../components/layout/Navbar";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import Spinner from "../../components/common/Spinner";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { productSchema } from "../../schemas/productSchema";
import {
  asyncGetProductById,
  asyncUpdateProduct,
} from "../../store/actions/productActions";

const UpdateProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(productSchema) });

  useEffect(() => {
    let isMounted = true;

    dispatch(asyncGetProductById(id))
      .then((product) => {
        if (isMounted) reset(product);
      })
      .catch(() => {
        if (isMounted) setLoadError("Could not load this product.");
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [id, dispatch, reset]);

  const onSubmit = async (product) => {
    try {
      await dispatch(asyncUpdateProduct(id, product));
      toast.success("Product updated successfully");
      navigate("/dashboard");
    } catch {
      toast.error("Failed to update product. Please try again.");
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-[calc(100vh-64px)] bg-gray-50 flex justify-center items-center px-4 py-8">
        <div className="bg-white rounded-xl shadow-md p-8 w-full max-w-md">
          <h1 className="text-3xl font-bold text-center">Update Product</h1>

          {loading && (
            <div className="flex justify-center py-10">
              <Spinner />
            </div>
          )}

          {!loading && loadError && (
            <p className="text-red-500 text-center mt-6">{loadError}</p>
          )}

          {!loading && !loadError && (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5 mt-6"
            >
              <Input
                label="Title"
                error={errors.title?.message}
                {...register("title")}
              />
              <Input
                label="Price"
                type="number"
                step="0.01"
                error={errors.price?.message}
                {...register("price", { valueAsNumber: true })}
              />
              <Input
                label="Category"
                error={errors.category?.message}
                {...register("category")}
              />
              <Input
                label="Image URL"
                error={errors.image?.message}
                {...register("image")}
              />
              <Input
                label="Description"
                error={errors.description?.message}
                {...register("description")}
              />

              <Button type="submit" loading={isSubmitting}>
                Save Changes
              </Button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default UpdateProduct;
