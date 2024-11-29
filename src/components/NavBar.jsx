import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import LogoJoga from "../assets/images/LogoJoga.png";
import CapacityIcon from "../assets/images/CapacityIcon.png";

function NavBar() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <nav className="grid grid-cols-2 items-center p-4 backdrop-blur-sm fixed top-0 w-full z-50 shadow-md text-gray-300">
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <img src={LogoJoga} alt="Logo" className="h-16 w-auto" />
        </Link>
      </div>

      <div className="flex items-center justify-end space-x-4">
        <Link to="/pitches" className="font-medium hover:text-gray-300 hover:underline">
          Book a Game
        </Link>
        <Link to="/organize-game" className="font-medium hover:text-gray-300 hover:underline">
          Organize a Game
        </Link>
        <Link to="/my-profile" className="hover:text-gray-300 hover:underline">
              <button className="flex items-center space-x-2 hover:text-gray-300">
                <span>My Profile</span>
                <img src={CapacityIcon} alt="User Icon" className="h-8 w-8" />
              </button>
            </Link>

        {isLoggedIn ? (
          <div className="relative">
            <Link to="/my-profile" className="hover:text-gray-300 hover:underline">
              <button className="flex items-center space-x-2 hover:text-gray-300">
                <span>My Profile</span>
                <img src={CapacityIcon} alt="User Icon" className="h-8 w-8" />
              </button>
            </Link>
          </div>
        ) : (
          <>
            <Link to="/signup" className="hover:text-gray-300">
              <button className="bg-customGreen border-2 px-8 py-2 rounded">Sign Up</button>
            </Link>
            <Link to="/login" className="hover:text-gray-300">
              <button className="bg-customBlue border-2 rounded px-8 py-2">Login</button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
