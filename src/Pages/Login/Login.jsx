import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import SocialLogin from "../SocialLogin/SocialLogin";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        navigate(from, { replace: true });
        console.log(loggedUser);
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage("Incorrect Your email or password.");
      });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    
   <div className="flex items-center min-h-screen justify-evenly   ">
    <div >
        <img className="h-96 w-96" src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7883.jpg?w=2000" alt="" />
    </div>
     <div className="flex items-center justify-center min-h-screen ">
      <div  className="w-full max-w-md bg-white  rounded p-8">
        <h2  className="text-3xl font-bold text-center mb-4">Login Form</h2>
        {errorMessage && (
          <div
            className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4"
            role="alert">
            <p>{errorMessage}</p>
          </div>
        )}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6 relative">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={passwordVisible ? "text" : "password"}
                name="password"
                placeholder="Your Password"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <span
                onClick={togglePasswordVisibility}
                className="absolute top-1/2 right-4 -mt-1/2 text-gray-500 cursor-pointer">
                {passwordVisible ? <FiEyeOff /> : <FiEye />}
              </span>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="w-full text-xl bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-purple-600 hover:to-yellow-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-pink-500">
              Sign In
            </button>
          </div>
        </form>
        <p className="text-gray-600 mt-4 text-center">
          Do not have an account?{" "}
          <Link
            to="/register"
            className="text-yellow-600 text-2xl font-bold underline">
            Register
          </Link>
        </p>
        <div className="my-8 flex justify-center">
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Login;