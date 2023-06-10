import { useState } from "react";
import { Link } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useContext } from "react";

import SocialLogin from "../SocialLogin/SocialLogin";
import { AuthContext } from "../../Providers/AuthProvider";


const SignUp = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must contain at least 6 characters, one uppercase letter, one lowercase letter, and one number."
      );
      setIsRegistered(false);
      return;
    }

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        createdUser.photoURL = photo;
        createdUser.displayName = name;
        updateUser(name, photo)
          .then(() => {
            console.log("User updated Successfully");
          })
          .catch(() => {
            console.log("User failed to update");
          });
        setIsRegistered(true);
        setPasswordError("");
      })
      .catch((error) => {
        console.error(error);
        setIsRegistered(false);
        setPasswordError(error.message);
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center min-h-screen justify-evenly   ">
    <div>
        <img className="h-auto w-96" src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7883.jpg?w=2000" alt="" />
    </div>
     <div className="min-h-screen md:py-6 flex justify-center items-center">
      <div className="max-w-md w-full bg-white rounded-lg overflow-hidden ">
        <div className="py-6 px-8">
          <h2 className="text-4xl font-bold text-center mb-4">Register</h2>

          {passwordError && (
            <div className="bg-red-100 border border-red-400 text-red-700 py-2 px-4 rounded mb-4">
              <p>{passwordError}</p>
            </div>
          )}
          {isRegistered && (
            <div className="bg-green-100 border border-green-400 text-green-700 py-2 px-4 rounded mb-4">
              <p>Registration successful!</p>
            </div>
          )}
          <form onSubmit={handleRegister}>
            <div className="mb-4">
              <label className="block text-lg text-gray-800 font-semibold mb-2">
                Name
              </label>
              <input
                className="w-full py-2 px-4 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-lg text-gray-800 font-semibold mb-2">
                Photo URL
              </label>
              <input
                className="w-full py-2 px-4 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                name="photo"
                placeholder="Photo URL"
                required
              />
            </div>
            {/* Other form fields */}
            <div className="mb-4">
              <label className="block text-lg text-gray-800 font-semibold mb-2">
                Email address
              </label>
              <input
                className="w-full py-2 px-4 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                name="email"
                placeholder="Enter email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg text-gray-800 font-semibold mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  className="w-full py-2 px-4 pr-10 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  required
                />
                <span
                  className="absolute top-2 right-2 cursor-pointer"
                  onClick={togglePasswordVisibility}>
                  {showPassword ? (
                    <FiEyeOff className="text-gray-600" />
                  ) : (
                    <FiEye className="text-gray-600" />
                  )}
                </span>
              </div>
            </div>
            <button
              type="submit"
              className="w-full text-xl bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-purple-600 hover:to-yellow-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-pink-500">
              Register
            </button>
            <p className="mt-4 text-center text-lg text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-yellow-600 text-2xl font-bold underline">
                Login
              </Link>
            </p>
          </form> 
          <div className="my-8 flex justify-center">
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default SignUp;