export function getFormattedStringDate(date: Date) {
    // Get the date in the format "YYYY-MM-DD"
    const formattedDate = date.toISOString().split('T')[0];
    return formattedDate;
}