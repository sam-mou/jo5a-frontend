import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../api/apiURL";
import PageContainer from "../components/PageContainer";
import BackArrow from "../assets/images/BackArrow.png";
import LocationIcon from "../assets/images/LocationIcon.png";
import CapacityIcon from "../assets/images/CapacityIcon.png";
import TypeIcon from "../assets/images/TypeIcon.png";
import BookingForm from "../components/BookingForm";
import DeletePitch from "../components/DeletePitch";
import Edit from "../assets/images/edit.png";

function PitchDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pitch, setPitch] = useState(null);
  const storedToken = localStorage.getItem("authToken");

  useEffect(() => {
    axios
      .get(`${API_URL}/pitches/${id}`, {headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setPitch(response.data);
      })
      .catch((error) => {
        console.error("Error fetching pitch details:", error);
        navigate("/login");
      });
  }, [id, navigate, storedToken]);

  const handleDeleteSuccess = () => {
    navigate("/pitches");
  };

  if (!pitch) return <p className="text-white text-center">Loading...</p>;

  return (
    <div className="bg-customBlue min-h-screen py-8 px-4">
      <PageContainer>
        <div className="mt-20">
          <button
            className="flex items-center text-customGreen hover:text-green-600"
            onClick={() => navigate("/pitches")}
          >
            <img src={BackArrow} alt="Back Arrow" className="h-4 w-4 mr-2" />
            <span className="text-xs">View Pitches List</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-2">
          <div>
            <img
              src={pitch.imageUrl}
              alt={pitch.name}
              className="w-full h-[400px] object-cover rounded-lg my-4"
            />

            <div className="rounded-lg shadow-lg space-y-4 p-6 bg-white bg-opacity-20 backdrop-blur-md">
              <h1 className="text-4xl font-bold text-white">{pitch.name}</h1>

              <div className="flex items-center text-white">
                <img src={LocationIcon} alt="Location Icon" className="h-6 w-6 mr-2" />
                <span>{pitch.location}</span>
              </div>

              <div className="flex items-center text-white">
                <img src={CapacityIcon} alt="Capacity Icon" className="h-6 w-6 mr-2" />
                <span>{pitch.capacity} players</span>
              </div>

              <div className="flex items-center text-white">
                <img src={TypeIcon} alt="Type Icon" className="h-6 w-6 mr-2" />
                <span>{pitch.type}</span>
              </div>

              <p className="text-white text-lg">{pitch.description}</p>

              <div className="flex justify-end space-x-4 mt-4">
                <button
                  className="flex items-center text-customGreen hover:text-green-600"
                  onClick={() => navigate(`/edit-pitch/${id}`)}
                >
                  <img 
                  src={Edit} 
                  alt="Edit Icon" 
                  className="h-4 w-4 mr-2" />
                </button>
                <DeletePitch pitchId={id} onDeleteSuccess={handleDeleteSuccess} />
              </div>
            </div>
          </div>

          <div className="bg-white bg-opacity-20 backdrop-blur-md px-8 pt-8 mt-4 rounded-lg shadow-lg">
            <BookingForm pitchId={id} />
          </div>
        </div>
      </PageContainer>
    </div>
  );
}

export default PitchDetails;
