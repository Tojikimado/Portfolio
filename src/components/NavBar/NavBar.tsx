import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  // Détecte le scroll pour appliquer un fond
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll fluide vers la section
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 p-6 transition-all duration-300 ${scrolled ? "bg-black/50 backdrop-blur-md" : ""
        }`}
    >
      <div className="container mx-auto flex justify-center items-center gap-8 text-gray-400">
        <button
          onClick={() => scrollToSection("about")}
          className="hover:text-white transition-colors cursor-pointer"
        >
          À propos de moi
        </button>
        <button
          onClick={() => scrollToSection("projects")}
          className="hover:text-white transition-colors cursor-pointer"
        >
          Projets
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className="hover:text-white transition-colors cursor-pointer"
        >
          Contact
        </button>
      </div>
    </nav>
  );
}