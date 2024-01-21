// Fonction pour comparer les heures
export const parseHour = (hourString: string): number => {
    const [hours, minutes] = hourString.split(':').map(Number);
    return hours * 60 + minutes; // Convertit l'heure en minutes pour la comparaison
  };
  