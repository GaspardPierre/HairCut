

import { Link } from "react-router-dom";

const Header = () => {
    return (
      <header className="bg-white shadow-md py-4 lg:w-4/5 xl:w-4/5 mx-auto">
        <div className="container mx-auto flex justify-between items-center">< Link to ="/">
          <h1 className="text-2xl lg:text-3xl xl:text-3xl font-handwriting text-gray-800 font-kaushan">Côté Salon</h1></Link>
          <nav>
            <ul className="flex space-x-8">
              <li>
                <Link to="/agenda"
                  className="text-gray-800 font-open hover:text-gray-600 space-x-2 text-sm"
                >
                  RDV
                </Link>
              </li>
              <li>
                <Link to="/about"
                  className="text-gray-800 font-open hover:text-gray-600 space-x-2 text-sm"
                >
                 A PROPOS
                </Link>
              </li>
              <li>
                <Link to="/contact"
                  className="text-gray-800 font-open hover:text-gray-600 space-x-2 text-sm"
                >
                  CONTACT
                </Link>
              </li>
              <li>
                <Link to="/contact"
                  className="text-gray-800 font-open hover:text-gray-600 space-x-2 text-sm"
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
