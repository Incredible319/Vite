import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import logoIconImg from "../images/bw-eye.png";
import logoLetterImg from "../images/oculus-text.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navigate = useNavigate();

  const handleNavigation = (sectionId) => {
    console.log(window.location.pathname);
    if (window.location.pathname !== "/") {
      navigate("/#" + sectionId);
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 1000);
    }
    // else {
    //   window.location.hash = sectionId;
    //   document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    // }
  };

  return (
    <nav
      className={`fixed top-0 w-full transition-all duration-300 ease-in-out z-50 ${
        hasScrolled
          ? ".bg-gray-950 shadow-lg py-2 backdrop-blur-sm"
          : "bg-gray-950"
      }`} style={{borderBottom: "black solid 1px"}}
    >
      <div className="mx-4 md:px-12 xl:px-36 py-4 flex items-center justify-between md:justify-between md:gap-10">
        <div
          className={`flex items-center text-xl font-bold text-[#0F2E2F] transition-transform duration-300 md:text-2xl ${
            hasScrolled ? "scale-120" : "scale-100"
          }`}
        >
          <a
            href="/#Hero"
            className="font-[Orbitron] text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00f2ff] to-[#2d1b55] cursor-pointer flex items-center gap-2"
          >
            <img src={logoIconImg} alt="logo icon image" className="w-8" />
            <img src={logoLetterImg} alt="logo letter image" className="w-36" />
          </a>
        </div>

        <button
          className="text-white md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className="hidden items-center space-x-2 md:flex lg:space-x-8">
          {[
            "Vision",
            "Aperture",
            "God's Eye",
            "Oculus AI",
            "Tiers",
          ].map((section) => (
            <a 
              href={"/#" + section.toLowerCase().replace(/\s+/g, "-")}
              onClick={() => handleNavigation(section)}
              key={section}
              className="font-bold text-gray-200 hover:text-gray-900 transition-all duration-300 cursor-pointer"
              style={{cursor: "pointer"}}
            >
              {section}
              {activeSection === section && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 animate-fade-in" />
              )}
            </a>
          ))}
          <Link className="font-bold text-gray-200 hover:text-gray-900 transition-all duration-300 cursor-pointer"
              style={{cursor: "pointer"}} to="/team">Team</Link>
        </div>

        {isMenuOpen && (
          <div className="absolute left-0 right-0 top-full border-t bg-[#050309]/95 backdrop-blur-sm md:hidden">
            <div className="flex flex-col space-y-6 p-6">
              {[
                "Vision",
                "Aperture",
                "God's Eye",
                "Mr. Oculus",
                "Tires",
                "Community",
                "Roadmap",
                "Socials",
              ].map((section) => (
                <a
                  onClick={() => scrollToSection(section)}
                  key={section}
                  className="font-bold text-white hover:text-gray-300 transition-all duration-300 text-xl"
                >
                  {section}
                  {activeSection === section && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 animate-fade-in" />
                  )}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
