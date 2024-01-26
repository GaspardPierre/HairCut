import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-footer text-white p-10 text-center">
      {/* Contenu du pied de page */}
      <Link to='/'  >
      <p className="pb-3" >Haircut 2024</p> 
      </Link>
      <Link to='/contact'  >
      <p  className="pb-3"> Contact</p> 
      </Link >
      <Link to='/about' >
      <p  className="pb-3">A propos</p> 
      </Link>
         </footer>
  );
};

export default Footer;
