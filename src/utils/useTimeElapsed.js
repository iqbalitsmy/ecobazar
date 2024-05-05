function useTimeElapsed(timestamp) {
    const now = Date.now();
    const diff = now - timestamp;

    const minute = 60 * 1000;
    const hour = 60 * minute;
    const day = 24 * hour;
    const week = 7 * day;
    const month = 30.44 * day; // Average month length
    const year = 365.25 * day;

    if (diff < hour) {
        const minutes = Math.floor(diff / minute);
        return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
    } else if (diff < day) {
        const hours = Math.floor(diff / hour);
        return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
    } else if (diff < week) {
        const days = Math.floor(diff / day);
        return `${days} day${days !== 1 ? 's' : ''} ago`;
    } else if (diff < month) {
        const weeks = Math.floor(diff / week);
        return `${weeks} week${weeks !== 1 ? 's' : ''} ago`;
    } else if (diff < year) {
        const months = Math.floor(diff / month);
        return `${months} month${months !== 1 ? 's' : ''} ago`;
    } else {
        const years = Math.floor(diff / year);
        return `${years} year${years !== 1 ? 's' : ''} ago`;
    }
}

export default useTimeElapsed;