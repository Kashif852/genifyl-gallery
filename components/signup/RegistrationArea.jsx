"use client"
import RegistrationForm from "./RegistrationForm";
import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from 'react-redux';
import { googleSignIn } from '../../api/auth';
const RegistrationArea = () => {
  const { loading } = useSelector((state) => state?.auth | false);

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      // The redirect will be handled automatically by the googleSignIn function
    } catch (error) {
      console.error('Google sign-in error:', error);
    }
  };
  return (
    <div className="signup-page">
    <section className="singUp-area section-py-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div className="singUp-wrap">
              <h2 className="title">Create Your Account</h2>
              <p>
                Hey there! Ready to join the party? We just need a few details
                from you to get <br /> started. Let&apos;s do this!
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
                  Continue with Google
                </button>
              </div>
              <div className="account__divider">
                <span>or</span>
              </div>
              <RegistrationForm />
              <div className="account__switch">
                <p>
                  Already have an account?{" "}
                  <Link href="/login">Login</Link>
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

export default RegistrationArea;
