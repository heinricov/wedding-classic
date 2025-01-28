import { useState } from "react";
import { Gift as GiftIcon, Copy, Check } from "lucide-react";
import { couple } from "../../constants/couple";
import { fonts } from "../../constants/font";
import { colors } from "../../constants/colors";

interface CopyState {
  [key: string]: boolean;
}

const Gift = () => {
  const [copySuccess, setCopySuccess] = useState<CopyState>({});

  const handleCopy = async (text: string, bank: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess({ ...copySuccess, [bank]: true });
      
      // Reset copy success state after 2 seconds
      setTimeout(() => {
        setCopySuccess((prev) => ({ ...prev, [bank]: false }));
      }, 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  return (
    <div className="py-16 px-4" style={{ backgroundColor: colors.secondary }}>
      <div className="max-w-2xl mx-auto text-center">
        <div className="relative">
          <div 
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div 
              className="w-full"
              style={{ 
                borderTop: `1px solid ${colors.accent}` 
              }}
            />
          </div>
          <div className="relative flex justify-center">
            <div 
              className="px-4 rounded-full"
              style={{ backgroundColor: colors.secondary }}
            >
              <GiftIcon 
                className="w-8 h-8" 
                style={{ color: colors.primary }} 
              />
            </div>
          </div>
        </div>

        <h2 
          className={`${fonts.heading} text-3xl mt-8 mb-4`}
          style={{ color: colors.text }}
        >
          Wedding Gift
        </h2>

        <p 
          className={`${fonts.subtitle} mb-12 max-w-lg mx-auto`}
          style={{ color: colors.textLight }}
        >
          Your presence at our wedding is the greatest gift of all. However, if
          you wish to honor us with a gift, we have provided our bank account
          details below.
        </p>

        <div className="grid gap-6">
          {Object.entries(couple.bankAccounts).map(([bank, account]) => (
            <div 
              key={bank}
              className="p-6 rounded-lg transition-all duration-300 hover:transform hover:scale-[1.02]"
              style={{ 
                backgroundColor: colors.background,
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
              }}
            >
              <div className="flex flex-col items-center space-y-3">
                <h3 
                  className={`${fonts.subtitle} text-xl font-medium`}
                  style={{ color: colors.primary }}
                >
                  {bank}
                </h3>
                <div className="flex items-center justify-center space-x-3">
                  <p 
                    className={`${fonts.body} text-lg font-mono`}
                    style={{ color: colors.text }}
                  >
                    {account}
                  </p>
                  <button
                    onClick={() => handleCopy(account, bank)}
                    className="p-2 rounded-full transition-colors duration-200 hover:opacity-80"
                    style={{ backgroundColor: colors.primary }}
                    aria-label={`Copy ${bank} account number`}
                  >
                    {copySuccess[bank] ? (
                      <Check className="w-4 h-4 text-white" />
                    ) : (
                      <Copy className="w-4 h-4 text-white" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p 
          className={`${fonts.body} text-sm mt-8`}
          style={{ color: colors.textLight }}
        >
          Click the copy button to copy the account number
        </p>
      </div>
    </div>
  );
};

export default Gift;
