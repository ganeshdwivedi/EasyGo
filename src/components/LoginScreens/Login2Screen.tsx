import React, { useState } from "react";
import LogoWhite from "../Logos/LogoWhite";
import { useForm } from "react-hook-form";
import SocialAuthButton from "../buttons/SocialBtn";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

interface LoginFormInputs {
  loginMethod: "email" | "mobile";
  email: string;
  mobileNumber: string;
  password: string;
  showPassword?: boolean;
  region?: string;
  isPending: boolean;
}
const Login2Screen = () => {
  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    defaultValues: { loginMethod: "email", region: "+91" },
  });
  const navigate = useNavigate();
  const { loginMethod, showPassword, isPending } = watch();

  console.log(errors, "errors");
  const onsubmit = async (data: LoginFormInputs) => {
    setValue("isPending", true);
    console.log(data, "data");
    const { email, mobileNumber, password, region } = data;

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/user/loginWithPhone`,
        {
          password,
          ...(loginMethod === "email" ? { email } : { mobileNumber, region }),
        }
      );

      localStorage.setItem("user", JSON.stringify(response.data.data));

      console.log(response.data, "response");
      setValue("isPending", false);
      navigate("/");
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string }>;
      console.log(axiosError.response?.data.message, "error");
      alert(axiosError.response?.data.message);
    } finally {
      setValue("isPending", false);
    }
  };
  return (
    <div className="relative min-h-screen w-full bg-[url('/images/login-bg.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-[#2A2E55]/80"></div>

      {/* Top Left Navigation/Logo */}
      <div className="hidden absolute md:flex  top-6 left-6 z-20 items-center gap-4 text-white">
        <button
          onClick={() => navigate(-1)}
          className="hover:bg-white/10  py-2 px-4 cursor-pointer rounded-full transition-colors"
        >
          {"<"}{" "}
        </button>
        <LogoWhite />
      </div>

      {/* Centered Glass Card */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-12">
        <div className="w-full max-w-[500px] rounded-2xl border border-white/20 bg-[#2033F4]/10 p-6 md:p-10 shadow-2xl backdrop-blur-xs">
          <h2 className="text-center text-2xl font-bold text-white mb-8">
            Log In Using Number or email
          </h2>

          {/* Toggle Switch (Mobile vs Email) */}
          <div className="bg-[#242b4d]/50 p-1 rounded-lg flex mb-8 border border-white/10">
            <button
              onClick={() => setValue("loginMethod", "mobile")}
              className={`flex-1 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                loginMethod === "mobile"
                  ? "bg-[#1D7ED8] text-white shadow-md"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Mobile
            </button>
            <button
              onClick={() => setValue("loginMethod", "email")}
              className={`flex-1 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                loginMethod === "email"
                  ? "bg-[#1D7ED8] text-white shadow-md"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Email
            </button>
          </div>

          {/* Form Inputs */}
          <form onSubmit={handleSubmit(onsubmit)} className="space-y-5">
            {/* Conditional Input based on State */}
            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1.5 ml-1">
                {loginMethod === "email" ? "Email Address" : "Mobile Number"}
              </label>
              {loginMethod === "email" && (
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-300 font-me dium">
                    <img src="/icons/email-icon.svg" alt="email-icon" />
                  </div>
                  <input
                    {...register("email", { required: true })}
                    type={"email"}
                    placeholder={"abc@email.com"}
                    className="w-full rounded-lg bg-white/10 border border-white/20 py-3 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  />
                </div>
              )}
              {loginMethod === "mobile" && (
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-300 font-me dium ">
                    +91
                  </div>
                  <input
                    {...register("mobileNumber", {
                      required: "Mobile number is required",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Enter a valid 10-digit mobile number",
                      },
                      minLength: {
                        value: 10,
                        message: "Mobile number must be 10 digits",
                      },
                      maxLength: {
                        value: 10,
                        message: "Mobile number must be 10 digits",
                      },
                    })}
                    onInput={(e) => {
                      e.currentTarget.value = e.currentTarget.value.replace(
                        /\D/g,
                        ""
                      );
                    }}
                    type="text"
                    inputMode="numeric"
                    placeholder={"+1 (555) 000-0000"}
                    className="pl-1 w-full rounded-lg bg-white/10 border border-white/20 py-3 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  />
                </div>
              )}
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1.5 ml-1">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <img src="/icons/lock.svg" alt="lock-icon" />
                </div>
                <input
                  {...register("password", { required: true })}
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full rounded-lg bg-white/10 border border-white/20 py-3 pl-10 pr-10 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                />
                <div
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-gray-400 hover:text-white"
                  onClick={() => setValue("showPassword", !showPassword)}
                >
                  {showPassword ? (
                    <img src="/icons/eye-close.svg" alt="eye-icon" />
                  ) : (
                    <img src="/icons/icon-eye.svg" alt="eye-icon" />
                  )}
                </div>
              </div>
            </div>

            {/* Login Button */}

            <button
              disabled={isPending}
              className={`w-full rounded-lg  py-3 text-sm font-bold text-white shadow-lg  transition-colors mt-2 ${
                isPending
                  ? "animate-bounce bg-gray-300 cursor-not-allowed"
                  : "bg-[#1D7ED8] hover:bg-blue-600"
              }`}
            >
              LOG IN {isPending ? "..." : ""}
            </button>
          </form>

          {/* Divider */}
          <div className="relative flex items-center py-6">
            <div className="flex-grow border-t border-white/20"></div>
            <span className="flex-shrink-0 mx-4 text-gray-400 text-xs">Or</span>
            <div className="flex-grow border-t border-white/20"></div>
          </div>

          {/* Social Buttons Grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <SocialAuthButton platform="google" />
            <SocialAuthButton platform="apple" />
            <SocialAuthButton platform="facebook" />
            <SocialAuthButton platform="twitter" />
          </div>

          {/* Footer Terms */}
          <div className="text-center text-[10px] text-gray-300 leading-relaxed">
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

export default Login2Screen;
