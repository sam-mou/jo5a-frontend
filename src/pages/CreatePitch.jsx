import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../api/apiURL";
import LogoJoga from "../assets/images/LogoJoga.png";
import HeroBannerSamy from "../assets/images/HeroBannerSamy.png";

function CreatePitch() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [startTime, setStartTime] = useState("");
  const [date, setDate] = useState(""); // Added date
  const [description, setDescription] = useState("");
  const [capacity, setCapacity] = useState("");
  const [type, setType] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedToken = localStorage.getItem("authToken");

    const newPitch = {
      name,
      location,
      startTime,
      date, 
      description,
      capacity,
      type,
      imageUrl,
    };

    axios
      .post(`${API_URL}/pitches`, newPitch, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        console.log("New pitch successfully created!", response.data);

        setName("");
        setLocation("");
        setStartTime("");
        setDate(""); 
        setDescription("");
        setCapacity("");
        setType("");
        setImageUrl("");
        navigate("/pitches");
      })
      .catch((error) => {
        console.error("Error creating new pitch", error);
        alert("Error creating new pitch. Please try again.");
      });
  };

  return (
    <div className="bg-customBlue min-h-screen">
      <div
        className="relative h-[450px] bg-cover bg-end"
        style={{ backgroundImage: `url(${HeroBannerSamy})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <h1 className="text-5xl font-climate font-bold text-white text-center">
            ORGANIZE A GAME
          </h1>
        </div>
      </div>

      <div className="flex justify-center items-center py-8 bg-customBlue">
        <div className="w-full max-w-lg bg-[#65617B] backdrop-blur-md p-6 rounded-lg shadow-lg">
          <div className="flex justify-center mb-6">
            <img src={LogoJoga} alt="Joga Logo" className="w-auto h-32" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-white font-semibold mb-2">
                Pitch Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen"
                required
              />
            </div>

            <div>
              <label htmlFor="location" className="block text-white font-semibold mb-2">
                Location
              </label>
              <input
                type="text"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen"
                required
              />
            </div>

            <div>
              <label htmlFor="startTime" className="block text-white font-semibold mb-2">
                Start Time (1 hour booking)
              </label>
              <input
                type="time"
                id="startTime"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen"
                required
              />
            </div>


            <div>
              <label htmlFor="date" className="block text-white font-semibold mb-2">
                Date
              </label>
              <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen"
                required
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-white font-semibold mb-2">
                Description
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen"
                rows="3"
                required
              />
            </div>

            <div>
              <label htmlFor="capacity" className="block text-white font-semibold mb-2">
                Number of Players 
              </label>
              <input
                type="number"
                min="1"
                max="16"
                id="capacity"
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen"
                required
              />
            </div>

            <div>
              <label htmlFor="type" className="block text-white font-semibold mb-2">
                Type (Indoor/Outdoor)
              </label>
              <select
                id="type"
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen"
                required
              >
                <option value="">Select Type</option>
                <option value="Indoor">Indoor</option>
                <option value="Outdoor">Outdoor</option>
              </select>
            </div>

            <div>
              <label htmlFor="imageUrl" className="block text-white font-semibold mb-2">
                Image URL
              </label>
              <input
                type="text"
                id="imageUrl"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-customGreen text-white py-2 px-4 rounded-lg hover:bg-green-600 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreatePitch;
