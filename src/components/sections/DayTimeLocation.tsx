import { Calendar, MapPin } from "lucide-react";
import { eventDetails } from "../../constants/event-details";
import { fonts } from "../../constants/font";
import { colors } from "../../constants/colors";

const DayTimeLocation = () => {
  const openGoogleMaps = (link: string) => {
    const googleMapsUrl = `${link}`;
    window.open(googleMapsUrl, "_blank");
  };

  return (
    <div className="py-16 px-4" style={{ backgroundColor: colors.secondary }}>
      <div className="max-w-4xl mx-auto">
        <h2 className={`${fonts.heading} text-3xl text-center mb-12`} style={{ color: colors.text }}>
          Wedding Events
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Ceremony */}
          <div className="bg-white p-8 rounded-lg shadow-md" style={{ backgroundColor: colors.background }}>
            <h3 className={`${fonts.heading} text-2xl text-center mb-6`} style={{ color: colors.primary }}>
              The Ceremony
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 text-[#D4A373] mr-3" style={{ color: colors.primary }} />
                <p className={`${fonts.subtitle} text-[#6B705C]`} style={{ color: colors.textLight }}>
                  {eventDetails.akad.date}
                </p>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-[#D4A373] mr-3 mt-1" style={{ color: colors.primary }} />
                <div>
                  <p className={`${fonts.subtitle} text-[#6B705C] mb-2`} style={{ color: colors.textLight }}>
                    {eventDetails.akad.location}
                  </p>
                  <button
                    onClick={() => openGoogleMaps(eventDetails.akad.link)}
                    className="inline-flex items-center px-4 py-2 bg-[#D4A373] text-white rounded-md hover:bg-[#c49366] transition-colors duration-300 text-sm"
                    style={{ backgroundColor: colors.primary, color: "white" }}
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className={fonts.body}>View Location</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Reception */}
          <div className="bg-white p-8 rounded-lg shadow-md" style={{ backgroundColor: colors.background }}>
            <h3 className={`${fonts.heading} text-2xl text-center mb-6`} style={{ color: colors.primary }}>
              The Reception
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 text-[#D4A373] mr-3" style={{ color: colors.primary }} />
                <p className={`${fonts.subtitle} text-[#6B705C]`} style={{ color: colors.textLight }}>
                  {eventDetails.reception.date}
                </p>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-[#D4A373] mr-3 mt-1" style={{ color: colors.primary }} />
                <div>
                  <p className={`${fonts.subtitle} text-[#6B705C] mb-2`} style={{ color: colors.textLight }}>
                    {eventDetails.reception.location}
                  </p>
                  <button
                    onClick={() => openGoogleMaps(eventDetails.reception.link)}
                    className="inline-flex items-center px-4 py-2 bg-[#D4A373] text-white rounded-md hover:bg-[#c49366] transition-colors duration-300 text-sm"
                    style={{ backgroundColor: colors.primary, color: "white" }}
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className={fonts.body}>View Location</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayTimeLocation;
