import { useState, useEffect } from "react";
import { Send } from "lucide-react";
import { fonts } from "../../constants/font";

export const RSVP = () => {
  const [formData, setFormData] = useState({
    name: "",
    attending: "yes",
    numberOfGuests: 1,
    message: "",
  });

  useEffect(() => {
    // Get the guest name from URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const toParam = urlParams.get("to");
    
    if (toParam) {
      // Decode the URI component and update the name in formData
      const decodedName = decodeURIComponent(toParam);
      setFormData(prev => ({
        ...prev,
        name: decodedName
      }));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="py-16 px-4 bg-[#FEFAE0]">
      <div className="max-w-2xl mx-auto">
        <Send className="mx-auto mb-6 w-8 h-8 text-[#D4A373]" />
        <h2 className={`${fonts.heading} text-3xl text-center mb-8`}>RSVP</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className={`${fonts.subtitle} block text-sm font-medium text-[#6B705C] mb-1`}
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className={`${fonts.body} w-full px-4 py-2 rounded-md border border-[#CCD5AE] focus:outline-none focus:ring-2 focus:ring-[#D4A373]`}
              required
            />
          </div>

          <div>
            <label className={`${fonts.subtitle} block text-sm font-medium text-[#6B705C] mb-1`}>
              Will you attend?
            </label>
            <select
              value={formData.attending}
              onChange={(e) =>
                setFormData({ ...formData, attending: e.target.value })
              }
              className={`${fonts.body} w-full px-4 py-2 rounded-md border border-[#CCD5AE] focus:outline-none focus:ring-2 focus:ring-[#D4A373]`}
            >
              <option value="yes">Yes, I will attend</option>
              <option value="no">No, I cannot attend</option>
            </select>
          </div>

          {formData.attending === "yes" && (
            <div>
              <label
                htmlFor="guests"
                className={`${fonts.subtitle} block text-sm font-medium text-[#6B705C] mb-1`}
              >
                Number of Guests
              </label>
              <input
                type="number"
                id="guests"
                min="1"
                max="5"
                value={formData.numberOfGuests}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    numberOfGuests: parseInt(e.target.value),
                  })
                }
                className={`${fonts.body} w-full px-4 py-2 rounded-md border border-[#CCD5AE] focus:outline-none focus:ring-2 focus:ring-[#D4A373]`}
              />
            </div>
          )}

          <div>
            <label
              htmlFor="message"
              className={`${fonts.subtitle} block text-sm font-medium text-[#6B705C] mb-1`}
            >
              Message for the Couple
            </label>
            <textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className={`${fonts.body} w-full px-4 py-2 rounded-md border border-[#CCD5AE] focus:outline-none focus:ring-2 focus:ring-[#D4A373]`}
            ></textarea>
          </div>

          <button
            type="submit"
            className={`${fonts.body} w-full py-3 bg-[#D4A373] text-white rounded-md hover:bg-[#c49366] transition-colors duration-300`}
          >
            Send RSVP
          </button>
        </form>
      </div>
    </div>
  );
};
