import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../api/apiURL";
import JogaLogoGreen from "../assets/images/JogaLogoGreen.png";

function SignupSuccessful() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
  
    const handleSubmit = (event) => {
      event.preventDefault();
      axios
        .post(`${API_URL}/auth/login`, { email, password })
        .then((response) => {
          const { authToken } = response.data;
          localStorage.setItem("authToken", authToken);
          navigate("/login-successful");
        })
        .catch((error) => {
          console.log("Login failed", error);
          alert("Login failed. Please check your credentials and try again.", error);
        });
    };

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
          🎉 Your account is created 🎉
        </h2>
        <p className="text-gray-700 text-center mb-6">
          Now login to book a game!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 font-semibold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-customGreen text-white py-2 px-4 rounded-lg hover:bg-green-600 transition"
          >
            Login
          </button>
        </form>

      </div>
    </div>
  );
}

export default SignupSuccessful;
