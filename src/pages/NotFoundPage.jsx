import NotFound from "../assets/images/NotFound.png";

function NotFoundPage() {
  return (
    <div className="bg-customBlue h-[950px] pb-10">
      <div
        className="relative h-[450px] bg-cover bg-center"
        style={{ backgroundImage: `url(${NotFound})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-6xl font-climate font-bold text-white text-center">
            404 <br />Page Not Found
          </h1>
        </div>
      </div>

      <div className="flex justify-center items-center flex-col mt-8">
        <p className="text-white text-xl text-center">
          Oops! The page you're looking for doesn't exist.
        </p>
        <button
          onClick={() => window.history.back()}
          className="mt-6 px-6 py-3 bg-customGreen text-white rounded-lg hover:bg-green-600 transition"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default NotFoundPage;
