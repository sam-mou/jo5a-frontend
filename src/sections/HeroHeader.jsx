import HeroHeaderImage from "../assets/images/HeroHeader-Jo5a.png";
import { Link } from "react-router-dom";

function HeroHeader() {
  return (
    <div className="relative w-full h-auto">
      <img
        src={HeroHeaderImage}
        alt="Hero Header"
        className="w-full h-auto"
      />

      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center bg-black/40">
        <h1 className="text-4xl md:text-4xl font-climate drop-shadow-lg">
          BOOK & PLAY FOOTBALL NEAR YOU!
        </h1>
        <p className="text-xl md:text-xl mt-4 font-light drop-shadow-lg">
          Fast, Easy, Anytime!
        </p>
        <div className="py-6">
        <Link to="/pitches" className="hover:text-gray-300">
                    <button className=" bg-customBlue border-2 rounded px-8 py-2">Book a Game</button>
                </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroHeader;
