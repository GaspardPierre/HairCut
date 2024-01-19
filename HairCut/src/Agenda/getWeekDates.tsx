const getWeekDates = () => {
  const today = new Date();
  let week = [];

  // Ajuster pour commencer par mardi (2) car votre semaine commence ce jour-là
  const first = today.getDate() - today.getDay() + 2;

  for (let i = 0; i < 5; i++) {
    let day = new Date(today.setDate(first + i));
    week.push(day);
  }
  return week;
};


export default getWeekDates