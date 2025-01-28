import { couple } from "../../constants/couple";
import { fonts } from "../../constants/font";
import { colors } from "../../constants/colors";
import Countdown from "./Countdown";

const Hero = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center relative"
      style={{
        backgroundImage: "url('/images/hero-bg.jpg')",
        backgroundColor: colors.background,
      }}
    >
      <div className="text-center p-8 relative z-10">
        <h1
          className={`${fonts.title} text-5xl md:text-7xl mb-4`}
          style={{ color: colors.primary }}
        >
          {couple.groom.name.split(" ")[0]}
          <span className="mx-4" style={{ color: colors.primary }}>
            &
          </span>
          {couple.bride.name.split(" ")[0]}
        </h1>
        <p className={`${fonts.subtitle} text-xl font-light text-white`}>
          We're getting married
        </p>
        <Countdown />
      </div>
    </div>
  );
};

export default Hero;
