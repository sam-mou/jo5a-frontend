import PageContainer from "../components/PageContainer";

function WhereToPlay() {
  return (
    <div>
      <PageContainer>
      <div className="text-center text-3xl font-climate text-customBlue p-8">
        <h1>WHERE TO PLAY?</h1>
      </div>
      <div className="flex justify-center pb-8">
        <img
          src="https://as2.ftcdn.net/v2/jpg/01/28/97/21/1000_F_128972169_Ey4Pvdhi75HqkkCnN8Y5qKIgpwb7zet3.jpg"
          alt="Map"
          className="rounded-xl h-full object-cover"
        />
      </div>
      </PageContainer>
    </div>
  );
}

export default WhereToPlay;
