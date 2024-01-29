
// WeekNavigation.js
import React from 'react';

const WeekNavigation = ({ currentWeek, goToNextWeek, goToPreviousWeek }) => {
  return (
    <div className='w-full  flex justify_center md:justify-between my-5 '>
      <button onClick={goToPreviousWeek} 
      className=" className='bg-hair text-white mx-2 py-1  md:px-4 md:py-2 md:mx-4 rounded hover:bg-hair-hover transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'"disabled={currentWeek === 0}>
        Semaine précédente 
      </button>
      <button onClick={goToNextWeek}
      className='bg-hair text-white px-4 py-2 rounded max-4  hover:bg-hair-hover transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'>
        Semaine suivante
      </button>
    </div>
  );
};

export default WeekNavigation;


