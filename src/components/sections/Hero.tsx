import { couple } from "../../constants/couple";
import { fonts } from "../../constants/font";
import { colors } from "../../constants/colors";
import Countdown from "./Countdown";

const Hero = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
          backgroundColor: colors.background,
        }}
      />

      {/* Blur Overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="text-center p-8">
          <h1
            className={`${fonts.title} text-6xl md:text-7xl mb-4`}
            style={{ color: colors.primary }}
          >
            {couple.groom.name.split(" ")[0]}
            <span className="mx-4" style={{ color: colors.primary }}>
              &
            </span>
            {couple.bride.name.split(" ")[0]}
          </h1>
          {/* <p className={`${fonts.subtitle} text-4xl font-light text-white`}>
            We're getting married
          </p> */}
          <Countdown />
        </div>
      </div>
    </div>
  );
};

export default Hero;
