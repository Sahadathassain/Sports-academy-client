import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import jwtDecode from "jwt-decode";

const SocialLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      const idToken = await signInWithGoogle(); // Obtain the Google sign-in token
      const decodedToken = jwtDecode(idToken); // Decode the token to access its payload
      // You can perform any additional logic here with the decoded token, such as storing it in localStorage, etc.
      console.log("Decoded token:", decodedToken);

      navigate(from, { replace: true });
      console.log("Signed in with Google successfully!");
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
    }
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
