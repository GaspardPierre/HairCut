
import "./index.css";
import ImgFull from "../public/woman.jpg";
import Man from "../public/man.jpg";
import Woman from "../public/pink.jpg";
import HairCut from "../public/prestations.jpg";

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4 lg:w-4/5 xl:w-4/5 mx-auto">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl lg:text-3xl xl:text-3xl font-handwriting text-gray-800 font-kaushan">Côté Salon</h1>
        <nav>
          <ul className="flex space-x-8">
            <li>
              <a
                href="#"
                className="text-gray-800 font-open hover:text-gray-600 space-x-2 text-sm"
              >
                 RDV
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-800 font-open hover:text-gray-600 space-x-2 text-sm"
              >
                À PROPOS
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-800 font-open hover:text-gray-600 space-x-2 text-sm"
              >
                SERVICES
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-800 font-open hover:text-gray-600 space-x-2"
              >
                CONTACT
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

const MainContent = () => {
  return (
    <main className="container mx-auto my-8 lg:w-4/5 xl:w-4/5 relative">
      <section className="text-center">
        <div className="w-full h-64 relative">
          <img
            src={ImgFull}
            alt="Coiffure Femme"
            className="w-full h-full object-cover  shadow-md"
          />
        </div>
        <div className="absolute top-20 lg:top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-50 rounded px-4 py-2">
        <h2 className="text-4xl text-gray-800 font-semibold">
          COTE SALON Marly-le-roi
        </h2>
        </div>
        <div className="flex flex-wrap -mx-4 mt-8">
          <div className="w-full md:w-1/3 px-4 mb-8">
            <h3 className="text-xl text-gray-800 font-medium mb-4">
              COIFFURE FEMME
            </h3>
            <img
              src={Woman}
              alt="Coiffure Femme"
              className="w-full h-64 rounded-sm shadow-md"
            />
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <h3 className="text-xl text-gray-800 font-medium mb-4">
              COIFFURE HOMME
            </h3>
            <img
              src={Man}
              alt="Coiffure Homme"
              className="w-full h-64 rounded-sm shadow-md"
            />
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <h3 className="text-xl text-gray-800 font-medium mb-4">
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

const App = () => {
  return (
    <div className="w-full">
      <Header />
      <MainContent />
      {/* Footer component can be added here */}
    </div>
  );
};

export default App;