import { useContext, useState } from "react";
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
// import useToken from "@/hooks/useToken";
import { motion } from "framer-motion";
import { useFadeIn } from "@/hooks/useZoomIn";
import useScrollToTop from "@/hooks/useScrollToTop";

type TFormData = {
  email: string;
  password: string;
};

type TResetFormData = {
  email: string;
};

const Login = () => {
  useScrollToTop();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<TFormData>();

  const authContext = useContext(AuthContext);

  const { signIn, providerLogin, resetPassword }: TAuthContext =
    authContext ?? {
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
  const [loginError, setLoginError] = useState<string>("");

  // const [loginUserEmail, setLoginUserEmail] = useState<string>("");
  // const [token] = useToken(loginUserEmail);

  const [data, setData] = useState({
    email: "",
  });

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  // useEffect(() => {
  //   if (token) {
  //     navigate(from, { replace: true });
  //   }
  // }, [token, from, navigate]);

  // const saveUser = (name, email) => {
  //   const user = { name, email };
  //   fetch("http://localhost:5000/users", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(user),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("save user data", data);
  //       // Now you can save the token if needed
  //       // For example, if you receive a token in the response, you can save it here
  //       // saveToken(data.token);
  //     })
  //     .catch((error) => console.error("Error saving user:", error));
  // };

  // Email sign In
  const handleLogin = (data: TFormData) => {
    console.log(data);
    setLoginError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        // setLoginUserEmail(data.email);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err.message);
        setLoginError(err.message);
      });
  };

  // Google sign In
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        // saveUser(user.displayName, user.email); // Call saveUser with user's name and email
        navigate(from, { replace: true });
      })
      .catch((err) => console.error(err));
  };

  // Reset password
  const handleForgotPassword = (formData: TResetFormData) => {
    resetPassword(formData.email)
      .then(() => {
        toast.success("Password reset email sent! Check your inbox.");
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <motion.div variants={useFadeIn()} initial="hidden" animate="visible">
      <Container className="pt-12 md:pt-28 lg:pt-32">
        <div className="flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg w-96 p-7">
            <h2 className="text-xl pt-0 text-primary   text-center">Login</h2>
            <form
              onSubmit={handleSubmit(handleLogin)}
              className="flex flex-col gap-y-3">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-medium">Email</span>
                </label>
                <input
                  placeholder="Enter email"
                  type="email"
                  className="input input-bordered w-full max-w-xs border rounded-sm border-1 bg-gray-100 mt-1 border-opacity-65 p-1 focus:border-gray-200 focus:ring-gray-500"
                  autoComplete="username"
                  {...register("email", {
                    required: "Email Address is required",
                  })}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
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
                  autoComplete="current-password"
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
                    <small>{errors.password?.message}</small>{" "}
                  </p>
                )}
              </div>

              <Button className="mt-4 w-full text-[17px]" type="submit">
                Log In
              </Button>
              <div>
                {loginError && <p className="text-red-600"> {loginError} </p>}
              </div>
            </form>

            <form onSubmit={handleSubmit(handleForgotPassword)}>
              <button type="submit" className=" text-primary hover:underline">
                Forgot password?
              </button>
            </form>

            <p className="mt-3 font-semibold">
              New In Bezzelo? &nbsp;
              <Link className="text-secondary text-sm" to="/signup">
                Create New Account
              </Link>
            </p>
            <hr className=" border-black my-4" />
            <Button
              onClick={handleGoogleSignIn}
              className=" w-full text-white text-[17px] hover:shadow- bg-red-500 hover:bg-red-600">
              <FaGoogle className="size-6 mr-3 " /> Sign Up with Google
            </Button>
          </div>
        </div>
      </Container>
    </motion.div>
  );
};

export default Login;
