// AppointmentForm.tsx
import React, { useState } from 'react';
import { calculateEndTime } from '../utils/CalculateEndTime';

// Assurez-vous que les types des props sont corrects et qu'ils correspondent à ce que vous attendez
const AppointmentForm = ({ selectedTime, onSubmit, onClose, onAppointmentsCreated }) => {
  const [clientName, setClientName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Calcul de l'heure de fin basé sur l'heure de début sélectionnée
    const endTime = calculateEndTime(selectedTime.hour);

    const appointmentData = {
      date: new Date(selectedTime.date.split('/').reverse().join('-')), // Assurez-vous que ce format de date est correct
      startTime: selectedTime.hour,
      endTime,
      clientName,
      phone: parseInt(phone),
      email,
      // clientId: 'VotreClientId', // Si nécessaire, selon votre logique d'application
    };

    try {
      const response = await fetch('http://localhost:3000/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(appointmentData)
      });

      if (response.ok) {
        alert('Rendez-vous pris avec succès');
        onClose();
        onAppointmentsCreated(); 
      } else {
        throw new Error('Réponse réseau non OK');
      }
    } catch (error) {
      console.error('Erreur lors de la prise de rendez-vous', error);
      alert('Erreur lors de la prise de rendez-vous');
    }
  };
  

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Nom</label>
        <input
          type="text"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Téléphone</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
      </div>
      <div className='flex  items-center justify-around '>
      <button
          type="button" 
          className="bg-gray-500 transition duration-300 text-white px-4 py-2 rounded hover:bg-gray-600 " 
          onClick={onClose} 
        >
          Retour
        </button>
     
        <button
          type="submit"
          className="bg-hair text-white px-4 py-2 rounded hover:bg-hair-hover transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Confirmer  RDV
        </button>
      </div>
   
    </form>
  );
}


export default AppointmentForm;
