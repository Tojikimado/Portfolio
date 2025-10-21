type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  techs?: string[];
  link?: string;
};

export default function ProjectCard({ title, description, image, techs, link }: ProjectCardProps) {
  return (
    <div
  className="project-card flex flex-col h-full cursor-pointer overflow-hidden rounded-xl"
  onClick={() => window.open(link || '#', '_blank')}
>
  <div className="w-full h-48 md:h-60 overflow-hidden rounded-t-xl">
    <img
      src={image}
      alt={title}
      className="w-full h-full object-fill"
    />
  </div>
  <div className="p-6 flex flex-col flex-1">
    <h3 className="text-xl font-bold text-white">{title}</h3>
    <p className="text-gray-400 mt-2 flex-1">{description}</p>
    {techs && (
      <div className="flex flex-wrap gap-2 mt-4">
        {techs.map((tech, i) => (
          <span
            key={i}
            className="bg-gray-800 border border-gray-700 px-3 py-1 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    )}
  </div>
</div>

  );
}
