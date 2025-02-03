// "use client";

// import { toast } from "react-toastify";
// import * as yup from "yup";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { useDispatch } from "react-redux";
// import { signUp } from "../../redux/slices/authSlice";
// import { useRouter } from "next/navigation";

// // Yup schema for form validation
// const schema = yup
//   .object({
//     fname: yup.string().required("First name is required"),
//     lname: yup.string().required("Last name is required"),
//     email: yup.string().email("Invalid email").required("Email is required"),
//     password: yup
//       .string()
//       .min(6, "Password must be at least 6 characters")
//       .required("Password is required"),
//     cpassword: yup
//       .string()
//       .oneOf([yup.ref("password")], "Passwords must match")
//       .required("Confirm password is required"),
//   })
//   .required();

// const RegistrationForm = () => {
//   const dispatch = useDispatch();
//   const router = useRouter();

//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(schema),
//   });

//   const onSubmit = async (data) => {
//     try {
//       const userData = {
//         name: `${data.fname} ${data.lname}`,
//         email: data.email,
//         password: data.password,
//       };

//       // Dispatch Redux action for signup
//       await dispatch(signUp(userData)).unwrap();

//       // On success, redirect to the dashboard
//       toast.success("Registration successful! Redirecting to dashboard...", {
//         position: "top-center",
//       });
//       router.push("/dashboard"); // Redirect to dashboard
//     } catch (error) {
//       // Handle signup failure
//       toast.error(error || "Signup failed. Please try again.", {
//         position: "top-center",
//       });
//     } finally {
//       reset(); // Clear the form fields
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="account__form">
//       <div className="row gutter-20">
//         <div className="col-md-6">
//           <div className="form-grp">
//             <label htmlFor="fast-name">First Name</label>
//             <input
//               type="text"
//               {...register("fname")}
//               id="fast-name"
//               placeholder="First Name"
//             />
//             <p className="form_error">{errors?.fname?.message}</p>
//           </div>
//         </div>
//         <div className="col-md-6">
//           <div className="form-grp">
//             <label htmlFor="last-name">Last Name</label>
//             <input
//               type="text"
//               {...register("lname")}
//               id="last-name"
//               placeholder="Last Name"
//             />
//             <p className="form_error">{errors?.lname?.message}</p>
//           </div>
//         </div>
//       </div>
//       <div className="form-grp">
//         <label htmlFor="email">Email</label>
//         <input
//           type="email"
//           {...register("email")}
//           id="email"
//           placeholder="Email"
//         />
//         <p className="form_error">{errors?.email?.message}</p>
//       </div>
//       <div className="form-grp">
//         <label htmlFor="password">Password</label>
//         <input
//           type="password"
//           {...register("password")}
//           id="password"
//           placeholder="Password"
//         />
//         <p className="form_error">{errors?.password?.message}</p>
//       </div>
//       <div className="form-grp">
//         <label htmlFor="confirm-password">Confirm Password</label>
//         <input
//           type="password"
//           {...register("cpassword")}
//           id="confirm-password"
//           placeholder="Confirm Password"
//         />
//         <p className="form_error">{errors?.cpassword?.message}</p>
//       </div>
//       <button
//         type="submit"
//         className="btn-two arrow-btn"
//         style={{ width: "100%", textAlign: "left" }}
//       >
//         Sign Up
//       </button>
//     </form>
//   );
// };

// export default RegistrationForm;
"use client";

import { toast } from "react-toastify";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { signUp } from "../../redux/slices/authSlice";
import { useRouter } from "next/navigation";

// Yup schema for form validation
const schema = yup
  .object({
    fname: yup.string().required("First name is required"),
    lname: yup.string().required("Last name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    cpassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("Confirm password is required"),
  })
  .required();

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const userData = {
        name: `${data.fname} ${data.lname}`.trim(),
        email: data.email,
        password: data.password
      };
  
      // Dispatch Redux action for signup
      const result = await dispatch(signUp(userData)).unwrap();

       alert("Registration successful! please verify your email")
      
      router.push("/dashboard");
    } catch (error) {
      // alert(JSON.stringify(error.response?.data?.error?.message) || "Registration failed. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="account__form">
      
      <div className="row gutter-20">
        <div className="col-md-6">
          <div className="form-grp">
            <label htmlFor="fast-name">First Name</label>
            <input
              type="text"
              {...register("fname")}
              id="fast-name"
              placeholder="First Name"
            />
            <p className="form_error">{errors?.fname?.message}</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-grp">
            <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              {...register("lname")}
              id="last-name"
              placeholder="Last Name"
            />
            <p className="form_error">{errors?.lname?.message}</p>
          </div>
        </div>
      </div>
      <div className="form-grp">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          {...register("email")}
          id="email"
          placeholder="Email"
        />
        <p className="form_error">{errors?.email?.message}</p>
      </div>
      <div className="form-grp">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          {...register("password")}
          id="password"
          placeholder="Password"
        />
        <p className="form_error">{errors?.password?.message}</p>
      </div>
      <div className="form-grp">
        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          type="password"
          {...register("cpassword")}
          id="confirm-password"
          placeholder="Confirm Password"
        />
        <p className="form_error">{errors?.cpassword?.message}</p>
      </div>
      <button
        type="submit"
        className="btn-two arrow-btn"
      >
        Sign Up
      </button>
    </form>
  );
};

export default RegistrationForm;
