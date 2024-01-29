const DayColumn = ({ day, timeSlots, bookedSlots, onSlotSelected }) => {
    console.log("****BOOKEDSLOTS******",bookedSlots)
    console.log("****DAY******",day)
    console.log("****TIMESLOTS******",timeSlots)
   
    return (
      <div className="border p-2">
        <h3>{day}</h3>
        {timeSlots.map(slot => (
          <div 
            key={slot} 
            className={`border-t p-2 ${bookedSlots[day]?.includes(slot) ? 'bg-red-200' : 'bg-green-200 cursor-pointer'}`}
            onClick={() => !bookedSlots[day]?.includes(slot) && onSlotSelected(day, slot)}
          >
            {slot} {bookedSlots[day]?.includes(slot) ? '(Non disponible)' : '(Disponible)'}
          </div>
        ))}
      </div>
    );
  };
  
  export default DayColumn;