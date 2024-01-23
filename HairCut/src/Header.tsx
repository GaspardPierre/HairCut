

import { Link } from "react-router-dom";

const Header = () => {
    return (
      <header className="bg-white shadow-sm py-4 lg:w-4/5 xl:w-4/5 mx-auto ">
        <div className="container mx-auto flex justify-between items-center ">
        <div className="flex flex-col items-center justify-center w-full lg:w-1/3 "> 
          < Link to ="/"
         className="w-full">
         

         
          <h1 className="text-center lg:text-left text-4xl lg:text-5xl xl:text-5xl font-handwriting text-gray-800 font-kaushan mb-6">HairCut</h1>
          </Link>
                {/* Afficher "PRENDRE RDV" uniquement en mode mobile */}
                <Link to="/agenda" className="text-center text-2xl text-custom-brown font-open md:hidden" >
                    <h2>PRENDRE RDV</h2>
                </Link>
                </div>
          <nav className=" xl:w-2/5">
            <ul className="hidden lg:flex  space-x-6 xl:space-x-8">
              <li>
                <Link to="/agenda"
                  className="text-gray-800 font-open hover:text-gray-600 space-x-2 text-lg border-transparent border-2 hover:border-b-custom-brown transition duration-300"
                >
                  RDV
                </Link>
              </li>
              <li>
                <Link to="/about"
                  className="text-gray-800 font-open hover:text-gray-600 space-x-2 text-lg border-transparent border-2 hover:border-b-custom-brown transition duration-300"
                >
                 A PROPOS
                </Link>
              </li>
              <li>
                <Link to="/contact"
                  className="text-gray-800 font-open hover:text-gray-600 space-x-2 text-lg border-transparent border-2 hover:border-b-custom-brown transition duration-300"
                >
                  CONTACT
                </Link>
              </li>
              <li>
                <Link to="/contact"
                  className="text-gray-800 font-open hover:text-gray-600 space-x-2 text-lg border-transparent border-2 hover:border-b-custom-brown transition duration-300"
                >
                  PRESTATIONS
                </Link>
              </li>
            </ul>
          </nav>
        
         
                
        </div>
      </header>
    );
};

export default Header;
