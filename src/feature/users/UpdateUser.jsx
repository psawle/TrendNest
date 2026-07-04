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
import { updateUserSchema } from "../../schemas/userSchema";
import {
  asyncGetUserById,
  asyncUpdateUser,
} from "../../store/actions/userActions";

const UpdateUser = () => {
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
  } = useForm({ resolver: zodResolver(updateUserSchema) });

  useEffect(() => {
    let isMounted = true;

    dispatch(asyncGetUserById(id))
      .then((user) => {
        if (isMounted) reset({ ...user, password: "" });
      })
      .catch(() => {
        if (isMounted) setLoadError("Could not load this user.");
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [id, dispatch, reset]);

  const onSubmit = async ({ password, ...user }) => {
    try {
      const payload = password ? { ...user, password } : user;
      await dispatch(asyncUpdateUser(id, payload));
      toast.success("User updated successfully");
      navigate("/dashboard");
    } catch {
      toast.error("Failed to update user. Please try again.");
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-[calc(100vh-64px)] bg-gray-50 flex justify-center items-center px-4 py-8">
        <div className="bg-white rounded-xl shadow-md p-8 w-full max-w-md">
          <h1 className="text-3xl font-bold text-center">Update User</h1>

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
                placeholder="Leave blank to keep current password"
                error={errors.password?.message}
                {...register("password")}
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

export default UpdateUser;
