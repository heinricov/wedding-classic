import React, { useEffect, useState } from "react";
import { Heart, Sparkles } from "lucide-react";
import { colors } from "../constants/colors";
import { couple } from "../constants/couple";
import { fonts } from "../constants/font";

interface CoverProps {
  onOpen: () => void;
}

const Cover: React.FC<CoverProps> = ({ onOpen }) => {
  const [guestName, setGuestName] = useState<string>("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const toParam = urlParams.get("to");

    if (toParam) {
      const decodedName = decodeURIComponent(toParam);
      setGuestName(decodedName);
    }

    setIsLoaded(true);
  }, []);

  const handleOpen = () => {
    setIsLeaving(true);
    setTimeout(() => {
      onOpen();
    }, 1500); // Match animation duration
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Left Panel */}
      <div
        className={`absolute inset-y-0 left-0 w-1/2 bg-cover bg-right ${
          isLeaving ? "animate-split-left" : ""
        }`}
        style={{
          backgroundColor: colors.background,
          backgroundImage: "url('/images/bride.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Right Panel */}
      <div
        className={`absolute inset-y-0 right-0 w-1/2 bg-cover bg-left ${
          isLeaving ? "animate-split-right" : ""
        }`}
        style={{
          backgroundColor: colors.background,
          backgroundImage: "url('/images/groom.jpeg')",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Floating particles effect */}
      <div
        className={`absolute inset-0 overflow-hidden ${
          isLeaving ? "opacity-0" : "opacity-100"
        } transition-opacity duration-1000`}
      >
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.3,
            }}
          >
            <Sparkles
              className="text-white"
              style={{
                width: `${Math.random() * 10 + 10}px`,
                height: `${Math.random() * 10 + 10}px`,
              }}
            />
          </div>
        ))}
      </div>

      {/* Main content */}
      <div
        className={`relative z-10 h-full flex items-center justify-center ${
          isLeaving ? "opacity-0" : "opacity-100"
        } transition-opacity duration-700`}
      >
        <div
          className={`text-center text-white p-8 transform transition-all duration-1000 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <div className="relative px-8 py-12 sm:px-12 sm:py-16">
            <div className="inline-flex items-center justify-center mb-8">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${colors.primary}20` }}
              >
                <Heart
                  className="w-8 h-8 animate-pulse"
                  style={{ color: colors.primary }}
                />
              </div>
            </div>

            <h1
              className={`${fonts.title} text-6xl sm:text-6xl md:text-7xl mt-10 mb-8 leading-tight text-white`}
            >
              <span className="block hover:opacity-80 transition-opacity duration-300">
                {couple.groom.name.split(" ")[0]}
              </span>
              <span className="block text-3xl md:text-4xl my-2 font-light opacity-80">
                &
              </span>
              <span className="block hover:opacity-80 transition-opacity duration-300">
                {couple.bride.name.split(" ")[0]}
              </span>
            </h1>

            <p
              className={`${fonts.subtitle} text-lg sm:text-xl mb-4 tracking-widest text-white`}
            >
              We're getting married
            </p>

            {guestName && (
              <div className="mb-10 transform hover:scale-105 transition-transform duration-300">
                <p className={`${fonts.subtitle} text-lg mb-2 text-white/70`}>
                  Dear,
                </p>
                <h2
                  className={`${fonts.title} text-3xl sm:text-4xl text-white`}
                >
                  {guestName}
                </h2>
              </div>
            )}

            <button
              onClick={handleOpen}
              className={`
                ${fonts.body} relative group px-10 py-4 mt-8
                overflow-hidden rounded-full border-2 border-white/30
                hover:border-white/50 transition-all duration-300
                transform hover:scale-105 active:scale-95
                bg-white/10 backdrop-blur-sm
              `}
            >
              <span className="relative inline-flex items-center text-white">
                <span className="text-lg">Open Invitation</span>
                <Heart className="w-4 h-4 ml-2 transform group-hover:scale-110 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
