import { History as HistoryIcon } from "lucide-react";
import { fonts } from "../../constants/font";
import { colors } from "../../constants/colors";

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  image?: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    date: "June 2020",
    title: "First Meeting",
    description: "We first met at a mutual friend's gathering. A simple hello turned into a beautiful beginning.",
    image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&q=80"
  },
  {
    date: "December 2020",
    title: "First Date",
    description: "Our first official date at a cozy café. Hours felt like minutes as we got to know each other.",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80"
  },
  {
    date: "August 2021",
    title: "Becoming Official",
    description: "After months of getting to know each other, we decided to make it official and start our journey together.",
    image: "https://images.unsplash.com/photo-1529634597503-139d3726fed5?auto=format&fit=crop&q=80"
  },
  {
    date: "July 2022",
    title: "The Proposal",
    description: "Under the stars, with hearts full of love, we decided to take the next step in our journey.",
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80"
  }
];

const History = () => {
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
            opacity: 0.1
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div 
            className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
            style={{ backgroundColor: `${colors.primary}15` }}
          >
            <HistoryIcon className="w-8 h-8" style={{ color: colors.primary }} />
          </div>
          <h2 
            className={`${fonts.title} text-4xl sm:text-5xl mb-4`}
            style={{ color: colors.text }}
          >
            Our Love Story
          </h2>
          <div 
            className="w-24 h-1 mx-auto" 
            style={{ backgroundColor: colors.primary }}
          ></div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div 
            className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 hidden md:block"
            style={{ backgroundColor: colors.primary }}
          ></div>

          {/* Timeline Events */}
          <div className="space-y-12 relative">
            {timelineEvents.map((event, index) => (
              <div 
                key={event.title}
                className={`flex flex-col md:flex-row gap-8 md:gap-16 items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className="w-full md:w-1/2">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl transform hover:-translate-y-2 transition-all duration-300">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span 
                        className={`${fonts.subtitle} text-white text-lg bg-black/30 px-4 py-1 rounded-full`}
                      >
                        {event.date}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                  <div 
                    className="bg-white p-8 rounded-2xl shadow-xl transform hover:-translate-y-2 transition-all duration-300"
                    style={{ backgroundColor: colors.background }}
                  >
                    <h3 
                      className={`${fonts.title} text-2xl mb-4`}
                      style={{ color: colors.primary }}
                    >
                      {event.title}
                    </h3>
                    <p 
                      className={`${fonts.subtitle} text-lg`}
                      style={{ color: colors.textLight }}
                    >
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
