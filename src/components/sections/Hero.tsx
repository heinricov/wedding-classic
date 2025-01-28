import { Heart } from "lucide-react";
import { couple } from "../../constants/couple";
import { fonts, textStyles } from "../../constants/font";
import Countdown from "./Countdown";

const Hero = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&q=80")',
      }}
    >
      <div className="absolute inset-0 bg-black/30" />
      <div className="text-center text-white relative z-10">
        <Heart className="mx-auto mb-6 text-white w-12 h-12" />
        <h1 className={textStyles.heroTitle}>
          {couple.groom.name.split(" ")[0]}
          <span className="mx-4">&</span>
          {couple.bride.name.split(" ")[0]}
        </h1>
        <p className={`${fonts.subtitle} text-xl font-light`}>
          We're getting married
        </p>
        <Countdown />
      </div>
    </div>
  );
};

export default Hero;
