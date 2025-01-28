import React, { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { colors } from "../constants/colors";
import { couple } from "../constants/couple";
import { fonts } from "../constants/font";

interface CoverProps {
  onOpen: () => void;
}

const Cover: React.FC<CoverProps> = ({ onOpen }) => {
  const [guestName, setGuestName] = useState<string>("");

  useEffect(() => {
    // Get the guest name from URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const toParam = urlParams.get("to");

    if (toParam) {
      // Decode the URI component to handle spaces and special characters
      const decodedName = decodeURIComponent(toParam);
      setGuestName(decodedName);
    }
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundColor: colors.background,
        backgroundImage:
          'url("https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80")',
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative text-center text-white p-8">
        <Heart className="mx-auto mb-6 text-white w-12 h-12 animate-pulse" />
        <h1 className={`${fonts.title} text-5xl md:text-7xl mb-4`}>
          {couple.groom.name.split(" ")[0]} & {couple.bride.name.split(" ")[0]}
        </h1>
        <p className={`${fonts.subtitle} text-xl mb-8 tracking-wide`}>
          Are getting married
        </p>
        {guestName && (
          <div className="mb-8">
            <p className={`${fonts.subtitle} text-lg mb-2`}>Dear,</p>
            <h2 className={`${fonts.accent} text-3xl`}>{guestName}</h2>
          </div>
        )}
        <button
          onClick={onOpen}
          className={`${fonts.body} px-8 py-3 bg-white/20 backdrop-blur-sm border-2 border-white rounded-full
                   hover:bg-white/30 transition-all duration-300 text-white
                   transform hover:scale-105 active:scale-95`}
        >
          Open Invitation
        </button>
      </div>
    </div>
  );
};

export default Cover;
