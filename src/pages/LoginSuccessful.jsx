import { Link } from "react-router-dom";
import JogaLogoGreen from "../assets/images/JogaLogoGreen.png";

function LoginSuccessful() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-customBlue">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <div className="flex justify-center mb-6">
          <img
            src={JogaLogoGreen}
            alt="Joga Logo Green"
            className="w-auto h-24"
          />
        </div>

        <h2 className="text-2xl font-bold text-customGreen text-center mb-4">
        🎉 Login Successful! 🎉
        </h2>
        <p className="text-gray-700 text-center mb-6">
          Welcome back! You are now logged in.
        </p>

        <div className="flex justify-center">
          <Link to="/">
            <button className="bg-customGreen text-white px-6 py-2 rounded-lg hover:bg-green-600 transition">
              Go to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginSuccessful;
