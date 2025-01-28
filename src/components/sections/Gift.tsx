import { Gift as GiftIcon } from "lucide-react";
import { couple } from "../../constants/couple";
import { fonts } from "../../constants/font";

const Gift = () => {
  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-2xl mx-auto text-center">
        <GiftIcon className="mx-auto mb-6 w-8 h-8 text-[#D4A373]" />
        <h2 className={`${fonts.heading} text-3xl mb-8`}>Wedding Gift</h2>

        <p className={`${fonts.subtitle} text-[#6B705C] mb-8`}>
          Your presence at our wedding is the greatest gift of all. However, if
          you wish to honor us with a gift, we have provided our bank account
          details below.
        </p>

        <div className="space-y-6">
          {Object.entries(couple.bankAccounts).map(([bank, account]) => (
            <div key={bank} className="bg-[#FAEDCD] p-6 rounded-lg">
              <h3 className={`${fonts.accent} text-xl mb-2`}>{bank}</h3>
              <p className={`${fonts.body} text-[#6B705C] font-mono`}>{account}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gift;
