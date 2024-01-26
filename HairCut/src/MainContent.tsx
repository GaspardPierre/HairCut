import ImgFull from "/woman.jpg";
import Man from "/man.jpg";
import Woman from "/pink.jpg";
import HairCut from "/prestations.jpg";



const MainContent = () => {
    return (
      <main className="container mx-auto my-8 lg:w-4/5 xl:w-4/5 relative">
        <section className="text-center ">
          <div className="w-full h-80 relative ">
            <img
              src={ImgFull}
              alt="Coiffure Femme"
              className="w-full h-full object-cover  shadow-md"
            />
          </div>
          <div className=" hidden md:inline-flex absolute  lg:top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-80 rounded px-4 py-4">
          <h2 className=" hidden md:inline-flex text-xl md:text-4xl text-gray-800 font-semibold">
            HairCut  Marly-le-roi
          </h2>
          </div>
          <div className="flex flex-wrap -mx-4 mt-8">
            <div className="w-full md:w-1/3 px-4 mb-8 ">
              <h3 className="text-xl text-gray-800 font-medium md:text-2xl md:mb-10 mb-4">
                COIFFURE FEMME
              </h3>
              <img
                src={Woman}
                alt="Coiffure Femme"
                className="w-full h-64 rounded-sm shadow-md"
              />
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <h3 className="text-xl text-gray-800 font-medium mb-4 md:text-2xl md:mb-10 ">
                COIFFURE HOMME
              </h3>
              <img
                src={Man}
                alt="Coiffure Homme"
                className="w-full h-64 rounded-sm shadow-md"
              />
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <h3 className="text-xl text-gray-800 font-medium mb-4 md:text-2xl md:mb-10 ">
                PRESTATIONS
              </h3>
              <img
                src={HairCut}
                alt="Prestations"
                className="w-full h-64 rounded-sm shadow-md"
              />
            </div>
          </div>
        </section>
      </main>
    );
  };

  export default MainContent;