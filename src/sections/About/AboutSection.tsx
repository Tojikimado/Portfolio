export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 md:px-8">
      <div className="section-content max-w-6xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          À propos de moi
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
          <div className="md:col-span-1 flex justify-center mb-8 md:mb-0">
            <div className="relative w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden border-2 border-gray-700 shadow-lg">
              <img
                src="/images/profile.webp"
                alt="Photo de profil"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="md:col-span-2 text-center md:text-left">
            <p className="text-base md:text-lg leading-relaxed text-gray-300">
              Développeur passionné, mon parcours <strong>m’a amené à explorer le monde du développement de jeux vidéo</strong>, où je puise mon inspiration pour créer des <strong>expériences engageantes et interactives</strong>.
              <br /><br />
              En parallèle, je conçois également des <strong>interfaces et des sites web modernes</strong> en combinant <strong>design et technique</strong>. J’aime relever de nouveaux défis, expérimenter avec <strong>des technologies variées</strong> et trouver des solutions qui allient <strong>créativité et efficacité</strong>.
            </p>
            <div className="mt-6 md:mt-8">
              <a
                href="/docs/CV_Taurand_Hugo.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-gray-700 text-white font-bold px-6 md:px-8 py-2 md:py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300"
              >
                Voir mon CV
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-16 w-full">
          <h3 className="text-2xl md:text-3xl text-white mb-6 md:mb-8 text-center">
            Stacks & Focus
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
            <div>
              <h4 className="text-lg font-bold text-gray-400 mb-4 text-center">
                Jeux Vidéo
              </h4>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="bg-gray-800 border border-gray-700 px-3 py-1 rounded-full text-sm">
                  C++ / Unreal Engine 5
                </span>
                <span className="bg-gray-800 border border-gray-700 px-3 py-1 rounded-full text-sm">
                  Blueprint
                </span>
                <span className="bg-gray-800 border border-gray-700 px-3 py-1 rounded-full text-sm">
                  C# / Unity
                </span>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold text-gray-400 mb-4 text-center">
                Web & Front-End
              </h4>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="bg-gray-800 border border-gray-700 px-3 py-1 rounded-full text-sm">
                  Vue / React / React Native
                </span>
                <span className="bg-gray-800 border border-gray-700 px-3 py-1 rounded-full text-sm">
                  JavaScript / TypeScript
                </span>
                <span className="bg-gray-800 border border-gray-700 px-3 py-1 rounded-full text-sm">
                  TailwindCSS / Bootstrap
                </span>
                <span className="bg-gray-800 border border-gray-700 px-3 py-1 rounded-full text-sm">
                  PHP
                </span>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold text-gray-400 mb-4 text-center">
                Outils & Gestion
              </h4>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="bg-gray-800 border border-gray-700 px-3 py-1 rounded-full text-sm">
                  Git / Github
                </span>
                <span className="bg-gray-800 border border-gray-700 px-3 py-1 rounded-full text-sm">
                  Suite Azure DevOps
                </span>
                <span className="bg-gray-800 border border-gray-700 px-3 py-1 rounded-full text-sm">
                  Figma
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}