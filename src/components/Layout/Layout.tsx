import { useEffect } from "react";
import Navbar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section"));

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollCenter = scrollTop + window.innerHeight / 2;

      sections.forEach(section => {
        const content = section.querySelector(".section-content");
        if (!content) return;

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollCenter > sectionTop && scrollCenter < sectionTop + sectionHeight) {
          content.classList.add("visible");
          content.classList.remove("pointer-events-none", "cursor-default");
        } else {
          content.classList.remove("visible");
           content.classList.add("pointer-events-none", "cursor-default");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}