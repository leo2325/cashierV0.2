// Fonction utilitaire pour formater la date actuelle au format 'jj/mm/aa'
export const getDayDate = () => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = String(today.getFullYear());
    const dayDateString = `${day}/${month}/${year}`;
    return dayDateString;
};

export default getDayDate; 