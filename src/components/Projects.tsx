import { ArrowUpRight } from "lucide-react";

interface ProjectProps {
  name: string;
  description: string;
  photo: string;
  tags: string[];
}

const Cards: ProjectProps[] = [
    {
        name: "ANI v 1.0",
        description: "AAAAAAAAAAA.",
       
        photo: "/ani.jpg",
        tags: ["React", "NestJS", "React Native"]
    },
        {
        name: "GITAF",
        description: "AAAAAAAAAAA.",
       
        photo: "/ani.jpg",
        tags: ["React Native", "IoT"]
    },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-[#0a0a0a] min-h-screen text-white p-10">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-4xl font-semibold mb-3">Staring Projects</h2>
          <p className="text-gray-400 text-lg">Explore two of my most important projects.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Cards.map((project, i) => (
          <div key={i} className="group cursor-pointer">
            <div className="relative aspect-video overflow-hidden rounded-sm mb-6">
              <img 
                src={project.photo} 
                alt={project.name}
                className="w-full h-full object-cover group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
              />
            </div>

            <div className="flex gap-2 mb-4">
              {project.tags.map(tag => (
                <span key={tag} className="text-[10px] tracking-widest uppercase font-bold text-gray-500 bg-[#1a1a1a] px-2 py-1 rounded-sm border border-gray-800">
                  {tag}
                </span>
              ))}
            </div>

            <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
              {project.name}
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6 line-clamp-2">
              {project.description}
            </p>

            <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-gray-300 group-hover:text-white transition-colors">
              View Project <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;