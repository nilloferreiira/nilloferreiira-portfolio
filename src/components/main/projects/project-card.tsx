import { useContext } from "react";
import { LanguageContext } from "../../../app";

export interface ProjectProps {
    project: {
        id: number,
        title: string,
        descriptionBR: string
        descriptionUS: string,
        imgSrc: string,
        url: string,
    }
}

export function ProjectCard({project}: ProjectProps) {
  const { language } = useContext(LanguageContext);

  return (
    <a 
        href={project.url}
        target="_blank"
        className="w-full bg-bg rounded-xl overflow-hidden hover:bg-bg/60 transition-all cursor-pointer">
      <img src={project.imgSrc} alt="project-image" />
      
      {/* text container  */}
      <div className="p-4 space-y-4">
        <h3 className="text-zinc-100 font-semibold text-2xl">{project.title}</h3>
        <p className="text-text-secondary text-md lg:text-xl">
           {}
          {language ? project.descriptionUS : project.descriptionBR }

        </p>
      </div>
    </a>
  );
}
