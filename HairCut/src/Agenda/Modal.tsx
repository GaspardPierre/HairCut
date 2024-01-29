import { useState } from 'react';
import AppointmentForm from "./AppointmentForm";

interface ModalProps {
  selectedTime: { day: string, slot: string, date: string } | null;
  onClose: () => void;
  onAppointmentsCreated: () => void;
  onSubmit: (appointmentData: {
    day: string;
    slot: string;
    date: string;
    clientName: string;
    phone: string;
    email: string;
  }) => void;
}

const Modal: React.FC<ModalProps> = ({ selectedTime, onClose, onSubmit,onAppointmentsCreated }) => {
  const [showForm, setShowForm] = useState(false);
  console.log(selectedTime)

  const handleConfirmClick = () => {
    // Affiche le formulaire lorsque l'utilisateur clique sur "Oui"
    setShowForm(true);
  };

  return (
    <div className="fixed z-40 top-0 left-0 w-full h-full flex items-center justify-center bg-slate-900 bg-opacity-50">
      <div className="p-8 rounded-xl bg-custom-cream shadow-lg">
        {!showForm && (
          <>
            <p>
              Souhaitez-vous prendre un rendez-vous {selectedTime?.day} à {selectedTime?.slot}  ?
            </p>
            <div className="flex justify-around mt-4">
              <button
                className="bg-green-500 text-white px-4 py-2 rounded hover:cursor-pointer"
                onClick={handleConfirmClick}
              >
                Oui
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:cursor-pointer"
                onClick={onClose}
              >
                Non
              </button>
            </div>
          </>
        )}
        {showForm && selectedTime && (
          <AppointmentForm
           selectedTime={selectedTime}
            onSubmit={onSubmit}
            onClose={onClose} 
            onAppointmentsCreated={onAppointmentsCreated}
         
             />
        )}
      </div>
    </div>
  );
};

export default Modal;


