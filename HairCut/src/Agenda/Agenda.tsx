
import TimeSlot from './TimeSlot.tsx';
import Modal from './Modal.tsx';
import useAgendaState from './useAgendaState.tsx';

const daysOfWeek: string[] = ["Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
const hours: string[] = [];
for (let hour = 10; hour < 18; hour++) {
  hours.push(`${hour}:00`);
  hours.push(`${hour}:30`);
}

const Agenda: React.FC = () => {
  const { showModal, selectedTime, handleTimeSlotClick, handleConfirm, handleCloseModal } = useAgendaState();

  return (
    <div className="container mx-auto my-8 lg:w-4/5 xl:w-4/5 relative">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 ">
        {daysOfWeek.map(day => (
          <div key={day} className="border p-2">
            <h3 className="text-center font-bold">{day}</h3>
            {hours.map(hour => (
              <TimeSlot key={hour} day={day} hour={hour} onTimeSlotClick={handleTimeSlotClick} />
            ))}
          </div>
        ))}
      </div>
      {showModal && <Modal selectedTime={selectedTime} onConfirm={handleConfirm} onClose={handleCloseModal} />}
    </div>
  );
};

export default Agenda;
