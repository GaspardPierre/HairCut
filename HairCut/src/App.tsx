import { Routes, Route, useNavigate } from 'react-router-dom';
import "./index.css";
import MainContent from "./MainContent";
import Header from "./Header";
import About  from './About';
import Contact from './Contact';
import Agenda from './Agenda/Agenda';




const App = () => {
  return (
    <> 
      <Header />
  
    <div className="w-full">
    <Routes>
    <Route path="/" element={<MainContent />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/agenda" element={<Agenda />} />
      </Routes>
      {/* Footer component can be added here */}
    </div>
  
    </>
  );
};

export default App;