
import { useState } from 'react';

const useAgendaState = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedTime, setSelectedTime] = useState<{ day: string; hour: string } | null>(null);

  const handleTimeSlotClick = (day: string, hour: string) => {
    setSelectedTime({ day, hour });
    setShowModal(true);
  };

  const handleConfirm = () => {
    // Envoyer la requête au backend ici
    setShowModal(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return { showModal, selectedTime, handleTimeSlotClick, handleConfirm, handleCloseModal };
};

export default useAgendaState;
