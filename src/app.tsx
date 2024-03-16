import { Header } from "./components/header/header";
import { ExperienceContainer } from "./components/main/experience/experience-container";

export default function App() {
  return (
    <div className="px-4 py-6 lg:p-24 mx-auto w-full space-y-20">
      <Header />
      <main className="lg:p-10 w-full flex items-center justify-between gap-5">
        <ExperienceContainer />
      </main>
    </div>
  );
}
