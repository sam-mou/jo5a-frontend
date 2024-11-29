import axios from "axios";
import { API_URL } from "../api/apiURL";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function BookingForm() {
  const { id } = useParams();
  const [isBooked, setIsBooked] = useState(false);
  const [loading, setLoading] = useState(true);
  const storedToken = localStorage.getItem("authToken");

  useEffect(() => {
    axios
      .get(`${API_URL}/bookings/user`, {headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        const bookings = response.data;
        const alreadyBooked = bookings.some((booking) => booking.pitchId === id);
        setIsBooked(alreadyBooked);
        setLoading(false); 
      })
      .catch((error) => {
        console.error("Error fetching user bookings:", error);
        setLoading(false); 
      });
  }, [id, storedToken]);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        `${API_URL}/bookings`,
        { pitchId: id },
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      )
      .then((response) => {
        console.log("Booking successfully created!", response.data);
        alert("Booking successfully created!");
        setIsBooked(true); 
      })
      .catch((error) => {
        console.error("Error creating booking", error);
        alert("Failed to create booking. Please try again.");
      });
  };

  if (loading) {
    return <button className="mt-4 bg-gray-400 text-white py-2 px-8 rounded-lg">Loading...</button>;
  }

  return (
    <button
      onClick={isBooked ? null : handleSubmit}
      className={`mt-4 py-2 px-8 rounded-lg transition ${
        isBooked
          ? "bg-gray-400 text-white cursor-not-allowed" 
          : "bg-customGreen text-white hover:bg-green-600" 
      }`}
      disabled={isBooked}
    >
      {isBooked ? "Already Booked" : "Book This Game"}
    </button>
  );
}

export default BookingForm;
