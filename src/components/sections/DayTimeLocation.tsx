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
    <div
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ backgroundColor: colors.secondary }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/pattern.png')",
            backgroundRepeat: "repeat",
            opacity: 0.1,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2
            className={`${fonts.title} text-4xl sm:text-5xl mb-4`}
            style={{ color: colors.text }}
          >
            Wedding Events
          </h2>
          <div
            className="w-24 h-1 mx-auto"
            style={{ backgroundColor: colors.primary }}
          ></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Ceremony */}
          <div
            className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
            style={{ backgroundColor: colors.background }}
          >
            <div className="p-8">
              <h3
                className={`${fonts.title} text-2xl sm:text-3xl text-center mb-8`}
                style={{ color: colors.primary }}
              >
                The Ceremony
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${colors.primary}15` }}
                  >
                    <Calendar
                      className="w-6 h-6"
                      style={{ color: colors.primary }}
                    />
                  </div>
                  <p
                    className={`${fonts.subtitle} text-lg`}
                    style={{ color: colors.textLight }}
                  >
                    {eventDetails.akad.date}
                  </p>
                </div>

                <div className="flex items-start space-x-4">
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${colors.primary}15` }}
                  >
                    <MapPin
                      className="w-6 h-6"
                      style={{ color: colors.primary }}
                    />
                  </div>
                  <div className="flex-1">
                    <p
                      className={`${fonts.subtitle} text-lg mb-3`}
                      style={{ color: colors.textLight }}
                    >
                      {eventDetails.akad.location}
                    </p>
                    <button
                      onClick={() => openGoogleMaps(eventDetails.akad.link)}
                      className="inline-flex items-center px-6 py-3 rounded-full text-white shadow-lg transform hover:scale-105 transition-all duration-300"
                      style={{ backgroundColor: colors.primary }}
                    >
                      <MapPin className="w-5 h-5 mr-2" />
                      <span className={`${fonts.body} text-sm`}>
                        View on Maps
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Reception */}
          <div
            className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
            style={{ backgroundColor: colors.background }}
          >
            <div className="p-8">
              <h3
                className={`${fonts.title} text-2xl sm:text-3xl text-center mb-8`}
                style={{ color: colors.primary }}
              >
                The Reception
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${colors.primary}15` }}
                  >
                    <Calendar
                      className="w-6 h-6"
                      style={{ color: colors.primary }}
                    />
                  </div>
                  <p
                    className={`${fonts.subtitle} text-lg`}
                    style={{ color: colors.textLight }}
                  >
                    {eventDetails.reception.date}
                  </p>
                </div>

                <div className="flex items-start space-x-4">
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${colors.primary}15` }}
                  >
                    <MapPin
                      className="w-6 h-6"
                      style={{ color: colors.primary }}
                    />
                  </div>
                  <div className="flex-1">
                    <p
                      className={`${fonts.subtitle} text-lg mb-3`}
                      style={{ color: colors.textLight }}
                    >
                      {eventDetails.reception.location}
                    </p>
                    <button
                      onClick={() =>
                        openGoogleMaps(eventDetails.reception.link)
                      }
                      className="inline-flex items-center px-6 py-3 rounded-full text-white shadow-lg transform hover:scale-105 transition-all duration-300"
                      style={{ backgroundColor: colors.primary }}
                    >
                      <MapPin className="w-5 h-5 mr-2" />
                      <span className={`${fonts.body} text-sm`}>
                        View on Maps
                      </span>
                    </button>
                  </div>
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
