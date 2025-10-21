import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiItchdotio } from "react-icons/si";
import { useForm, ValidationError } from '@formspree/react';
import { useState, useEffect } from "react";

export default function ContactSection() {
  const [state, handleSubmit] = useForm("xwprjaqv");
  const [toast, setToast] = useState<{ type: "success" | "error"; message: string } | null>(null);

  useEffect(() => {
    if (state.succeeded) {
      setToast({ type: "success", message: "Merci pour votre message !" });
    } else if (state.errors) {
      setToast({ type: "error", message: "Une erreur est survenue, veuillez réessayer." });
    }
  }, [state.succeeded, state.errors]);

  useEffect(() => {
  if (!toast) return;

  const timer1 = setTimeout(() => {
    const toastEl = document.querySelector('.toast');
    if (toastEl) toastEl.classList.add('fade-out');
  }, 3500);

  const timer2 = setTimeout(() => setToast(null), 4000);

  return () => {
    clearTimeout(timer1);
    clearTimeout(timer2);
  };
}, [toast]);


  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-4 md:px-8 relative">
      <div className="section-content w-full max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Contact
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Colonne gauche */}
          <div className="flex flex-col gap-8 text-center md:text-left">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Parlons de votre projet</h3>
              <p className="text-gray-400">
                Je suis ouvert aux nouvelles opportunités et collaborations. N&apos;hésitez pas à me contacter.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-gray-300">Hugo Taurand</h4>
              <a href="mailto:hugo.taurand@hotmail.com" className="text-white hover:underline">
                hugo.taurand@hotmail.com
              </a>
            </div>

            <div className="flex justify-center md:justify-start gap-4">
              <a href="https://www.linkedin.com/in/hugo-taurand/" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-2xl" title="LinkedIn"><FaLinkedin /></a>
              <a href="https://github.com/Tojikimado" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-2xl" title="GitHub"><FaGithub /></a>
              <a href="https://tojikimado.itch.io/" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-2xl" title="itch.io"><SiItchdotio /></a>
            </div>
          </div>

          {/* Colonne droite */}
          <form id="contact-form" className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Nom</label>
              <input type="text" id="name" name="name" required className="form-input" />
              <ValidationError prefix="Nom" field="name" errors={state.errors} />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
              <input type="email" id="email" name="email" required className="form-input" />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Sujet</label>
              <select id="subject" name="subject" required className="form-select">
                <option>Opportunité professionnelle</option>
                <option>Projet freelance</option>
                <option>Collaboration</option>
                <option>Question générale</option>
                <option>Autre</option>
              </select>
              <ValidationError prefix="Sujet" field="subject" errors={state.errors} />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
              <textarea id="message" name="message" rows={4} required className="form-textarea" />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            <button type="submit" disabled={state.submitting}
              className="w-full bg-white text-black font-bold py-3 px-4 rounded-lg hover:bg-gray-200 transition-all duration-300 mt-4 cursor-pointer">
              Envoyer
            </button>
          </form>
        </div>
      </div>

      {toast && (
        <div className="toast fixed top-8 right-8 z-50">
          <div className={`
            px-4 py-2 rounded-xl shadow-lg text-white text-sm
            ${toast.type === "success" ? "bg-green-600" : "bg-red-600"}
            flex flex-col
          `}>
            {toast.message}
            <div className="h-1 bg-white/50 rounded mt-2 overflow-hidden">
              <div className="h-1 bg-white rounded origin-left animate-toast-progress" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}