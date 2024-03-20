import { useContext } from "react";
import { LanguageContext } from "../../../app";
import { getProjects } from "../../../data/projects";
import { ProjectCard, ProjectProps } from "./project-card";

export function ProjectContainer() {
  const { projects } = getProjects();

  const { language } = useContext(LanguageContext);

  return (
    <div className="bg-shark w-full flex flex-col items-start justify-center p-4 lg:p-16 rounded-lg space-y-6 lg:space-y-12">
      <h1 className="text-zinc-100 font-semibold text-3xl">
        {language ? "My projects " : "Meus projetos "}&#x1F447;
      </h1>

      {/* projects grid  */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
        {/* project card  */}
        {projects.map((project: ProjectProps) => (
          <ProjectCard
            key={project.project.id}
            project={{
              id: project.project.id,
              title: project.project.title,
              descriptionBR: project.project.descriptionBR,
              descriptionUS: project.project.descriptionUS,
              imgSrc: project.project.imgSrc,
              url: project.project.url,
            }}
          />
        ))}
      </div>
    </div>
  );
}
