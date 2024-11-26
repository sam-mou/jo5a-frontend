import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import PitchDetails from "./pages/PitchDetails";
import MyProfile from "./pages/MyProfile";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import NotFoundPage from "./pages/NotFoundPage";
import Pitches from "./pages/Pitches";
import CreatePitch from "./pages/CreatePitch";
import LoginSuccessful from "./pages/LoginSuccessful";
import SignupSuccessful from "./pages/SignupSuccessful";
import EditPitchPage from "./pages/EditPitchPage";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/organize-game/" element={<CreatePitch />} />
        <Route path="/pitches/" element={<Pitches />} />
        <Route path="/pitches/:id" element={<PitchDetails />} />
        <Route path="/edit-pitch/:id" element={<EditPitchPage />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="*" element={<NotFoundPage />}></Route>
        <Route path="/login-successful" element={<LoginSuccessful />}></Route>
        <Route path="/signup-successful" element={<SignupSuccessful />}></Route>

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
