// Fonction pour comparer les heures
export const parseHour = (hourString: string): number => {
    const [hours, minutes] = hourString.split(':').map(Number);
    return hours * 60 + minutes; // Convertit l'heure en minutes pour la comparaison
  };
  

  export const convertDate = (dateStr:string) => {
    const [day, month, year] = dateStr.split('/').map(Number);
    return new Date(year, month - 1, day); // Les mois sont indexés à partir de 0 en JS
  };