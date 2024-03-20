import { useContext } from "react";
import { LanguageContext } from "../../../app";

export function ExperienceContainer() {
  const { language } = useContext(LanguageContext);

  return (
    <div className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-between mx-auto gap-10">
      <div className="w-full lg:w-[588px] space-y-5 lg:space-y-10 ">
        <h2 className="text-zinc-100 font-bold text-3xl lg:text-4xl">
          {language ? "Experience" : "Experiência"}
        </h2>
        <p className="text-text-secondary text-2xl">
          {language
            ? "Self-taught in front-end development since 2020, currently focused on development with React and Next.js, alongside building REST APIs with Node.js."
            : "Estudo desenvolvimento front-end desde 2020, atualmente com foco em React e Next.js, também trabalho na construção de APIs REST com Node.js."}
        </p>
      </div>

      <div className="w-full lg:w-96 space-y-5 lg:space-y-10 ">
        <h2 className="text-zinc-100 font-bold text-3xl lg:text-4xl">
          {language ? "Education" : "Educação"}
        </h2>
        <p className="text-text-secondary text-2xl ">
          {language
            ? "Associate Degree in Systems Analysis and Development - Universidade Tiradentes"
            : "Graduação em Análise e Desenvolvimento de Sistemas - Universidade Tiradentes"}
          🎓
        </p>
      </div>

      <div className="w-full lg:w-96 space-y-5 lg:space-y-10 ">
        <h2 className="text-zinc-100 font-bold text-3xl lg:text-4xl">
          {language ? "Languages" : "Idiomas"}
        </h2>
        <p className="text-text-secondary text-2xl">
          🇺🇸 {language ? "English" : "Inglês"}
        </p>
        <p className="text-text-secondary text-2xl">
          🇧🇷 {language ? "Portuguese" : "Português"}
        </p>
      </div>
    </div>
  );
}
