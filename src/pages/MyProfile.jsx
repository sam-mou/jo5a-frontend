import MyProfileBanner from "../assets/images/MyProfile.png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../api/apiURL";
import LocationIcon from "../assets/images/LocationIcon.png";

function MyProfile() {
  const [bookings, setBookings] = useState(null);
  const storedToken = localStorage.getItem("authToken");
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`${API_URL}/bookings/user`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setBookings(response.data);
      })
      .catch((error) => {
        console.error("Error fetching bookings:", error);
      });
  }, [storedToken]);

  const handleDeleteBooking = (bookingId) => {
    axios
      .delete(`${API_URL}/bookings/${bookingId}`, { 
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then(() => {
        alert("Booking deleted successfully!");
        setBookings((prevBookings) =>
          prevBookings.filter((booking) => booking._id !== bookingId)
        );
      })
      .catch((error) => {
        console.error("Error deleting booking:", error);
        alert("Failed to delete booking. Please try again.");
      });
  };
  


  if (bookings === null) {
    return "Loading...";
  }

  return (
    <div className="bg-customBlue min-h-screen">
      <div
        className="relative h-[450px] bg-cover bg-center"
        style={{ backgroundImage: `url(${MyProfileBanner})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <h1 className="text-5xl font-climate font-bold text-white text-center">
            Manage Your Bookings
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {bookings.length === 0 ? (
          <p className="text-white text-center">No bookings yet.</p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {bookings.map((booking) => (
              <div
                key={booking._id}
                className="bg-white bg-opacity-15 backdrop-blur-md rounded-lg shadow-md p-6 flex flex-col space-y-4"
              >
                <h2 className="text-xl font-bold text-white">
                  {booking.pitchId.name}
                </h2>

                <div className="flex items-center text-white">
                  <img
                    src={LocationIcon}
                    alt="Location Icon"
                    className="h-6 w-6 mr-2"
                  />
                  <span>{booking.pitchId.location}</span>
                </div>

                <div className="flex justify-start">
                  <button
                    onClick={() => handleDeleteBooking(booking._id)}
                    className="bg-red-600 text-white py-2 px-4 rounded-lg flex items-center hover:bg-red-500 transition"
                  >
                
                    Delete Booking
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="p-8 flex justify-center">
        <button
          onClick={() => {
            localStorage.removeItem("authToken");
            navigate("/login", { replace: true });
          }}
          className="bg-red-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-red-500"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}

export default MyProfile;
