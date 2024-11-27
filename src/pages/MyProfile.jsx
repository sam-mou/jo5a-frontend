import MyProfileBanner from "../assets/images/MyProfile.png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../api/apiURL";

function MyProfile() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    accountCreated: "",
  });
  const [bookings, setBookings] = useState([]);
  const storedToken = localStorage.getItem("authToken");

  useEffect(() => {
    axios
      .get(`${API_URL}/profile`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setUser(response.data.user);
        setBookings(response.data.bookings || []);
      })
      .catch((error) => {
        console.error("Error fetching profile data:", error);
      });
  }, [navigate, storedToken]);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
    window.location.reload();
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB"); 
  };

  return (
    <div className="bg-customBlue min-h-screen">
      <div
        className="relative h-[450px] bg-cover bg-center"
        style={{ backgroundImage: `url(${MyProfileBanner})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white text-center">
            Welcome, {user.username}
          </h1>
        </div>
      </div>

      <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Image and Username */}
        <div className="bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-lg shadow-lg text-center">
          <div className="w-24 h-24 mx-auto bg-gray-300 rounded-full"></div>
          <h2 className="text-xl font-bold text-white mt-4">{user.username}</h2>
        </div>

        <div className="bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-lg font-bold text-white">Email</h3>
          <p className="text-white">{user.email}</p>
        </div>

        <div className="bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-lg font-bold text-white">Account Created</h3>
          <p className="text-white">{formatDate(user.accountCreated)}</p>
        </div>
      </div>

      <div className="p-8">
        <h2 className="text-2xl font-bold text-white text-center mb-4">
          Your Bookings
        </h2>
        {bookings.length === 0 ? (
          <p className="text-white text-center">No bookings yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookings.map((booking) => (
              <div
                key={booking._id}
                className="bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-lg font-bold text-white">
                  {booking.pitchName}
                </h3>
                <p className="text-white">
                  Date: {formatDate(booking.date)}
                </p>
                <p className="text-white">
                  Time: {booking.startTime}
                </p>
                <p className="text-white">
                  Players: {booking.numberOfPlayers}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="p-8 flex justify-center">
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-red-500"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}

export default MyProfile;
