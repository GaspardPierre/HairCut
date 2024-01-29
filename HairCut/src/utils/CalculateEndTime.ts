// ADD 30 Minutes to startTime

export const calculateEndTime = (startTime:string, durationMinutes = 30) => {
    const [hours, minutes] = startTime.split(':').map(Number);
    console.log("HOURS", hours,"MINUTES",minutes)
    const endTime = new Date(0, 0, 0, hours, minutes + durationMinutes);
    return endTime.getHours().toString().padStart(2, '0') + ':' + endTime.getMinutes().toString().padStart(2, '0');
  };