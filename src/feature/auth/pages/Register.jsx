import Navbar from "../../../components/layout/Navbar";
import Input from "../../../components/common/Input";
import Button from "../../../components/common/Button";
import Checkbox from "../../../components/common/Checkbox";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../../../schemas/registerSchema";
import { asyncUserRegister } from "../../../store/actions/userActions";
import { useDispatch } from "react-redux";

const Register = () => {
  const navigate = useNavigate();
  const {register, handleSubmit, formState : {errors}} = useForm({resolver : zodResolver(registerSchema)});
  const dispatch = useDispatch()
  const onSubmit = (user) =>{
     console.log("userlll",user)
     try {
      const res =  dispatch(asyncUserRegister(user))
      console.log("res in register",res)
      if(res){
       navigate("/dashboard")
      } else {
       navigate("/");
      }
      
     } catch (error) {
      console.log("error in register",error)
     }
    
  }
  return (
    <>
      <Navbar />

      <div className=" min-h-[calc(100vh-64px)] bg-gray-50 flex justify-center items-center px-4 py-4" >
        <div  className=" bg-white rounded-xl shadow-md p-8 w-full max-w-md">
          <h1 className="text-4xl font-bold text-center">Create an Account</h1>
          <p className="  text-center  text-gray-500 mt-2 mb-8"> Join LuxeCommerce for premium shopping </p>
          <form className="p-3" onSubmit={handleSubmit(onSubmit)}>
            <Input label="Full Name"
            error={errors.name?.message}
            {...register("name")} />

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

            {/* <Checkbox
              label="I agree to Terms & Conditions"
            /> */}

            <Button type="submit">
              Create Account →
            </Button>
          </form>

          <p className="text-center mt-6">
            Already have an account?
            <span
            onClick={() => navigate("/")}
              className="
              text-[var(--primary)]
              font-semibold
              ml-1
            "
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;