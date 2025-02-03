// =============== 1
// "use client"
// import Image from "next/image";
// import Link from "next/link";
// import LoginForm from "./LoginForm";

// const LoginArea = () => {
//   return (
//     <div className="login-page">
//     <section className="singUp-area section-py-120">
//       <div className="container">
//         <div className="row justify-content-center">
//           <div className="col-xl-6 col-lg-8">
//             <div className="singUp-wrap">
//               <h2 className="title">Welcome back!</h2>
//               <p>
//                 Hey there! Ready to log in? Just enter your username and
//                 password below and you&apos;ll be back in action in no time.
//                 Let&apos;s go!
//               </p>
//               <div className="account__social">
//                 <Link href="#" className="account__social-btn">
//                   <Image
//                     width={25}
//                     height={25}
//                     src="/assets/images/icons/google.svg"
//                     alt="Google Icon"
//                   />
//                   Continue with Google
//                 </Link>
//               </div>
//               <div className="account__divider">
//                 <span>or</span>
//               </div>
//               <LoginForm />
//               <div className="account__switch">
//                 <p>
//                   Don&apos;t have an account?{" "}
//                   <Link href="/signup">Sign Up</Link>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//     </div>
//   );
// };

// export default LoginArea;

// ================== 2
"use client";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from 'react-redux';
import { googleSignIn } from '../../api/auth';
import LoginForm from "./LoginForm";

const LoginArea = () => {
  const { loading } = useSelector((state) => state?.auth);

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      // The redirect will be handled automatically by the googleSignIn function
    } catch (error) {
      console.error('Google sign-in error:', error);
    }
  };

  return (
    <div className="login-page">
      <section className="singUp-area section-py-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="singUp-wrap">
                <h2 className="title">Welcome back!</h2>
                <p>
                  Hey there! Ready to log in? Just enter your username and
                  password below and you&apos;ll be back in action in no time.
                  Let&apos;s go!
                </p>
                <div className="account__social">
                  <button 
                    onClick={handleGoogleSignIn}
                    disabled={loading}
                    className="account__social-btn"
                  >
                    <Image
                      width={25}
                      height={25}
                      src="/assets/images/icons/google.svg"
                      alt="Google Icon"
                    />
                    {loading ? 'Loading...' : 'Continue with Google'}
                  </button>
                </div>
                <div className="account__divider">
                  <span>or</span>
                </div>
                <LoginForm />
                <div className="account__switch">
                  <p>
                    Don&apos;t have an account?{" "}
                    <Link href="/signup">Sign Up</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginArea;

