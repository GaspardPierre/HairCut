import { useState,useEffect } from 'react';
import TimeSlot from './TimeSlot.tsx';
import Modal from './Modal.tsx';
import useAgendaState from './useAgendaState.tsx';
import getWeekDates from "./getWeekDates.tsx"
import formatDateEur from "../utils/formatDateEur.ts"

const daysOfWeek: string[] = ["Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
const hours: string[] = [];
for (let hour = 10; hour < 18; hour++) {
  hours.push(`${hour}:00`);
  hours.push(`${hour}:30`);
}

const Agenda: React.FC = () => {
  const [weekDates, setWeekDates] = useState<Date[]>([]);
  const {
    showModal,
    selectedTime,
    handleTimeSlotClick,
    handleConfirm,
    handleCloseModal,
  } = useAgendaState();

  const [appointments, setAppointments] = useState([]);


    const fetchAppointments = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/appointments'); 
        let data = await response.json();
        data = data.map(appointments => {
          return {
            ...appointments,
            date: new Date(appointments.date).toLocaleDateString('fr-FR')
          };
        })
        setAppointments(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des rendez-vous', error);
      }
    };
    
  const refreshAppointmentAfterCreation = () => {
    fetchAppointments();
  };

  useEffect(() =>{
    setWeekDates(getWeekDates());
    fetchAppointments();
  }, []);

  return (
    <div className="container mx-auto my-8 lg:w-4/5 xl:w-4/5 relative">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 ">
        {weekDates.map((date, index) => (
          <div key={index} className="border p-2">
            <h3 className="text-center font-bold">
              {daysOfWeek[index]} {formatDateEur(date)}
            </h3>
            {hours.map((hour) => (
      <TimeSlot
        key={hour}
        day={daysOfWeek[index]}
        hour={hour}
        date={formatDateEur(date)}
        onTimeSlotClick={handleTimeSlotClick}
        appointments={appointments} //
      />
    ))}
  </div>
))}
        
      </div>
      {showModal && (
        <Modal
          selectedTime={selectedTime}
          onConfirm={handleConfirm}
          onClose={handleCloseModal}
          onAppointmentsCreated= {refreshAppointmentAfterCreation}
        />
      )}
    </div>
  );
};

export default Agenda;
