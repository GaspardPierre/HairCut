import React from "react";
import { Appointment } from "../Types/AppointmentType";
import { parseHour } from "../utils/parseHours";

interface TimeSlotProps {
  day: string;
  hour: string;
  date: string;
  appointments: Appointment[];

  onTimeSlotClick: (day: string, hour: string, date: string) => void;
}

const TimeSlot: React.FC<TimeSlotProps> = ({
  day,
  hour,
  date,
  appointments,
  onTimeSlotClick,
}) => {
  const currentHour = parseHour(hour);

  const isOccupied = appointments.some((appointment) => {
    console.log("Appointment Date:", appointment.date, "Slot Date:", date); // Vérifiez les dates
    console.log("Appointment Start/End:", appointment.startTime, appointment.endTime, "Slot Hour:", hour); // Vérifiez les heures
  
    const startHour = parseHour(appointment.startTime);
    const endHour = parseHour(appointment.endTime);
    const isSlotOccupied = appointment.date === date && currentHour >= startHour && currentHour < endHour;
    console.log("Is Slot Occupied:", isSlotOccupied); // Vérifiez si le créneau est occupé
    return isSlotOccupied;
  });
  

  // Ajoutez une classe conditionnelle pour les créneaux horaires occupés
  const occupiedClass = isOccupied ? "bg-gray-300 text-transparent" : "";

  return (
    <div className={`border-t p-2 hover:cursor-pointer ${occupiedClass}`} onClick={() => !isOccupied && onTimeSlotClick(day, hour, date)}>
      { hour}
    </div>
  );
};

export default TimeSlot;
