import React from 'react';

interface TimeSlotProps {
  day: string;
  hour: string;
  onTimeSlotClick: (day: string, hour: string) => void;
}

const TimeSlot: React.FC<TimeSlotProps> = ({ day, hour, onTimeSlotClick }) => {
  return (
    <div className="border-t p-2 hover:cursor-pointer " onClick={() => onTimeSlotClick(day, hour)}>
      {hour}
    </div>
  );
};

export default TimeSlot;
