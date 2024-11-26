import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../api/apiURL";
import Edit from "../assets/images/edit.png";


function EditPitchPage() {
  const { id } = useParams(); // Extract the pitch ID from the URL
  const navigate = useNavigate(); // Use for navigation
  const [editForm, setEditForm] = useState(null);
  const storedToken = localStorage.getItem("authToken");

  useEffect(() => {
    // Fetch the pitch details when the component loads
    axios
      .get(`${API_URL}/pitches/${id}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => setEditForm(response.data))
      .catch((error) => {
        console.error("Error fetching pitch data:", error);
        alert("Error loading pitch details. Please try again.");
        navigate("/pitches"); // Redirect if the pitch is not found
      });
  }, [id, navigate, storedToken]);

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`${API_URL}/pitches/${id}`, editForm, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then(() => {
        alert("Pitch updated successfully!");
        navigate(`/pitches/${id}`); // Redirect to the pitch details page
      })
      .catch((error) => {
        console.error("Error updating pitch:", error);
        alert("Failed to update pitch. Please try again.");
      });
  };

  if (!editForm) return <div>Loading...</div>;

  return (
    <div className="bg-customBlue min-h-screen flex justify-center items-center py-8">
      <div className="w-full max-w-lg bg-[#65617B] p-6 rounded-lg shadow-lg">
        <form onSubmit={handleEditSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-white">
              Pitch Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={editForm.name}
              onChange={handleEditChange}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <div>
            <label htmlFor="location" className="block text-white">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={editForm.location}
              onChange={handleEditChange}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-white">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={editForm.description}
              onChange={handleEditChange}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <div>
            <label htmlFor="capacity" className="block text-white">
              Capacity
            </label>
            <input
              type="number"
              id="capacity"
              name="capacity"
              value={editForm.capacity}
              onChange={handleEditChange}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <div>
            <label htmlFor="type" className="block text-white">
              Type
            </label>
            <select
              id="type"
              name="type"
              value={editForm.type}
              onChange={handleEditChange}
              className="w-full px-4 py-2 border rounded-lg"
            >
              <option value="Indoor">Indoor</option>
              <option value="Outdoor">Outdoor</option>
            </select>
          </div>
          <div>
            <label htmlFor="imageUrl" className="block text-white">
              Image URL
            </label>
            <input
              type="text"
              id="imageUrl"
              name="imageUrl"
              value={editForm.imageUrl}
              onChange={handleEditChange}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => navigate(`/pitches/${id}`)}
              className="px-4 py-2 bg-gray-300 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-customGreen text-white rounded-lg"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditPitchPage;
