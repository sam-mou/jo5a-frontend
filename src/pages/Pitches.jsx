import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../api/apiURL";
import { Link } from "react-router-dom";
import HeroBannerFootballPitch from "../assets/images/HeroBanner-FootballPitch.png";
import CapacityIcon from "../assets/images/CapacityIcon.png";
import LocationIcon from "../assets/images/LocationIcon.png";
import TypeIcon from "../assets/images/TypeIcon.png";

function Pitches() {
  const [pitches, setPitches] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/pitches`)
      .then((response) => {
        console.log("API response", response.data);
        setPitches(response.data);
      })
      .catch((error) => {
        console.error("API error", error);
      });
  }, []);

  if (pitches === undefined || setPitches === undefined) { 
    return "Loading...";
  }

  return (
    <div className="bg-customBlue">
      <div
        className="relative h-[450px] bg-cover bg-center"
        style={{ backgroundImage: `url(${HeroBannerFootballPitch})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <h1 className="text-5xl font-climate font-bold text-white text-center">
            BOOK A PITCH 
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pitches.map((pitch) => (
            <div
              key={pitch._id}
              className="bg-white bg-opacity-15 backdrop-blur-md rounded-lg shadow-md p-6 flex flex-col space-y-4"
            >
              <img
                src={pitch.imageUrl}
                alt={pitch.name}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />

              <h2 className="text-xl font-bold text-white">{pitch.name}</h2>

              <div className="flex items-center text-white">
                <img
                  src={LocationIcon}
                  alt="Location Icon"
                  className="h-6 w-6 mr-2"
                />
                <span>{pitch.location}</span>
              </div>

              <div className="flex items-center text-white">
                <img
                  src={CapacityIcon}
                  alt="Capacity Icon"
                  className="h-6 w-6 mr-2"
                />
                <span>{pitch.capacity} players</span>
              </div>

              <div className="flex items-center text-white">
                <img
                  src={TypeIcon}
                  alt="Type Icon"
                  className="h-6 w-6 mr-2"
                />
                <span>{pitch.type}</span>
              </div>

              <div>
                <Link
                  to={`/pitches/${pitch._id}`}
                  className="block w-full bg-customGreen text-white py-2 px-4 rounded-lg text-center hover:bg-green-600 transition"
                >
                  More Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pitches;
