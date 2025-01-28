import { Users, Heart } from "lucide-react";
import { couple } from "../../constants/couple";
import { colors } from "../../constants/colors";
import { fonts } from "../../constants/font";

const Couple = () => {
  return (
    <div
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ backgroundColor: colors.background }}
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
          <div
            className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
            style={{ backgroundColor: `${colors.primary}15` }}
          >
            <Users
              className="w-8 h-8"
              style={{ color: colors.primary }}
            />
          </div>
          <h2
            className={`${fonts.title} text-4xl sm:text-5xl mb-4`}
            style={{ color: colors.text }}
          >
            The Happy Couple
          </h2>
          <div
            className="w-24 h-1 mx-auto mb-8"
            style={{ backgroundColor: colors.primary }}
          ></div>
          <p 
            className={`${fonts.subtitle} text-lg sm:text-xl max-w-2xl mx-auto`}
            style={{ color: colors.textLight }}
          >
            Together, we share a love story that continues to unfold with each passing day.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center relative">
          {/* Connecting Heart */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block">
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center bg-white shadow-xl transform rotate-12 hover:rotate-45 transition-all duration-500"
              style={{ backgroundColor: colors.background }}
            >
              <Heart 
                className="w-8 h-8" 
                style={{ color: colors.primary }}
                fill={colors.primary}
              />
            </div>
          </div>

          {/* Groom */}
          <div 
            className="bg-white p-8 rounded-2xl shadow-xl transform hover:-translate-y-2 transition-all duration-300"
            style={{ backgroundColor: colors.background }}
          >
            <div className="aspect-[3/4] rounded-xl overflow-hidden mb-8 shadow-lg">
              <div className="w-full h-full relative group">
                <img
                  src={couple.groom.image}
                  alt={couple.groom.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            <div className="text-center space-y-4">
              <h3
                className={`${fonts.title} text-2xl sm:text-3xl`}
                style={{ color: colors.primary }}
              >
                {couple.groom.name}
              </h3>
              <p
                className={`${fonts.subtitle} text-lg opacity-75`}
                style={{ color: colors.textLight }}
              >
                {couple.groom.birthPlaceDate}
              </p>
              <div className="pt-4 space-y-2">
                <p
                  className={`${fonts.subtitle} text-sm uppercase tracking-wider`}
                  style={{ color: colors.textLight }}
                >
                  Son of
                </p>
                <p
                  className={`${fonts.title} text-lg`}
                  style={{ color: colors.primary }}
                >
                  {couple.groom.fatherName}
                </p>
                <p
                  className={`${fonts.title} text-lg`}
                  style={{ color: colors.primary }}
                >
                  & {couple.groom.motherName}
                </p>
              </div>
            </div>
          </div>

          {/* Bride */}
          <div 
            className="bg-white p-8 rounded-2xl shadow-xl transform hover:-translate-y-2 transition-all duration-300"
            style={{ backgroundColor: colors.background }}
          >
            <div className="aspect-[3/4] rounded-xl overflow-hidden mb-8 shadow-lg">
              <div className="w-full h-full relative group">
                <img
                  src={couple.bride.image}
                  alt={couple.bride.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            <div className="text-center space-y-4">
              <h3
                className={`${fonts.title} text-2xl sm:text-3xl`}
                style={{ color: colors.primary }}
              >
                {couple.bride.name}
              </h3>
              <p
                className={`${fonts.subtitle} text-lg opacity-75`}
                style={{ color: colors.textLight }}
              >
                {couple.bride.birthPlaceDate}
              </p>
              <div className="pt-4 space-y-2">
                <p
                  className={`${fonts.subtitle} text-sm uppercase tracking-wider`}
                  style={{ color: colors.textLight }}
                >
                  Daughter of
                </p>
                <p
                  className={`${fonts.title} text-lg`}
                  style={{ color: colors.primary }}
                >
                  {couple.bride.fatherName}
                </p>
                <p
                  className={`${fonts.title} text-lg`}
                  style={{ color: colors.primary }}
                >
                  & {couple.bride.motherName}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Couple;
