import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../api/apiURL";
import PageContainer from "../components/PageContainer";
import BackArrow from "../assets/images/BackArrow.png";
import LocationIcon from "../assets/images/LocationIcon.png";
import CapacityIcon from "../assets/images/CapacityIcon.png";
import TypeIcon from "../assets/images/TypeIcon.png";
import TimeIcon from "../assets/images/TimeIcon.png";
import DeletePitch from "../components/DeletePitch";
import Edit from "../assets/images/edit.png";
import BookingForm from "../components/BookingForm";

function PitchDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pitch, setPitch] = useState(null);
  const storedToken = localStorage.getItem("authToken");



  useEffect(() => {
    axios
      .get(`${API_URL}/pitches/${id}`, {headers: { Authorization: `Bearer ${storedToken}` },})
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


  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB"); 
  };

  return (
    <div className="bg-customBlue pb-16">
      <div
        className="relative h-[450px] bg-cover bg-center"
        style={{ backgroundImage: `url(${pitch.imageUrl})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-5xl font-climate font-bold text-white">{pitch.name}</h1>
          <p className="text-white text-lg mt-4">{pitch.description}</p>
<BookingForm/>
        </div>
      </div>

      
    <PageContainer>
        <div className="mt-4 flex justify-between items-center">
          <button
            className="flex items-center text-customGreen hover:text-green-600"
            onClick={() => navigate("/pitches")}
          >
            <img src={BackArrow} alt="Back Arrow" className="h-4 w-4 mr-2" />
            <span className="text-xs">View Pitches List</span>
          </button>
          <div className="flex space-x-4">
            <button
              className="flex items-center text-customGreen hover:text-green-600"
              onClick={() => navigate(`/edit-pitch/${id}`)}
            >
              <img src={Edit} alt="Edit Icon" className="h-4 w-4" />
            </button>
            <DeletePitch pitchId={id} onDeleteSuccess={handleDeleteSuccess} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-16 mt-16">
          <div className="bg-gray-800 bg-opacity-50 rounded-lg flex flex-col items-center p-4">
            <img src={TimeIcon} alt="Time Icon" className="h-32 w-32 mb-4" />
            <span className="text-white text-center">
              {formatDate(pitch.date)} - {pitch.startTime}
            </span>
          </div>
          <div className="bg-gray-800 bg-opacity-50 rounded-lg flex flex-col items-center p-4">
            <img src={LocationIcon} alt="Location Icon" className="h-32 w-32 mb-4" />
            <span className="text-white text-center">{pitch.location}</span>
          </div>
          <div className="bg-gray-800 bg-opacity-50 rounded-lg flex flex-col items-center p-4">
            <img src={CapacityIcon} alt="Capacity Icon" className="h-32 w-32 mb-4" />
            <span className="text-white text-center">{pitch.capacity}/16 Players</span>
          </div>
          <div className="bg-gray-800 bg-opacity-50 rounded-lg flex flex-col items-center p-4">
            <img src={TypeIcon} alt="Type Icon" className="h-32 w-32 mb-4" />
            <span className="text-white text-center">{pitch.type}</span>
          </div>
        </div>
</PageContainer>
    </div>
  );
}

export default PitchDetails;
