import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Our Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
    { name: "Contact Us", path: "/contact" },
  ];

  const headerBg = scrolled || !isHomePage
    ? "bg-[#242997] shadow-soft"
    : "bg-transparent";

  const textColor = scrolled || !isHomePage
    ? "text-foreground"
    : "text-primary-foreground";

  return (
    <header className={`fixed top-0 left-0 bg-[#242997] right-0 z-50 transition-all duration-300 ${headerBg}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex items-center">
              <img src={logo} alt="E_GramTech Logo" width={80} height={0} />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`${
                  scrolled || !isHomePage ? "nav-link-dark" : "nav-link"
                } ${location.pathname === link.path ? "font-semibold" : ""}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                scrolled || !isHomePage
                  ? "bg-[#242997] border-2 border-foreground text-foreground hover:bg-foreground hover:text-background"
                  : "bg-[#282C4B] text-white hover:bg-[#242997]/10"
              }`}
            >
              Let's Talk
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 ${textColor}`}
            aria-label="Toggle menu"
          >
            <div className={`space-y-1.5 ${isOpen ? "menu-open" : ""}`}>
              {isOpen ? (
                <X className="w-6 h-6 transition-transform duration-300" />
              ) : (
                <Menu className="w-6 h-6 transition-transform duration-300" />
              )}
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden bg-background-rounded overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 pb-6" : "max-h-0"
          } bg-blue border-t border-border rounded-b-xl `}
        >
          <nav className="flex flex-col gap-4 pt-4">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`nav-link-dark text-lg animate-fade-up`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="btn-primary text-center mt-2 animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              Let's Talk
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
