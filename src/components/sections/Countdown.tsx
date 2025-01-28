import { useState, useEffect } from "react";
import { Calendar } from "lucide-react";
import { getWeddingDateTime } from "../../constants/datetime";
import { eventDetails } from "../../constants/event-details";
import { fonts } from "../../constants/font";
import { colors } from "../../constants/colors";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const weddingDate = new Date(getWeddingDateTime());
      const now = new Date().getTime();
      const difference = weddingDate.getTime() - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000 * 60); // Update every minute

    return () => clearInterval(timer);
  }, []);

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
            // style={{ color: colors.text }}
          >
            {eventDetails.reception.day}
          </p>
          <p
            className={`${fonts.subtitle} font-bold text-2xl md:text-4xl mb-8 text-white`}
            // style={{ color: colors.text }}
          >
            {eventDetails.reception.time}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-8">
          <div
            className="p-4 rounded-lg"
            style={{ backgroundColor: colors.secondary }}
          >
            <div
              className={`${fonts.title} text-4xl font-bold`}
              style={{ color: colors.primary }}
            >
              {timeLeft.days}
            </div>
            <div
              className={`${fonts.subtitle} text-sm`}
              style={{ color: colors.textLight }}
            >
              Days
            </div>
          </div>
          <div
            className="p-4 rounded-lg"
            style={{ backgroundColor: colors.secondary }}
          >
            <div
              className={`${fonts.title} text-4xl font-bold`}
              style={{ color: colors.primary }}
            >
              {timeLeft.hours}
            </div>
            <div
              className={`${fonts.subtitle} text-sm`}
              style={{ color: colors.textLight }}
            >
              Hours
            </div>
          </div>
          <div
            className="p-4 rounded-lg"
            style={{ backgroundColor: colors.secondary }}
          >
            <div
              className={`${fonts.title} text-4xl font-bold`}
              style={{ color: colors.primary }}
            >
              {timeLeft.minutes}
            </div>
            <div
              className={`${fonts.subtitle} text-sm`}
              style={{ color: colors.textLight }}
            >
              Minutes
            </div>
          </div>
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
