import { createContext, useState } from "react";
import { Header } from "./components/header/header";
import { ExperienceContainer } from "./components/main/experience/experience-container";
import { ProjectContainer } from "./components/main/projects/project-container";
import { SwitchLanguage } from "./components/switch-language/switch";

type LanguageContextProps = {
  language: boolean;
}

export const LanguageContext = createContext<LanguageContextProps>({language: false});

export default function App() {

  const [language, setLanguage] = useState<boolean>(false);

  function toggleLanguage() {
    setLanguage(!language);
  }

  return (
    <LanguageContext.Provider value={{language}}>
      <div className="px-4 py-6 lg:p-24 mx-auto w-full space-y-20 overflow-x-hidden">
         <div className="absolute right-10 md:right-20 md:-mt-10 -mb-10">
        <SwitchLanguage toggleLanguage={toggleLanguage} value={language} />
        </div>
        <Header />
        <main className="lg:p-10 w-full flex flex-col items-start justify-center gap-20 ">
          <ExperienceContainer />
          <ProjectContainer />
        </main>
      </div>
    </LanguageContext.Provider>
  );
}
