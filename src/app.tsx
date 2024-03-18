import { Header } from "./components/header/header";
import { ExperienceContainer } from "./components/main/experience/experience-container";
import { ProjectContainer } from "./components/main/projects/project-container";

export default function App() {
  return (
    <div className="px-4 py-6 lg:p-24 mx-auto w-full space-y-20">
      <Header />
      <main className="lg:p-10 w-full flex flex-col items-start justify-center gap-20 ">
        <ExperienceContainer />
        <ProjectContainer />
      </main>
    </div>
  );
}
