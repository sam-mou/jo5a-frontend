import axios from "axios";
import { API_URL } from "../api/apiURL";
import { useParams } from "react-router-dom";


function BookingForm() {
  const storedToken = localStorage.getItem("authToken");
  const { id } = useParams()
  const handleSubmit = (e) => {
    e.preventDefault();



    axios
      .post(`${API_URL}/bookings`, { pitchId: id }, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        console.log("Booking successfully created!", response.data);
        alert("Booking successfully created!");


      })
      .catch((error) => {
        console.error("Error creating booking", error);
        alert("Failed to create booking. Please try again.");
      });
  };

  return (
    <button
      onClick={handleSubmit}
      className="mt-4 bg-customGreen text-white py-2 px-8 rounded-lg hover:bg-green-600 transition"
    >
      Book This Game
    </button>
  );
}

export default BookingForm;
