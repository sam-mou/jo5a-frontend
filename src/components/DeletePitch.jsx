import axios from "axios";
import { API_URL } from "../api/apiURL";
import Delete from "../assets/images/delete.png";


function DeletePitch({ pitchId, onDeleteSuccess }) {
  const storedToken = localStorage.getItem("authToken");

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this pitch?")) {
      axios
        .delete(`${API_URL}/pitches/${pitchId}`, {
          headers: { Authorization: `Bearer ${storedToken}` },
        })
        .then(() => {
          console.log("Pitch deleted successfully");
          onDeleteSuccess(); // Notify parent of successful deletion
        })
        .catch((error) => {
          console.error("Error deleting pitch:", error);
          alert("Failed to delete pitch. Please try again.");
        });
    }
  };

  return (
    <button
      className="flex items-center text-customGreen hover:text-red-600"
      onClick={handleDelete}
    >
      <img src= { Delete } alt="Delete Icon" className="h-4 w-auto mr-2" />
    </button>
  );
}

export default DeletePitch;
