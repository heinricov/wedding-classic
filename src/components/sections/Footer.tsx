import { Instagram, Facebook, Twitter, Mail, ArrowUpRight } from "lucide-react";
import { fonts } from "../../constants/font";
import { colors } from "../../constants/colors";

const socialLinks = [
  {
    icon: Instagram,
    href: "https://instagram.com/vertical",
    label: "Instagram",
  },
  {
    icon: Facebook,
    href: "https://facebook.com/vertical",
    label: "Facebook",
  },
  {
    icon: Twitter,
    href: "https://twitter.com/vertical",
    label: "Twitter",
  },
  {
    icon: Mail,
    href: "mailto:info@vertical.com",
    label: "Email",
  },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="py-8 px-4 mt-auto"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="text-center md:text-left">
            <a href="https://vertical-iota.vercel.app/">
              <div className="flex items-center">
                <ArrowUpRight size={40} style={{ color: colors.primary }} />
                <h2
                  className={`text-3xl font-bold mb-2`}
                  style={{ color: colors.primary }}
                >
                  Vertical
                </h2>
              </div>
            </a>
            <p
              className={`${fonts.body} text-sm`}
              style={{ color: colors.textLight }}
            >
              Digital Wedding Invitation
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full transition-transform duration-200 hover:scale-110"
                style={{ backgroundColor: colors.primary }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" style={{ color: "white" }} />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div
          className="my-6 h-px w-full"
          style={{ backgroundColor: colors.accent }}
        />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div>
            <p
              className={`${fonts.body} text-sm`}
              style={{ color: colors.textLight }}
            >
              © {currentYear} Vertical. All rights reserved.
            </p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-4">
            <a
              href="#"
              className={`${fonts.body} text-sm hover:underline`}
              style={{ color: colors.textLight }}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className={`${fonts.body} text-sm hover:underline`}
              style={{ color: colors.textLight }}
            >
              Terms of Service
            </a>
            <a
              href="https://vertical-iota.vercel.app/contact"
              className={`${fonts.body} text-sm hover:underline`}
              style={{ color: colors.textLight }}
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Company Info */}
        <div className="mt-6 text-center">
          <p
            className={`${fonts.body} text-xs`}
            style={{ color: colors.textLight }}
          >
            Made with ❤️ by Vertical Innovation Technology
          </p>
          <p
            className={`${fonts.body} text-xs mt-1`}
            style={{ color: colors.textLight }}
          >
            Jl. Raya Bekasi No. 123, Bekasi Timur, Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
};
