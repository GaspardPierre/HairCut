import React from "react";
import { Appointment } from "../Types/AppointmentType";
import { parseHour } from "../utils/parseHours";
import { convertDate } from "../utils/parseHours";

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
  // Conversion de la date en format correct
  const slotDate = convertDate(date);
  
  // Décomposition du prop 'hour' en heures et minutes
  const [slotHour, slotMinute] = hour.split(':').map(Number); // 
  const slotDateTime = new Date(slotDate.getFullYear(), slotDate.getMonth(), slotDate.getDate(), slotHour, slotMinute);

  const now = new Date();
  const isPast = slotDateTime < now;

  const isOccupied = appointments.some((appointment) => {
    const startHour = parseHour(appointment.startTime);
    const endHour = parseHour(appointment.endTime);
    return appointment.date === date && currentHour >= startHour && currentHour < endHour;
  });

  // Classe conditionnelle pour les créneaux horaires occupés ou passés
  const occupiedClass = isOccupied || isPast ? "bg-gray-300 cursor-not-allowed" : "hover:cursor-pointer";
  const textClass = isOccupied || isPast ? "text-transparent" : "";

  // Fonction onClick pour prendre en compte les créneaux passés
  const handleOnClick = () => {
    if (!(isOccupied || isPast)) {
      onTimeSlotClick(day, hour, date);
    }
  };

  return (
    <div className={`border-t p-2 ${occupiedClass} ${textClass}`} onClick={handleOnClick}>
      {hour} 
    </div>
  );
};

export default TimeSlot;
