import React from "react";
import Logo from "../Logos/Logo";
import LogoWhite from "../Logos/LogoWhite";
import { Link } from "react-router-dom";

const LoginScreen = () => {
  return (
    <div className="relative min-h-screen w-full bg-[url('/images/login-bg.jpg')] bg-cover bg-center ">
      {/* Dark Blue Overlay */}
      <div className="absolute inset-0 bg-[#2A2E55]/80"></div>

      {/* Top Left Logo */}
      <div className="hidden md:flex absolute top-0 md:top-6 left-6 z-20  items-center gap-2">
        <LogoWhite />
      </div>

      {/* Centered Content Wrapper */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
        {/* Glassmorphism Card */}
        <div className="w-full max-w-2xl rounded-2xl border border-white/20 bg-[#2033F4]/10 p-8 md:p-12 shadow-2xl backdrop-blur-xs">
          {/* Header Text */}
          <div className="mb-10 text-center">
            <h1 className="mb-2 text-3xl font-bold text-white">
              Let's Get Started!
            </h1>
            <p className="text-gray-300 font-light">
              Let's dive into your account
            </p>
          </div>

          {/* Social Login Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {/* Google */}
            <button className="flex items-center justify-between gap-3 rounded-lg border border-white/30 bg-transparent py-2 px-3 text-white hover:bg-white/10 transition-colors group">
              <img
                src="/icons/google.svg"
                alt="google-icon"
                className="text-xl group-hover:scale-110 transition-transform"
              />
              <span className="text-sm font-medium">Continue with Google</span>
            </button>

            {/* Apple */}
            <button className="flex items-center justify-between gap-3 rounded-lg border border-white/30 bg-transparent py-2 px-3 text-white hover:bg-white/10 transition-colors group">
              <img
                alt="apple-icon"
                src="/icons/flowbite_apple-solid.svg"
                className="fa-brands fa-apple text-xl group-hover:scale-110 transition-transform"
              />
              <span className="text-sm font-medium">Continue with Apple</span>
            </button>

            {/* Facebook */}
            <button className="flex items-center justify-between gap-3 rounded-lg border border-white/30 bg-transparent py-2 px-3 !text-white hover:bg-white/10 transition-colors group">
              <img
                alt="facebook-icon"
                src="/icons/logos_facebook.svg"
                className="fa-brands fa-facebook text-xl text-blue-400 group-hover:scale-110 transition-transform"
              />
              <span className="text-sm font-medium">
                Continue with Facebook
              </span>
            </button>

            {/* Twitter / X */}
            <button className="flex items-center justify-between gap-3 rounded-lg border border-white/30 bg-transparent py-2 px-3 text-white hover:bg-white/10 transition-colors group">
              <img
                alt="twitter-icon"
                src="/icons/twitter.svg"
                className="fa-brands fa-x-twitter text-xl group-hover:scale-110 transition-transform"
              />
              <span className="text-sm font-medium">Continue with Twitter</span>
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col md:px-28 gap-4 justify-center">
            <Link
              to="/auth/signup"
              className="rounded-lg !text-center bg-[#1D7ED8] py-3 text-sm font-bold text-white shadow-lg hover:bg-blue-600 transition-colors"
            >
              SIGN UP
            </Link>
            <Link
              to="/auth/login"
              className=" rounded-lg !text-center bg-white/20 py-3 text-sm font-bold text-white hover:bg-white/30 transition-colors"
            >
              LOG IN
            </Link>
          </div>

          {/* Footer Terms */}
          <div className="mt-8 text-center text-xs text-gray-300">
            <p>
              By proceeding further you agree to our{" "}
              <a href="#" className="font-bold text-white hover:underline">
                Terms & conditions
              </a>
            </p>
            <p>
              and{" "}
              <a href="#" className="font-bold text-white hover:underline">
                Privacy policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
