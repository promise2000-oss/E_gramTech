import { Link } from "react-router-dom";
import { Facebook, Linkedin, Send, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Our Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <footer className="bg-navy text-primary-foreground pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 md:gap-10 mb-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Newsletter */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-primary-foreground/20 pt-8">
          <div className="flex items-center gap-2">
            <button className="bg-white text-[#262A97] px-4 py-2 rounded text-sm font-medium hover:bg-primary/90 transition-colors">
              Join Newsletter
            </button>
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-primary-foreground/10 border border-primary-foreground/20 rounded px-4 py-2 text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary w-48"
            />
          </div>

          {/* Copyright */}
          <p className="text-primary-foreground/60 text-sm">
            © 2026 BB. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/p/DS_bE8oiGpR/?utm_source=ig_web_copy_link"
              className="w-8 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-primary/80 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://x.com/E_gramTech"
              className="w-8 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-primary/80 transition-colors"
              aria-label="LinkedIn"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-primary/80 transition-colors"
              aria-label="Twitter"
            >
              <Send className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
