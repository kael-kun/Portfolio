import React, { useState, useEffect } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollBg, setScrollBg] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setScrollBg(false);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setScrollBg(true);
      } else {
        setScrollBg(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      const navBarHeight = 120; // Adjust this value based on your actual navigation bar height
      const offset = section.offsetTop - navBarHeight;

      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });

      closeMenu(); // Close the menu after clicking a link
    }
  };

  const navbarClasses = `fixed w-full top-0 left-0 right-0 z-50 ${
    scrollBg || menuOpen ? "bg-black/90" : "bg-transparent"
  } p-4`;

  return (
    <nav className={navbarClasses}>
      <div className="flex justify-between items-center container mx-auto relative">
        <div className="text-white font-bold text-lg">Portfolio</div>
        <div className="hidden md:flex space-x-8 h-[60px] items-center">
          <a
            href="#home"
            className="text-white hover-1 font-semibold"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}>
            Home
          </a>
          <a
            href="#about"
            className="text-white hover-1 font-semibold"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#about");
            }}>
            About
          </a>
          <a
            href="#project"
            className="text-white hover-1 font-semibold"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#project");
            }}>
            Projects
          </a>
          <a
            href="#contact"
            className="text-white hover-1 font-semibold"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#contact");
            }}>
            Contacts
          </a>
          {/* Add other links with similar onClick handlers */}
        </div>
        <div className="md:hidden z-100">
          <button onClick={toggleMenu} className="text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden h-screen flex items-center justify-center flex-col gap-6 text-3xl font-medium z-100 space-y-6">
          <a
            href="#home"
            className="text-white hover-1 font-semibold"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}>
            Home
          </a>
          <a
            href="#about"
            className="text-white hover-1 font-semibold"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#about");
            }}>
            About
          </a>
          <a
            href="#project"
            className="text-white hover-1 font-semibold"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#project");
            }}>
            Projects
          </a>
          <a
            href="#contact"
            className="text-white hover-1 font-semibold"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#contact");
            }}>
            Contacts
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
