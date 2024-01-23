// Dans un fichier types/AppointmentType.ts

export interface Appointment {
    _id: string;
    date: string| Date; // ou Date si vous utilisez des objets Date
    startTime: string;
    endTime: string;
    clientName: string;
    phone: string;
    email: string;
  }
  