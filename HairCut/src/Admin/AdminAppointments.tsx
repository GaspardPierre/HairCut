// src/AdminAppointments.tsx
import React, { useState, useEffect } from 'react';
import { Appointment } from '../Types/AppointmentType';         

const AdminAppointments: React.FC = () => {

    const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/appointments');
        let data:Appointment[]= await response.json();
      
        data = data.map(appointment => ({
          ...appointment,
          date: new Date(appointment.date).toLocaleDateString('fr-FR'),
          
    
           // Convertir les dates ISO
        }));
       
        setAppointments(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des rendez-vous', error);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <div className="container mx-auto my-8 lg:w-3/5 xl:w-3/5">
      <h2 className="text-xl font-bold mb-4 text-center">Liste des Rendez-vous</h2>
      
{appointments.map((appointment) => (
  <div key={appointment._id} className="p-2 border-b ">
    <p>Date: {appointment.date}</p>
    <p>Heure: {appointment.startTime} - {appointment.endTime}</p> 
    <p>Nom du client: {appointment.clientName}</p>
 
  </div>
))}


      </div>

  );
};

export default AdminAppointments;
