import { useState, useEffect } from "react";
import { Send, Heart, Users, MessageCircle } from "lucide-react";
import { fonts } from "../../constants/font";
import { colors } from "../../constants/colors";
import { supabase } from "../../lib/supabase";
import { RSVPMessages } from "./RSVPMessages";

const MAX_MESSAGE_LENGTH = 200;

export const RSVP = () => {
  const [formData, setFormData] = useState({
    name: "",
    attending: "yes",
    number_of_guests: 1,
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const toParam = urlParams.get("to");

    if (toParam) {
      const decodedName = decodeURIComponent(toParam);
      setFormData((prev) => ({
        ...prev,
        name: decodedName,
      }));
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const { error } = await supabase.from("rsvp_demo_02").insert([
        {
          name: formData.name,
          attending: formData.attending,
          number_of_guests: formData.number_of_guests,
          message: formData.message,
          is_visible: true,
        },
      ]);

      if (error) throw error;

      setSubmitStatus({
        type: "success",
        message: "Thank you for your RSVP!",
      });

      if (formData.attending === "yes") {
        setFormData((prev) => ({
          ...prev,
          message: "",
          number_of_guests: 1,
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          message: "",
          number_of_guests: 0,
        }));
      }
    } catch (error) {
      console.error("Error submitting RSVP:", error);
      setSubmitStatus({
        type: "error",
        message: "Failed to submit RSVP. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const message = e.target.value;
    if (message.length <= MAX_MESSAGE_LENGTH) {
      setFormData({ ...formData, message });
    }
  };

  return (
    <>
      <div
        className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{ backgroundColor: colors.secondary }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/images/pattern.png')",
              backgroundRepeat: "repeat",
              opacity: 0.1,
            }}
          />
        </div>

        <div className="max-w-3xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div
              className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
              style={{ backgroundColor: `${colors.primary}15` }}
            >
              <Send className="w-8 h-8" style={{ color: colors.primary }} />
            </div>
            <h2
              className={`${fonts.title} text-4xl sm:text-5xl mb-4`}
              style={{ color: colors.text }}
            >
              RSVP
            </h2>
            <div
              className="w-24 h-1 mx-auto"
              style={{ backgroundColor: colors.primary }}
            ></div>
          </div>

          {submitStatus.type && (
            <div
              className={`mb-8 p-6 rounded-2xl text-center transform transition-all duration-300 ${
                submitStatus.type === "success"
                  ? "bg-green-50 text-green-800 shadow-green-100"
                  : "bg-red-50 text-red-800 shadow-red-100"
              }`}
            >
              <div className="flex items-center justify-center space-x-2">
                {submitStatus.type === "success" ? (
                  <Heart className="w-5 h-5" />
                ) : (
                  <MessageCircle className="w-5 h-5" />
                )}
                <span className={`${fonts.subtitle} text-lg`}>
                  {submitStatus.message}
                </span>
              </div>
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-xl p-8 space-y-8"
            style={{ backgroundColor: colors.background }}
          >
            <div>
              <label
                htmlFor="name"
                className={`${fonts.subtitle} block text-base mb-2`}
                style={{ color: colors.textLight }}
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
                className={`${fonts.body} w-full px-6 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:shadow-lg`}
                style={{
                  borderColor: colors.accent,
                  color: colors.text,
                  backgroundColor: "white",
                }}
                required
                disabled={isSubmitting}
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label
                className={`${fonts.subtitle} block text-base mb-2`}
                style={{ color: colors.textLight }}
              >
                Will you attend?
              </label>
              <select
                value={formData.attending}
                onChange={(e) =>
                  setFormData({ ...formData, attending: e.target.value })
                }
                className={`${fonts.body} w-full px-6 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:shadow-lg`}
                style={{
                  borderColor: colors.accent,
                  color: colors.text,
                  backgroundColor: "white",
                }}
                disabled={isSubmitting}
              >
                <option value="yes">Yes, I will attend</option>
                <option value="no">No, I cannot attend</option>
              </select>
            </div>

            {formData.attending === "yes" && (
              <div>
                <label
                  htmlFor="guests"
                  className={`${fonts.subtitle} block text-base mb-2`}
                  style={{ color: colors.textLight }}
                >
                  Number of Guests
                </label>
                <div className="relative">
                  <div className="absolute left-6 top-1/2 transform -translate-y-1/2">
                    <Users
                      className="w-5 h-5"
                      style={{ color: colors.primary }}
                    />
                  </div>
                  <input
                    type="number"
                    id="guests"
                    min="1"
                    max="5"
                    value={formData.number_of_guests}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        number_of_guests: parseInt(e.target.value),
                      })
                    }
                    className={`${fonts.body} w-full pl-16 pr-6 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:shadow-lg`}
                    style={{
                      borderColor: colors.accent,
                      color: colors.text,
                      backgroundColor: "white",
                    }}
                    disabled={isSubmitting}
                  />
                </div>
              </div>
            )}

            <div>
              <label
                htmlFor="message"
                className={`${fonts.subtitle} block text-base mb-2`}
                style={{ color: colors.textLight }}
              >
                Message for the Couple
              </label>
              <div className="relative">
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleMessageChange}
                  maxLength={MAX_MESSAGE_LENGTH}
                  placeholder="Write your wishes for the couple..."
                  className={`${fonts.body} w-full px-6 py-4 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:shadow-lg`}
                  style={{
                    borderColor: colors.accent,
                    color: colors.text,
                    backgroundColor: "white",
                  }}
                  disabled={isSubmitting}
                ></textarea>
                <div
                  className="absolute bottom-3 right-4 text-sm px-2 py-1 rounded-full"
                  style={{
                    backgroundColor: `${colors.primary}15`,
                    color: colors.primary,
                  }}
                >
                  {formData.message.length}/{MAX_MESSAGE_LENGTH}
                </div>
              </div>
            </div>

            <button
              type="submit"
              className={`${fonts.body} w-full py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2`}
              style={{
                backgroundColor: colors.primary,
                color: "white",
              }}
              disabled={isSubmitting}
            >
              <Send className="w-5 h-5" />
              <span>{isSubmitting ? "Sending..." : "Send RSVP"}</span>
            </button>
          </form>
        </div>
      </div>

      {/* Display RSVP Messages */}
      <RSVPMessages />
    </>
  );
};
