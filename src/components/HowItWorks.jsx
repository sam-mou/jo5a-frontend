import SearchGame from "../assets/images/SearchGame.png";
import BookGame from "../assets/images/BookGame.png";
import PlayGame from "../assets/images/PlayGame.png";

function HowItWorks() {
  return (
    <div className="bg-customBlue py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-white text-3xl font-bold font-climate text-center mb-8">
          HOW JOGA WORKS
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {/* Grid Item 1 */}
          <div className="flex flex-col items-center text-center">
            <div>
              <img
                src={SearchGame}
                alt="Search Game Icon"
                className="w-full h-32 object-cover rounded-full"
              />
            </div>
            <h3 className="text-xl font-semibold text-white mt-4">SEARCH FOR A GAME</h3>
          </div>

          {/* Grid Item 2 */}
          <div className="flex flex-col items-center text-center">
            <div>
              <img
                src={BookGame}
                alt="Book Game Icon"
                className="w-full h-32 object-cover rounded-full"
              />
            </div>
            <h3 className="text-xl font-semibold text-white mt-4">BOOK A GAME</h3>
          </div>

          {/* Grid Item 3 */}
          <div className="flex flex-col items-center text-center">
            <div>
              <img
                src={PlayGame}
                alt="Play Game Icon"
                className="w-full h-32 object-cover rounded-full"
              />
            </div>
            <h3 className="text-xl font-semibold text-white mt-4">BE THE GAME</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
