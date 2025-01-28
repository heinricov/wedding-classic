import { Users } from "lucide-react";
import { couple } from "../../constants/couple";
import { colors } from "../../constants/colors";

const Couple = () => {
  return (
    <div className="py-16 px-4" style={{ backgroundColor: colors.background }}>
      <div className="max-w-4xl mx-auto text-center">
        <Users className="mx-auto mb-6 w-8 h-8" style={{ color: colors.primary }} />
        <h2 className="text-3xl font-serif mb-12" style={{ color: colors.text }}>The Happy Couple</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Groom */}
          <div className="text-center">
            <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&q=80"
                alt="Groom"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-serif mb-2" style={{ color: colors.primary }}>{couple.groom.name}</h3>
            <p className="text-[#6B705C] mb-4" style={{ color: colors.textLight }}>{couple.groom.birthPlaceDate}</p>
            <p className="text-[#6B705C]" style={{ color: colors.textLight }}>Son of</p>
            <p className="text-[#D4A373] font-medium" style={{ color: colors.primary }}>
              {couple.groom.fatherName}
            </p>
            <p className="text-[#D4A373] font-medium" style={{ color: colors.primary }}>&</p>
            <p className="text-[#D4A373] font-medium" style={{ color: colors.primary }}>
              {couple.groom.motherName}
            </p>
          </div>

          {/* Bride */}
          <div className="text-center">
            <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
                alt="Bride"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-serif mb-2" style={{ color: colors.primary }}>{couple.bride.name}</h3>
            <p className="text-[#6B705C] mb-4" style={{ color: colors.textLight }}>{couple.bride.birthPlaceDate}</p>
            <p className="text-[#6B705C]" style={{ color: colors.textLight }}>Daughter of</p>
            <p className="text-[#D4A373] font-medium" style={{ color: colors.primary }}>
              {couple.bride.fatherName}
            </p>
            <p className="text-[#D4A373] font-medium" style={{ color: colors.primary }}>&</p>
            <p className="text-[#D4A373] font-medium" style={{ color: colors.primary }}>
              {couple.bride.motherName}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Couple;
