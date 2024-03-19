import { createContext, useState } from "react";
import { Header } from "./components/header/header";
import { ExperienceContainer } from "./components/main/experience/experience-container";
import { ProjectContainer } from "./components/main/projects/project-container";
import { SwitchLanguage } from "./components/switch-language/switch";

export default function App() {
  const LanguageContext = createContext({});

  // const useLanguage = () => useContext(LanguageContext);

  const [language, setLanguage] = useState<boolean>(false);

  function toggleLanguage() {
    setLanguage(!language);
  }

  return (
    <LanguageContext.Provider value={language}>
      <div className="px-4 py-6 lg:p-24 mx-auto w-full space-y-20">
        <SwitchLanguage toggleLanguage={toggleLanguage} value={language} />
        <Header />
        <main className="lg:p-10 w-full flex flex-col items-start justify-center gap-20 ">
          <ExperienceContainer />
          <ProjectContainer />
        </main>
      </div>
    </LanguageContext.Provider>
  );
}
