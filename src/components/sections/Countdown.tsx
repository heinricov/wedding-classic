import { useState, useEffect } from "react";
import { Timer, Calendar } from "lucide-react";
import { getWeddingDateTime } from "../../constants/datetime";
import { eventDetails } from "../../constants/event-details";
import { fonts } from "../../constants/font";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const weddingDate = new Date(getWeddingDateTime());
      const now = new Date();
      const difference = Math.max(weddingDate.getTime() - now.getTime(), 0);

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
      };
    };

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    // Update every minute
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 60000); // Update every minute instead of every second

    return () => clearInterval(timer);
  }, []);

  const addToGoogleCalendar = () => {
    const { location } = eventDetails.reception;
    const eventDateTime = new Date(getWeddingDateTime());
    const endDateTime = new Date(eventDateTime.getTime() + 4 * 60 * 60 * 1000); // 4 hours duration

    const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      "Wedding Celebration"
    )}&dates=${eventDateTime
      .toISOString()
      .replace(/[-:]/g, "")
      .replace(/\.\d{3}/, "")}/${endDateTime
      .toISOString()
      .replace(/[-:]/g, "")
      .replace(
        /\.\d{3}/,
        ""
      )}&details=${encodeURIComponent(
      "Wedding Celebration"
    )}&location=${encodeURIComponent(location)}`;

    window.open(googleCalendarUrl, "_blank");
  };

  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <Timer className="mx-auto mb-6 w-8 h-8 text-[#D4A373]" />
        <h2 className={`${fonts.heading} text-3xl mb-4`}>
          Counting down to our special day
        </h2>
        <p className={`${fonts.subtitle} text-lg text-[#6B705C] mb-8`}>
          {eventDetails.reception.date}
        </p>

        <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto mb-8">
          <div className="p-4 rounded-lg bg-[#FAEDCD]">
            <div className={`${fonts.title} text-4xl font-bold text-[#D4A373]`}>
              {timeLeft.days}
            </div>
            <div className={`${fonts.subtitle} text-sm text-[#6B705C]`}>Days</div>
          </div>
          <div className="p-4 rounded-lg bg-[#FAEDCD]">
            <div className={`${fonts.title} text-4xl font-bold text-[#D4A373]`}>
              {timeLeft.hours}
            </div>
            <div className={`${fonts.subtitle} text-sm text-[#6B705C]`}>Hours</div>
          </div>
          <div className="p-4 rounded-lg bg-[#FAEDCD]">
            <div className={`${fonts.title} text-4xl font-bold text-[#D4A373]`}>
              {timeLeft.minutes}
            </div>
            <div className={`${fonts.subtitle} text-sm text-[#6B705C]`}>Minutes</div>
          </div>
        </div>

        <button
          onClick={addToGoogleCalendar}
          className="inline-flex items-center px-6 py-3 bg-[#D4A373] text-white rounded-md hover:bg-[#c49366] transition-colors duration-300"
        >
          <Calendar className="w-5 h-5 mr-2" />
          <span className={fonts.body}>Add to Google Calendar</span>
        </button>
      </div>
    </div>
  );
};

export default Countdown;