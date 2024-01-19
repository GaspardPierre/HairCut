import React from 'react';

interface TimeSlotProps {
  day: string;
  hour: string;
  date :string;
  onTimeSlotClick: (day: string, hour: string, date: string) => void;
}

const TimeSlot: React.FC<TimeSlotProps> = ({ day, hour, date, onTimeSlotClick }) => {
  return (
    <div className="border-t p-2 hover:cursor-pointer " onClick={() => onTimeSlotClick(day, hour,date)}>
      {hour}
    </div>
  );
};

export default TimeSlot;
