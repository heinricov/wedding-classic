export const fonts = {
  title: "font-['Great_Vibes'] font-normal",  // For main titles/headings
  subtitle: "font-['Cormorant_Garamond'] font-light",  // For subtitles
  heading: "font-['Playfair_Display'] font-medium",  // For section headings
  body: "font-['Lato'] font-normal",  // For regular text
  accent: "font-['Dancing_Script'] font-normal",  // For special text/accents
  quote: "font-['Cormorant_Garamond'] italic",  // For quotes/special messages
} as const;

// Common text styles combinations
export const textStyles = {
  sectionTitle: `${fonts.heading} text-3xl mb-8 text-center`,
  heroTitle: `${fonts.title} text-5xl md:text-7xl mb-6`,
  coupleNames: `${fonts.accent} text-4xl mb-4`,
  dateTime: `${fonts.subtitle} text-xl`,
  bodyText: `${fonts.body} text-base`,
  quoteText: `${fonts.quote} text-lg`,
} as const;
