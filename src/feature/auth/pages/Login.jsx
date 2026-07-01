import Navbar from "../../../components/layout/Navbar";
import Input from "../../../components/common/Input";
import Button from "../../../components/common/Button";
import Divider from "../../../components/common/Divider";
import Checkbox from "../../../components/common/Checkbox";

import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../../schemas/loginSchema";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../store/actions/userActions";

const Login = () => {
  const navigate = useNavigate();
  const {register,handleSubmit , formState : {errors}} = useForm({resolver :zodResolver(loginSchema)})
  const dispatch = useDispatch();
  const onSubmit = async (user) => {
   console.log(user);
   const reslogin = await dispatch(loginUser(user));
   console.log("reslogin",reslogin)
  }

  return (
    <>
      <Navbar />

      <div
        className="
        min-h-[calc(100vh-64px)]
        bg-gray-50
        flex
        justify-center
        items-center
        px-4
      "
      >
        <div
          className="
          bg-white
          rounded-xl
          shadow-md
          p-8
          w-full
          max-w-md
        "
        >
          <h1 className="text-4xl font-bold text-center">
            Welcome Back
          </h1>

          <p
            className="
            text-center
            text-gray-500
            mt-2
            mb-6
          "
          >
            Please enter your details
          </p>

          <div className="grid grid-cols-2 gap-3 mb-6">
            <button
              className="
              border
              py-3
              rounded-lg
            "
            >
              Google
            </button>

            <button
              className="
              border
              py-3
              rounded-lg
            "
            >
              Apple
            </button>
          </div>

          <Divider />

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 mt-6">
            <div>
            <Input
              error={errors.email?.message}
              {...register("email")}
              label="Email"
              type="email"
            />
             {/* {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )} */}
            </div>
            <div>
            <Input
              label="Password"
              type="password"
              error={errors.password?.message}
              {...register("password")}
            />
            {/* {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )} */}
           </div>
{/* 
            <Checkbox
              label="Remember me for 30 days"
            /> */}

            <Button type="submit">
              Login
            </Button>
          </form>

          <p className="text-center mt-6">
            Don't have an account?
            <span onClick={() => navigate("/register")}
              className="
              text-[var(--primary)]
              font-semibold
              ml-1
            "
            >
              Register
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;