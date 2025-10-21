import { useState, useEffect } from 'react';

const Typewriter = () => {
  const [text, setText] = useState('');
  const jobs = ['Gameplay Developer', 'Front-End Developer'];

  useEffect(() => {
    let jobIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const type = () => {
      const currentJob = jobs[jobIndex];
      let newText;

      if (isDeleting) {
        newText = currentJob.substring(0, charIndex - 1);
        charIndex--;
      } else {
        newText = currentJob.substring(0, charIndex + 1);
        charIndex++;
      }

      setText(newText);

      if (!isDeleting && charIndex === currentJob.length) {
        setTimeout(() => isDeleting = true, 1000);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        jobIndex = (jobIndex + 1) % jobs.length;
      }
    };

    const typingInterval = setInterval(type, isDeleting ? 50 : 100);
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <>
      <span>{text}</span>
      <span className="blinking-cursor">|</span>
    </>
  );
};

export default function HomeSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center text-center px-4 md:px-8 lg:px-16">
      <div className="section-content visible max-w-5xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-black text-white">
          Hugo TAURAND
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mt-4 h-8">
          <Typewriter />
        </p>
        <p className="mt-8 text-gray-500 animate-pulse">
          Faites défiler pour en savoir plus
        </p>
      </div>
    </section>
  );
}