import { Calendar, MapPin } from "lucide-react";
import { eventDetails } from "../../constants/event-details";
import { fonts } from "../../constants/font";

const DayTimeLocation = () => {
  const openGoogleMaps = (link: string) => {
    const googleMapsUrl = `${link}`;
    window.open(googleMapsUrl, "_blank");
  };

  return (
    <div className="py-16 px-4 bg-[#FAEDCD]">
      <div className="max-w-4xl mx-auto">
        <h2 className={`${fonts.heading} text-3xl text-center mb-12`}>
          Wedding Events
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Ceremony */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className={`${fonts.heading} text-2xl text-center mb-6`}>
              The Ceremony
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 text-[#D4A373] mr-3" />
                <p className={`${fonts.subtitle} text-[#6B705C]`}>
                  {eventDetails.akad.date}
                </p>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-[#D4A373] mr-3 mt-1" />
                <div>
                  <p className={`${fonts.subtitle} text-[#6B705C] mb-2`}>
                    {eventDetails.akad.location}
                  </p>
                  <button
                    onClick={() => openGoogleMaps(eventDetails.akad.link)}
                    className="inline-flex items-center px-4 py-2 bg-[#D4A373] text-white rounded-md hover:bg-[#c49366] transition-colors duration-300 text-sm"
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className={fonts.body}>View Location</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Reception */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className={`${fonts.heading} text-2xl text-center mb-6`}>
              The Reception
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 text-[#D4A373] mr-3" />
                <p className={`${fonts.subtitle} text-[#6B705C]`}>
                  {eventDetails.reception.date}
                </p>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-[#D4A373] mr-3 mt-1" />
                <div>
                  <p className={`${fonts.subtitle} text-[#6B705C] mb-2`}>
                    {eventDetails.reception.location}
                  </p>
                  <button
                    onClick={() =>
                      openGoogleMaps(eventDetails.reception.location)
                    }
                    className="inline-flex items-center px-4 py-2 bg-[#D4A373] text-white rounded-md hover:bg-[#c49366] transition-colors duration-300 text-sm"
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
