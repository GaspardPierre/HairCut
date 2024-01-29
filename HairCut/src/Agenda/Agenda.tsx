import React, { useState, useEffect } from 'react';
import WeekNavigation from './WeekNavigation';
import DayColumn from './DayColumn';
import Modal from './Modal';
const CalendarComponent = () => {
  const [currentWeek, setCurrentWeek] = useState(0);
  const [weekDays, setWeekDays] = useState([]);
  const [timeSlots, setTimeSlots] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [bookedSlots, setBookedSlots] = useState({}); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleSlotSelected = (day, slot) => {
    setSelectedTime({ day, slot });
    setIsModalOpen(true);
  };


  const handleCloseModal = () => {
   setIsModalOpen(false)
  };

  useEffect(() => {
    generateWeekDays();
    generateTimeSlots();
  }, [currentWeek]);

  const generateWeekDays = () => {
    const days = [];
    const today = new Date();
    // Ajuste la date au début de la semaine de travail
    if (today.getDay() === 0 || today.getDay() === 6) { // Dimanche ou samedi
      today.setDate(today.getDate() + (8 - today.getDay()));
    }

    today.setDate(today.getDate() + currentWeek * 7);

    for (let i = 0; i < 5; i++) { // Du mardi au samedi
      const nextDay = new Date(today);
      nextDay.setDate(today.getDate() + i);
      days.push(nextDay.toLocaleDateString('fr-FR'));
    }
    console.log("Generated weekDays:", days); 
    setWeekDays(days);
  };

  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 10; hour < 18; hour++) {
      slots.push(`${hour}:00`, `${hour}:30`);
    }
    setTimeSlots(slots);
  };

  const goToNextWeek = () => {
    setCurrentWeek(currentWeek + 1);
  };

  const goToPreviousWeek = () => {
    if (currentWeek > 0) {
      setCurrentWeek(currentWeek - 1);
    }
  };
  useEffect(() => {
    fetchAppointments();
    generateWeekDays();
    generateTimeSlots();
  }, [currentWeek]);

  // Chargement initial des rendez-vous
  const fetchAppointments = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/appointments');
      const data = await response.json();
     
      processAppointments(data); // Traiter les données pour les mettre dans le format approprié
    } catch (error) {
      console.error('Erreur lors du chargement des rendez-vous', error);
    }
  };

  const processAppointments = (appointments) => {
    const newBookedSlots = {};
  
    appointments.forEach(appointment => {
      const dateStr = new Date(appointment.date).toLocaleDateString();
      console.log(dateStr)
  
      if (!newBookedSlots[dateStr]) {
        newBookedSlots[dateStr] = [];
      }
  
      newBookedSlots[dateStr].push(appointment.startTime);
    });
    console.log("NEWBOOKEDSLOTS",newBookedSlots);
    setBookedSlots(newBookedSlots);
  };
  
  // Rafraîchir les rendez-vous
  const refreshAppointments = () => {
    fetchAppointments();
  };

  
  return (
    <>
     <WeekNavigation 
        currentWeek={currentWeek} 
        goToNextWeek={goToNextWeek} 
        goToPreviousWeek={goToPreviousWeek} 
      />
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
    
      {weekDays.map(day => (
        <DayColumn 
          key={day}
          day={day}
          timeSlots={timeSlots}
          bookedSlots={bookedSlots || []}
          onSlotSelected={handleSlotSelected}
          onAppointmentsCreated={refreshAppointments}
        />
      ))}
      {isModalOpen && (
        <Modal 
          selectedTime={selectedTime}
          onClose={handleCloseModal}
          onAppointmentsCreated={refreshAppointments}
        />
      )}
    </div>
    </>
  );
};

export default CalendarComponent;