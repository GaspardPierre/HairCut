
import { useState } from 'react';

const useAgendaState = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedTime, setSelectedTime] = useState<{
    day: string;
    hour: string;
    date: string;
  } | null>(null);

  const handleTimeSlotClick = (day: string, hour: string, date: string) => {
    console.log("Time slot clicked:", day, hour, date);
    setSelectedTime({ day, hour, date });
    setShowModal(true);
  };

  // Prendre RDV envoyer la requête au back

  const handleConfirm = () => {
    console.log("Confirming appointment:", selectedTime);
    // Envoyer la requête au backend ici
    setShowModal(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return {
    showModal,
    selectedTime,
    handleTimeSlotClick,
    handleConfirm,
    handleCloseModal,
  };
};

export default useAgendaState;
