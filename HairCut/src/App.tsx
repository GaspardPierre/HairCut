import "./index.css";
import { Routes, Route} from 'react-router-dom';
import MainContent from "./MainContent";
import Header from "./Header";
import About  from './About';
import Contact from './Contact';
import Agenda from './Agenda/Agenda.tsx';
import AdminAppointments from "./Admin/AdminAppointments.tsx";
import Footer from "./Footer.tsx";




const App = () => {
  return (
    <div className="flex flex-col h-full md:h-full">
      <Header />

      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/admin-appointments" element={<AdminAppointments />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;
