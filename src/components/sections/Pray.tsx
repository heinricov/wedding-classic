import { PlayIcon as PrayIcon } from "lucide-react";
import { fonts } from "../../constants/font";

const Pray = () => {
  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-2xl mx-auto text-center">
        <PrayIcon className="mx-auto mb-6 w-8 h-8 text-[#D4A373]" />
        <h2 className={`${fonts.heading} text-3xl mb-8`}>Blessing & Prayers</h2>
        <p className={`${fonts.quote} text-lg text-[#6B705C] mb-6 leading-relaxed`}>
          "Love is patient, love is kind. It does not envy, it does not boast,
          it is not proud. It does not dishonor others, it is not self-seeking,
          it is not easily angered, it keeps no record of wrongs."
        </p>
        <p className={`${fonts.accent} text-lg text-[#D4A373]`}>
          1 Corinthians 13:4-5
        </p>
      </div>
    </div>
  );
};

export default Pray;
