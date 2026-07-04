import Navbar from "../../components/layout/Navbar";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { productSchema } from "../../schemas/productSchema";
import { asyncCreateProduct } from "../../store/actions/productActions";

const CreateProduct = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(productSchema) });

  const onSubmit = async (product) => {
    try {
      await dispatch(asyncCreateProduct(product));
      toast.success("Product created successfully");
      navigate("/dashboard");
    } catch {
      toast.error("Failed to create product. Please try again.");
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-[calc(100vh-64px)] bg-gray-50 flex justify-center items-center px-4 py-8">
        <div className="bg-white rounded-xl shadow-md p-8 w-full max-w-md">
          <h1 className="text-3xl font-bold text-center">Add Product</h1>
          <p className="text-center text-gray-500 mt-2 mb-6">
            Fill in the details to list a new product
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
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
              Create Product
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateProduct;
