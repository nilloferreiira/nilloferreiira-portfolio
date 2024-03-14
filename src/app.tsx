import { Header } from "./components/header/header";
import { ExperienceContainer } from "./components/main/experience/experience-container";

export default function App() {
  return (
    <div className="p-24 mx-auto w-full space-y-20">
      <Header />
      <main className="p-10 w-full flex items-center justify-between gap-5">
        <ExperienceContainer />
      </main>
    </div>
  );
}
