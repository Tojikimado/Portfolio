import { useState, useEffect } from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

export type Project = {
  title: string;
  description: string;
  image: string;
  techs?: string[];
  link?: string;
  category: "Unreal" | "Unity";
};

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filter, setFilter] = useState<"Tous" | "Unity" | "Unreal">("Tous");

  useEffect(() => {
    fetch("/data/projects.json")
      .then((res) => res.json())
      .then((data: Project[]) => setProjects(data))
      .catch((err) =>
        console.error("Erreur lors du chargement des projets :", err)
      );
  }, []);

  const filteredProjects =
    filter === "Tous"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center px-4 md:px-8"
    >
      <div className="section-content max-w-6xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Mes Projets
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {["Tous", "Unity", "Unreal"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat as typeof filter)}
              className={`filter-btn ${filter === cat ? "active" : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="
                w-full 
                sm:w-[calc(50%-2rem)] 
                lg:w-[calc(33.333%-2rem)] 
                max-w-[400px] 
                flex flex-col
              "
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
