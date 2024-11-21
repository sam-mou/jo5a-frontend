import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import PitchDetails from "./pages/PitchDetails";
import MyBookings from "./pages/MyBookings";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import NotFoundPage from "./pages/NotFoundPage";
import Pitches from "./pages/Pitches";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/pitches/" element={<Pitches />} />
        <Route path="/pitches/:id" element={<PitchDetails />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
