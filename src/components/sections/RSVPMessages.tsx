import { useState, useEffect, useCallback } from "react";
import { MessageSquare, ChevronLeft, ChevronRight } from "lucide-react";
import { fonts } from "../../constants/font";
import { colors } from "../../constants/colors";
import { supabase, RSVPMessage } from "../../lib/supabase";

const MESSAGES_PER_PAGE = 5;

export const RSVPMessages = () => {
  const [messages, setMessages] = useState<RSVPMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalMessages, setTotalMessages] = useState(0);

  const fetchMessages = useCallback(async () => {
    try {
      // First, get the total count
      const { count, error: countError } = await supabase
        .from('rsvp_demo')
        .select('*', { count: 'exact', head: true });

      if (countError) throw countError;
      
      setTotalMessages(count || 0);

      // Then fetch the paginated data
      const { data, error } = await supabase
        .from('rsvp_demo')
        .select('*')
        .order('created_at', { ascending: false })
        .range(currentPage * MESSAGES_PER_PAGE, (currentPage + 1) * MESSAGES_PER_PAGE - 1);

      if (error) throw error;

      setMessages(data || []);
    } catch (error) {
      console.error('Error fetching messages:', error);
    } finally {
      setLoading(false);
    }
  }, [currentPage]); // Add currentPage as dependency since it's used in the function

  useEffect(() => {
    fetchMessages();
  }, [fetchMessages]); // Now fetchMessages is properly memoized

  const totalPages = Math.ceil(totalMessages / MESSAGES_PER_PAGE);

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1));
  };

  if (loading) {
    return (
      <div className="py-16 px-4" style={{ backgroundColor: colors.secondary }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className={`${fonts.subtitle}`} style={{ color: colors.textLight }}>
            Loading messages...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 px-4" style={{ backgroundColor: colors.secondary }}>
      <div className="max-w-4xl mx-auto">
        <MessageSquare 
          className="mx-auto mb-6 w-8 h-8" 
          style={{ color: colors.primary }} 
        />
        <h2 
          className={`${fonts.heading} text-3xl text-center mb-12`}
          style={{ color: colors.text }}
        >
          Messages & Wishes
        </h2>

        <div className="grid gap-6 mb-8">
          {messages.map((message) => (
            <div 
              key={message.id}
              className="p-6 rounded-lg"
              style={{ backgroundColor: colors.background }}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 
                    className={`${fonts.subtitle} text-lg font-medium mb-1`}
                    style={{ color: colors.primary }}
                  >
                    {message.name}
                  </h3>
                  <p 
                    className={`${fonts.body} text-sm`}
                    style={{ color: colors.textLight }}
                  >
                    {message.attending === 'yes' 
                      ? `Will attend with ${message.number_of_guests} guest${message.number_of_guests > 1 ? 's' : ''}`
                      : 'Unable to attend'}
                  </p>
                </div>
                <span 
                  className={`${fonts.body} text-sm`}
                  style={{ color: colors.textLight }}
                >
                  {new Date(message.created_at).toLocaleDateString()}
                </span>
              </div>
              {message.message && (
                <p 
                  className={`${fonts.body} mt-2`}
                  style={{ color: colors.text }}
                >
                  {message.message}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalMessages > MESSAGES_PER_PAGE && (
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 0}
              className="p-2 rounded-full transition-colors duration-200 disabled:opacity-50"
              style={{ 
                backgroundColor: colors.primary,
                color: 'white'
              }}
            >
              <ChevronLeft size={20} />
            </button>
            <span 
              className={`${fonts.body} text-sm`}
              style={{ color: colors.text }}
            >
              Page {currentPage + 1} of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage >= totalPages - 1}
              className="p-2 rounded-full transition-colors duration-200 disabled:opacity-50"
              style={{ 
                backgroundColor: colors.primary,
                color: 'white'
              }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
