import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../api/apiURL";
import JogaLogoGreen from "../assets/images/JogaLogoGreen.png";

function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(`${API_URL}/auth/signup`, { email, password, username })
      .then(() => {
        navigate("/signup-successful"); 
      })
      .catch((error) => {
        console.error("Sign up failed:", error);
        alert("Sign up failed. Please try again.");
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

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="username"
              className="block text-gray-700 font-semibold mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen"
              required
            />
          </div>

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
            Sign Up
          </button>
        </form>

      </div>
    </div>
  );
}

export default SignUpPage;
