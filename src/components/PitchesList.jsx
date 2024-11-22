import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../api/apiURL";

function PitchesList() {

const [pitches, setPitches] = useState([]);

useEffect(() => {
  axios
  .get(`${API_URL}/pitches`)
  .then((response) => {
    console.log("API response", response.data);
    const allPitches = Object.keys(response.data).map((key) => ({
      ...response.data[key],
      id: key,
  }));

  setPitches(allPitches);
})
  .catch((error) => {
    console.log("Error fetching pitches", error)
  })
}, []);
if (!pitches.length) {
  return "Loading...";
}

  return (
    <div>PitchesList</div>
  )
}

export default PitchesList