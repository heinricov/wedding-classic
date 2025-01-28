import { useEffect, useState } from "react";
import { fonts } from "../../constants/font";
import { colors } from "../../constants/colors";
import { getWeddingDateTime } from "../../constants/datetime";
import { eventDetails } from "../../constants/event-details";
import { Calendar } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (targetDate: Date): TimeLeft => {
  const difference = targetDate.getTime() - new Date().getTime();
  let timeLeft: TimeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date(getWeddingDateTime());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex-1 px-2 sm:px-4">
      <div className="relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm p-3 sm:p-4 group hover:bg-white/15 transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative">
          <div
            className={`${fonts.title} text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-1`}
          >
            {value.toString().padStart(2, "0")}
          </div>
          <div
            className={`${fonts.subtitle} text-xs sm:text-sm text-white/70 uppercase tracking-wider`}
          >
            {label}
          </div>
        </div>
      </div>
    </div>
  );

  const addToCalendar = () => {
    const location = eventDetails.reception.location;
    const startDateTime = new Date(getWeddingDateTime());
    const endDateTime = new Date(startDateTime.getTime() + 4 * 60 * 60 * 1000); // 4 hours duration

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      "Our Wedding Day"
    )}&dates=${startDateTime
      .toISOString()
      .replace(/[-:]/g, "")
      .replace(/\.\d{3}/, "")}/${endDateTime
      .toISOString()
      .replace(/[-:]/g, "")
      .replace(/\.\d{3}/, "")}&details=${encodeURIComponent(
      "Wedding Celebration"
    )}&location=${encodeURIComponent(location)}`;

    window.open(googleCalendarUrl, "_blank");
  };

  return (
    <div className="py-8 px-4 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 max-w-sx mx-auto">
          <p
            className={`${fonts.subtitle} font-bold text-2xl md:text-4xl text-white`}
          >
            {eventDetails.reception.day}
          </p>
          <p
            className={`${fonts.subtitle} font-bold text-2xl md:text-4xl mb-8 text-white`}
          >
            {eventDetails.reception.time}
          </p>
        </div>

        <div className="flex justify-center space-x-2 sm:space-x-4 max-w-md mx-auto mb-8 text-white">
          <TimeUnit value={timeLeft.days} label="Days" />
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <TimeUnit value={timeLeft.minutes} label="Minutes" />
          <TimeUnit value={timeLeft.seconds} label="Seconds" />
        </div>

        <button
          onClick={addToCalendar}
          className="inline-flex items-center px-6 py-3 rounded-full text-white hover:opacity-90 transition-opacity duration-300"
          style={{ backgroundColor: colors.primary }}
        >
          <Calendar className="w-5 h-5 mr-2" />
          Add to Calendar
        </button>
      </div>
    </div>
  );
};

export default Countdown;
