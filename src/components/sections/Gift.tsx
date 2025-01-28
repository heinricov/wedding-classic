import { useState } from "react";
import { Gift as GiftIcon, Copy, Check, Heart } from "lucide-react";
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
      
      setTimeout(() => {
        setCopySuccess((prev) => ({ ...prev, [bank]: false }));
      }, 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" 
         style={{ backgroundColor: colors.secondary }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: "url('/images/pattern.png')",
               backgroundRepeat: "repeat",
               opacity: 0.1
             }}
        />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
               style={{ backgroundColor: `${colors.primary}15` }}>
            <GiftIcon className="w-8 h-8" style={{ color: colors.primary }} />
          </div>
          <h2 className={`${fonts.title} text-4xl sm:text-5xl mb-4`}
              style={{ color: colors.text }}>
            Wedding Gift
          </h2>
          <div className="w-24 h-1 mx-auto mb-8" style={{ backgroundColor: colors.primary }}></div>
          
          <p className={`${fonts.subtitle} text-lg sm:text-xl max-w-2xl mx-auto`}
             style={{ color: colors.textLight }}>
            Your presence at our wedding is the greatest gift of all. However, if
            you wish to honor us with a gift, we have provided our bank account
            details below.
          </p>
        </div>

        <div className="grid gap-6">
          {Object.entries(couple.bankAccounts).map(([bank, account]) => (
            <div 
              key={bank}
              className="bg-white p-8 rounded-2xl shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1"
              style={{ backgroundColor: colors.background }}
            >
              <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center"
                       style={{ backgroundColor: `${colors.primary}15` }}>
                    <Heart className="w-6 h-6" style={{ color: colors.primary }} />
                  </div>
                  <div>
                    <h3 className={`${fonts.subtitle} text-xl font-medium mb-1`}
                        style={{ color: colors.primary }}>
                      {bank}
                    </h3>
                    <p className={`${fonts.body} text-lg font-mono`}
                       style={{ color: colors.text }}>
                      {account}
                    </p>
                  </div>
                </div>
                
                <button
                  onClick={() => handleCopy(account, bank)}
                  className="flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 hover:transform hover:scale-105"
                  style={{ 
                    backgroundColor: copySuccess[bank] 
                      ? '#22c55e' // Success green color
                      : colors.primary,
                    color: 'white'
                  }}
                  aria-label={`Copy ${bank} account number`}
                >
                  {copySuccess[bank] ? (
                    <>
                      <Check className="w-5 h-5" />
                      <span className={fonts.body}>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-5 h-5" />
                      <span className={fonts.body}>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className={`${fonts.body} text-center mt-8 text-sm sm:text-base`}
           style={{ color: colors.textLight }}>
          Click the copy button to copy the account number to your clipboard
        </p>
      </div>
    </div>
  );
};

export default Gift;
