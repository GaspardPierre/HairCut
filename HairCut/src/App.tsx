import "./index.css";
import { Routes, Route} from 'react-router-dom';
import MainContent from "./MainContent";
import Header from "./Header";
import About  from './About';
import Contact from './Contact';
import Agenda from './Agenda/Agenda.tsx';
import AdminAppointments from "./Admin/AdminAppointments.tsx";




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
    <Route path="/admin-appointments" element={<AdminAppointments />} />
      </Routes>
      {/* Footer component can be added here */}
    </div>
  
    </>
  );
};

export default App;