import { useEffect, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  AuthContext,
  TAuthContext,
} from "../../Contexts/AuthProviderComponent";
import { GoogleAuthProvider } from "firebase/auth";
import toast from "react-hot-toast";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { FaGoogle } from "react-icons/fa";
import bezzelo from "../../assets/icons/orange/Logo Transparent-01.png";
import { motion } from "framer-motion";
import { useFadeIn } from "@/hooks/useZoomIn";
import useScrollToTop from "@/hooks/useScrollToTop";
import axios from "axios";
import useToken from "@/hooks/useToken";

type TFormData = {
  name: string;
  phoneNumber: string;
  email: string;
  password: string;
};

const SignUp = () => {
  useScrollToTop();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<TFormData>();

  const [signUpError, setSignUpError] = useState("");
  const [createdUserEmail, setCreatedUserEmail] = useState({ email: "" });
  const [token] = useToken(createdUserEmail);

  const authContext = useContext(AuthContext);

  const { createUser, providerLogin }: TAuthContext = authContext ?? {
    signIn: () => Promise.reject(new Error("signIn is not implemented")),
    providerLogin: () =>
      Promise.reject(new Error("providerLogin is not implemented")),
    resetPassword: () =>
      Promise.reject(new Error("resetPassword is not implemented")),
    createUser: () =>
      Promise.reject(new Error("createUser is not implemented")),
    updateUser: () =>
      Promise.reject(new Error("updateUser is not implemented")),
    user: null,
    logOut: () => Promise.reject(new Error("logOut is not implemented")),
    loading: false,
  };
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleSignUp = (data: TFormData) => {
    setSignUpError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;

        toast.success("User Created Successfully");
        saveUserToDbEmailSignUp(data.name, data.email, data.phoneNumber);
      })
      .catch((err) => {
        setSignUpError(err.message);
      });
  };

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, navigate, from]);

  // google sign up
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        const { displayName, email } = user;
        saveGoogleUserToDb(displayName, email).then(() => {
          navigate(from, { replace: true });
        });
      })
      .catch((err) => console.error(err));
  };

  const saveGoogleUserToDb = async (displayName: string, email: string) => {
    try {
      const response = await axios.post(
        "https://bezello-server.vercel.app/users",
        {
          displayName,
          email,
        }
      );
      setCreatedUserEmail({ email });

      // Fetch the JWT token after saving the Google user
      const tokenResponse = await axios.get(
        `https://bezello-server.vercel.app/jwt?email=${email}`
      );
      const tokenData = tokenResponse.data;
      if (tokenData.accessToken) {
        localStorage.setItem("accessToken", tokenData.accessToken);
      }

      return response.data;
    } catch (error) {
      console.error("Error saving Google user to database:", error);
      throw error;
    }
  };

  const saveUserToDbEmailSignUp = async (
    name: string,
    email: string,
    phoneNumber: string
  ) => {
    try {
      const response = await axios.post(
        "https://bezello-server.vercel.app/users",
        {
          name: name,
          email: email,
          phoneNumber: phoneNumber,
        }
      );
      setCreatedUserEmail({ email });
    } catch (error) {
      console.error("Error saving user to database:", error);
    }
  };

  return (
    <motion.div variants={useFadeIn()} initial="hidden" animate="visible">
      <Container className="pt-12 md:pt-28 lg:pt-32">
        <div className="flex items-center justify-center flex-col">
          <img className="w-40 mb-4 hidden " src={bezzelo} alt="" />
          <div className=" flex justify-center items-center">
            <div className="bg-white rounded-lg mt-0 shadow-lg w-96 p-7">
              <h2 className="text-xl pt-0 text-primary font-semibold  text-center ">
                Sign Up
              </h2>

              <form
                onSubmit={handleSubmit(handleSignUp)}
                className="flex flex-col gap-y-4">
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text font-medium ">Name</span>
                  </label>
                  <input
                    placeholder="Enter name"
                    type="text"
                    className="input input-bordered w-full max-w-xs border rounded-sm border-1 bg-gray-100 mt-1 border-opacity-65 p-1 focus:border-gray-200 focus:ring-gray-500"
                    autoComplete="name"
                    {...register("name", {
                      required: "Name is required",
                    })}
                  />
                  {errors.name && (
                    <p className="text-red-600">
                      <small>{errors.name?.message}</small>
                    </p>
                  )}
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text font-medium">Phone Number</span>
                  </label>
                  <input
                    placeholder="Enter phone number"
                    type="tel"
                    className="input input-bordered w-full max-w-xs border rounded-sm border-1 bg-gray-100 mt-1 border-opacity-65 p-1 focus:border-gray-200 focus:ring-gray-500"
                    autoComplete="tel"
                    {...register("phoneNumber", {
                      required: "Phone Number is required",
                    })}
                  />
                  {errors.phoneNumber && (
                    <p className="text-red-600">
                      <small>{errors.phoneNumber?.message}</small>
                    </p>
                  )}
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text font-medium">Email</span>
                  </label>
                  <input
                    placeholder="Enter email"
                    type="email"
                    className="input input-bordered w-full max-w-xs border rounded-sm border-1 bg-gray-100 mt-1 border-opacity-65 p-1 focus:border-gray-200 focus:ring-gray-500"
                    autoComplete="email"
                    {...register("email", { required: "Email is required" })}
                  />
                  {errors.email && (
                    <p className="text-red-600">
                      <small>{errors.email?.message}</small>
                    </p>
                  )}
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text font-medium">Password</span>
                  </label>
                  <input
                    placeholder="Enter password"
                    type="password"
                    autoComplete="new-password"
                    className="input input-bordered w-full max-w-xs border rounded-sm border-1 bg-gray-100 mt-1 border-opacity-65 p-1 focus:border-gray-200 focus:ring-gray-500"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be 6 characters or longer",
                      },
                    })}
                  />
                  {errors.password && (
                    <p className="text-red-600">
                      <small>{errors.password?.message}</small>
                    </p>
                  )}
                </div>

                <Button className="mt-4 w-full text-[17px]" type="submit">
                  Sign Up
                </Button>
                <div>
                  {signUpError && (
                    <p className="text-red-600"> {signUpError} </p>
                  )}
                </div>
              </form>

              <p className="my-3 font-medium">
                Already have an account? &nbsp;
                <Link
                  className="text-secondary underline font-semibold underline-offset-2"
                  to="/login">
                  Log In
                </Link>
              </p>
              <hr className="my-4" />
              <Button
                onClick={handleGoogleSignIn}
                className=" w-full text-white text-[17px] bg-red-500 hover:bg-red-600">
                <FaGoogle className="size-6 mr-2 " /> Sign Up with Google
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </motion.div>
  );
};

export default SignUp;
