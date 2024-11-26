import axios from "axios";
import { useState } from "react";
import { API_URL } from "../api/apiURL";
import JogaLogo from "../assets/images/LogoJoga.png";


function BookingForm({ pitchId }) {
  const [numberOfPlayers, setNumberOfPlayers] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [message, setMessage] = useState(null);

  const storedToken = localStorage.getItem("authToken");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBooking = {
      pitchId,
      numberOfPlayers,
      date,
      startTime,
      endTime,
    };

    axios
      .post(`${API_URL}/bookings`, newBooking, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        console.log("Booking successfully created!");
        alert("Booking successfully created!");
        setNumberOfPlayers("");
        setDate("");
        setStartTime("");
        setEndTime("");
      })
      .catch((error) => {
        console.error("Error creating booking", error);
        alert("Failed to create booking. Please try again.");
      });
  };

  return (
    <div className="bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-lg shadow-lg">
        <div className="flex items-center justify-center ">
            <img src={JogaLogo} alt="Joga Logo" className="w-32 h-32" />
        </div>
      <h2 className="text-xl font-bold text-white my-4">Book This Pitch</h2>
      {message && <p className="text-white mb-4">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Number of Players */}
        <div>
          <label className="block text-white font-semibold mb-2" htmlFor="numberOfPlayers">
            Number of Players
          </label>
          <input
            type="number"
            id="numberOfPlayers"
            value={numberOfPlayers}
            onChange={(e) => setNumberOfPlayers(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen"
            min="1"
            max="16"
            required
          />
        </div>

        {/* Date */}
        <div>
          <label className="block text-white font-semibold mb-2" htmlFor="date">
            Date
          </label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen"
            required
          />
        </div>

        {/* Start Time */}
        <div>
          <label className="block text-white font-semibold mb-2" htmlFor="startTime">
            Start Time
          </label>
          <input
            type="time"
            id="startTime"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen"
            required
          />
        </div>

        {/* End Time */}
        <div>
          <label className="block text-white font-semibold mb-2" htmlFor="endTime">
            End Time
          </label>
          <input
            type="time"
            id="endTime"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-customGreen text-white py-2 px-4 rounded-lg hover:bg-green-600 transition"
        >
          Book Now
        </button>
      </form>
    </div>
  );
}

export default BookingForm;
