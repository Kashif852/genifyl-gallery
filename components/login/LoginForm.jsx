"use client";

import { toast } from "react-toastify";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import BtnArrow from "./svg/BtnArrow";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { login } from "/redux/slices/authSlice"; // Assuming Redux slice is set up

const LoginForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  // Validation schema using yup
  const schema = yup
    .object({
      email: yup
        .string()
        .required("Email is required")
        .email("Enter a valid email"),
      password: yup.string().required("Password is required"),
    })
    .required();

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      
      const result = await dispatch(login(data)).unwrap();
  
      toast.success("Login successful", { position: "top-center" });
      
      // Ensure state is updated before navigation
      await new Promise(resolve => setTimeout(resolve, 100));
      router.push("/dashboard");
    } catch (error) {
      console.error('Login failed:', error);
      toast.error(
        typeof error === 'string' ? error : "Login failed. Please try again.", 
        { position: "top-center" }
      );
    } finally {
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="account__form">
      <div className="form-grp">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          {...register("email")}
          type="text"
          placeholder="Email"
        />
        <p className="form_error">{errors?.email?.message}</p>
      </div>
      <div className="form-grp">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          {...register("password")}
          type="password"
          placeholder="Password"
        />
        <p className="form_error">{errors?.password?.message}</p>
      </div>
      <div className="account__check">
        <div className="account__check-remember">
          {/* Optional Remember Me */}
        </div>
        <div className="account__check-forgot">
          <Link href="/forgot-password">Forgot Password?</Link>
        </div>
      </div>
      <button
        type="submit"
        className="btn-two arrow-btn"
      >
        Sign In
      </button>
    </form>
  );
};

export default LoginForm;
