import { Link } from "react-router-dom";
import PageContainer from "../components/PageContainer.jsx";

function AddedValue() {
    return (
        <div className="bg-customBlue py-16">
            <PageContainer>
                <div className="grid grid-cols-3 gap-4 w-full">
                    {/* Left Column with Card */}
                    <div className="col-span-2 flex flex-col justify-center items-start p-8">
                        <h2 className="text-3xl font-bold text-white mb-8">
                            Discover Football Like Never Before
                        </h2>
                        <ul className="text-white leading-relaxed list-disc list-inside">
                            <li>
                                Experience the ultimate thrill of football with fast-paced 5-a-side games to competitive 8-a-side matches at our premium locations.
                            </li>

                            <li className="mt-4">
                                Choose from a variety of surfaces and team formats to suit your style.
                            </li>
                            <li className="mt-4">
                                Find your ideal time slot, sign up effortlessly, and step onto the pitch for an unforgettable game.
                            </li>
                            <li className="mt-4">
                                The only thing missing is you!
                            </li>
                        </ul>
                        <div className="py-8">
                            <Link to="/signup" className="text-customBlue hover:text-gray-700 py-6">
                                <button className="bg-customGreen text-white border-2 px-8 py-2 rounded">
                                    Sign Up
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="col-span-1 flex justify-center items-center">
                        <img
                            src="https://images.pexels.com/photos/16865476/pexels-photo-16865476/free-photo-of-ville-batiments-buildings-immeubles.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Football Pitch"
                            className="rounded-lg h-full w-auto"
                        />
                    </div>
                </div>
            </PageContainer>
        </div>
    );
}

export default AddedValue;
