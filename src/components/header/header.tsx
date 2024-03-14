import { EnvelopeSimple } from "@phosphor-icons/react";
import { Links } from "./link";

export function Header() {
  return (
    <header className="w-4/5 flex p-6">
      <img
        src="src/assets/perfil.png"
        alt="foto de perfil"
        className="size-72 ring-1 rounded-full ring-zinc-200"
      />

      {/* second content  */}
      <div className="flex flex-col gap-5 justify-center">
        {/* text content  */}
        <div className="p-10">
          <h1 className="text-5xl text-zinc-100">Hi I'm Danillo &#128075;</h1>
          <h2 className="text-4xl text-text-secondary">Software Developer</h2>
        </div>

        {/* links  */}
        <Links />
        <a href="" target="_blank" className="bg-shark rounded-full py-4 w-4/5 mx-auto font-bold text-zinc-100 flex items-center justify-center gap-2 hover:bg-shark/80">
          Contact me <EnvelopeSimple size={20} weight="bold"/>
        </a>
      </div>
    </header>
  );
}
