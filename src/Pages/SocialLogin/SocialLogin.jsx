import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";

const SocialLogin = () => {
  const {  signInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleGoogleSignIn = () => {
    signInWithGoogle().then((res) => {
      console.log(res.user);
      const users = {
        name: res.user.displayName,
        email: res.user.email,
        photoURl: res.user.photoURL,
        role: "student",
      };
      console.log(users);
      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(users),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              position: "top-start",
              icon: "success",
              title: "User created successfully.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      navigate(from, { replace: true });
    });
  };


  return (
    <div className="flex items-center justify-center">
      <button
        onClick={handleGoogleSignIn}
        className="flex items-center bg-yellow-500 text-white rounded-lg px-4 py-2 gap-2 shadow-xl transition duration-300 hover:bg-stone-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <FaGoogle className="text-xl" />
        <span className="text-lg font-semibold">Sign In with Google</span>
      </button>
    </div>
  );
};

export default SocialLogin;