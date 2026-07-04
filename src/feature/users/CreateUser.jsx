import Navbar from "../../components/layout/Navbar";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { createUserSchema } from "../../schemas/userSchema";
import { asyncUserRegister } from "../../store/actions/userActions";

const CreateUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(createUserSchema) });

  const onSubmit = async (user) => {
    try {
      await dispatch(asyncUserRegister(user));
      toast.success("User created successfully");
      navigate("/dashboard");
    } catch {
      toast.error("Failed to create user. Please try again.");
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-[calc(100vh-64px)] bg-gray-50 flex justify-center items-center px-4 py-8">
        <div className="bg-white rounded-xl shadow-md p-8 w-full max-w-md">
          <h1 className="text-3xl font-bold text-center">Add User</h1>
          <p className="text-center text-gray-500 mt-2 mb-6">
            Fill in the details to create a new user
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <Input
              label="Name"
              error={errors.name?.message}
              {...register("name")}
            />
            <Input
              label="Email Address"
              type="email"
              error={errors.email?.message}
              {...register("email")}
            />
            <Input
              label="Password"
              type="password"
              error={errors.password?.message}
              {...register("password")}
            />

            <Button type="submit" loading={isSubmitting}>
              Create User
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateUser;
