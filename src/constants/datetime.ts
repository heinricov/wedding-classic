export const weddingDateTime = {
  date: "2025-08-24",  // Format: YYYY-MM-DD
  time: "10:00",       // Format: HH:mm (24-hour)
  timezone: "America/New_York"
};

// Function to get full ISO datetime string
export const getWeddingDateTime = () => {
  return `${weddingDateTime.date}T${weddingDateTime.time}:00${getTimezoneOffset()}`;
};

// Helper function to get timezone offset
function getTimezoneOffset() {
  const date = new Date();
  const offset = -date.getTimezoneOffset();
  const hours = Math.floor(Math.abs(offset) / 60);
  const minutes = Math.abs(offset) % 60;
  return `${offset >= 0 ? '+' : '-'}${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
}