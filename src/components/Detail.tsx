import React from "react";
import Hero from "./sections/Hero";
import Pray from "./sections/Pray";
import Couple from "./sections/Couple";
import DayTimeLocation from "./sections/DayTimeLocation";
import Gallery from "./sections/Gallery";
import { RSVP } from "./sections/RSVP";
import Gift from "./sections/Gift";
import History from "./sections/History";

interface DetailProps {
  isVisible: boolean;
}

const Detail: React.FC<DetailProps> = ({ isVisible }) => {
  return (
    <div
      className={`transition-all duration-700 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-12 pointer-events-none"
      }`}
    >
      <Hero />
      <Pray />
      <Couple />
      <History />
      <DayTimeLocation />
      <RSVP />
      <Gift />
      <Gallery />
    </div>
  );
};

export default Detail;
