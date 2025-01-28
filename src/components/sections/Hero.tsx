import { couple } from "../../constants/couple";
import { fonts } from "../../constants/font";
import { colors } from "../../constants/colors";
import Countdown from "./Countdown";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000); // Start animations after cover fade-out

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div
        className={`absolute inset-0 bg-cover bg-center bg-fixed transform scale-105 transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundImage: "url('/images/hero-bg.jpeg')",
          backgroundColor: colors.background,
          transform: "translateZ(0)",
        }}
      />

      {/* Dark Overlay for Better Text Visibility */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Additional Gradient Overlay */}
      <div className="absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Decorative Top Element */}

          {/* Main Title */}
          <div className="max-w-4xl mx-auto mb-8">
            <h2
              className={`${
                fonts.subtitle
              } text-lg sm:text-xl mb-4 tracking-widest text-white transition-all duration-1000 delay-700 transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              THE WEDDING CELEBRATION OF
            </h2>

            <h1
              className={`${
                fonts.title
              } text-6xl sm:text-6xl md:text-7xl mt-10 mb-8 leading-tight text-white transition-all duration-1000 delay-800 transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              <span
                className={`block sm:inline hover:opacity-80 transition-all duration-1000 delay-900 transform ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
              >
                {couple.groom.name.split(" ")[0]}
              </span>
              <span
                className={`block sm:inline-block mx-4 text-3xl sm:text-5xl animate-pulse text-white/90 transition-all duration-1000 delay-1000 transform ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
              >
                &
              </span>
              <span
                className={`block sm:inline hover:opacity-80 transition-all duration-1000 delay-1100 transform ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
              >
                {couple.bride.name.split(" ")[0]}
              </span>
            </h1>
          </div>

          {/* Countdown Timer */}
          <div>
            <Countdown />
          </div>
        </div>
      </div>

      {/* Decorative Bottom Fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: `linear-gradient(to top, rgba(0,0,0,0.8), transparent)`,
        }}
      />
    </div>
  );
};

export default Hero;
