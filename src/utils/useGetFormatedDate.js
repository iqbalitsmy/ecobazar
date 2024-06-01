export default function formattedDateName(date) {
    date = new Date(date);
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    
    // Extract the day, month, and year from the Date object
    const day = date.getDate();
    const month = monthNames[date.getMonth()]; // getMonth() returns 0-based index
    const year = date.getFullYear();

    return `${day} ${month}, ${year}`;
}