import { useState, useEffect } from "react";
import { Send } from "lucide-react";
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
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const { error } = await supabase
        .from('rsvp_demo')
        .insert([
          {
            name: formData.name,
            attending: formData.attending,
            number_of_guests: formData.number_of_guests,
            message: formData.message,
            is_visible: true
          }
        ]);

      if (error) throw error;

      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your RSVP!'
      });

      // Reset form if submission was successful
      if (formData.attending === 'yes') {
        setFormData(prev => ({
          ...prev,
          message: '',
          number_of_guests: 1
        }));
      } else {
        setFormData(prev => ({
          ...prev,
          message: '',
          number_of_guests: 0
        }));
      }

    } catch (error) {
      console.error('Error submitting RSVP:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Failed to submit RSVP. Please try again.'
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
      <div className="py-16 px-4" style={{ backgroundColor: colors.secondary }}>
        <div className="max-w-2xl mx-auto">
          <Send className="mx-auto mb-6 w-8 h-8" style={{ color: colors.primary }} />
          <h2 
            className={`${fonts.heading} text-3xl text-center mb-8`}
            style={{ color: colors.text }}
          >
            RSVP
          </h2>

          {submitStatus.type && (
            <div 
              className={`mb-6 p-4 rounded-md text-center ${
                submitStatus.type === 'success' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className={`${fonts.subtitle} block text-sm font-medium mb-1`}
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
                className={`${fonts.body} w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2`}
                style={{ 
                  borderColor: colors.accent,
                  color: colors.text,
                  backgroundColor: 'white'
                }}
                required
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label 
                className={`${fonts.subtitle} block text-sm font-medium mb-1`}
                style={{ color: colors.textLight }}
              >
                Will you attend?
              </label>
              <select
                value={formData.attending}
                onChange={(e) =>
                  setFormData({ ...formData, attending: e.target.value })
                }
                className={`${fonts.body} w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2`}
                style={{ 
                  borderColor: colors.accent,
                  color: colors.text,
                  backgroundColor: 'white'
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
                  className={`${fonts.subtitle} block text-sm font-medium mb-1`}
                  style={{ color: colors.textLight }}
                >
                  Number of Guests
                </label>
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
                  className={`${fonts.body} w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2`}
                  style={{ 
                    borderColor: colors.accent,
                    color: colors.text,
                    backgroundColor: 'white'
                  }}
                  disabled={isSubmitting}
                />
              </div>
            )}

            <div>
              <label
                htmlFor="message"
                className={`${fonts.subtitle} block text-sm font-medium mb-1`}
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
                  className={`${fonts.body} w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2`}
                  style={{ 
                    borderColor: colors.accent,
                    color: colors.text,
                    backgroundColor: 'white'
                  }}
                  disabled={isSubmitting}
                ></textarea>
                <div 
                  className="absolute bottom-2 right-2 text-xs"
                  style={{ color: colors.textLight }}
                >
                  {formData.message.length}/{MAX_MESSAGE_LENGTH}
                </div>
              </div>
            </div>

            <button
              type="submit"
              className={`${fonts.body} w-full py-3 rounded-md transition-opacity duration-300 disabled:opacity-50`}
              style={{ 
                backgroundColor: colors.primary,
                color: 'white'
              }}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send RSVP'}
            </button>
          </form>
        </div>
      </div>
      
      {/* Display RSVP Messages */}
      <RSVPMessages />
    </>
  );
};
