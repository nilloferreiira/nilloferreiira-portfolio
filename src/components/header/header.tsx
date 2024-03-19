import { EnvelopeSimple } from "@phosphor-icons/react";
import { Links } from "./link";

export function Header() {
  return (
    <header className="w-full lg:w-4/5 lg:p-6 flex flex-col lg:flex-row items-center justify-center lg:items-start lg:justify-start">
      <img
        src="https://github.com/nilloferreiira.png"
        alt="foto de perfil"
        className="size-72 ring-1 rounded-full ring-zinc-200"
      />

      {/* second content  */}
      <div className="flex flex-col gap-5 items-center md:items-start justify-center">
        {/* text content  */}
        <div className="p-8">
          <h1 className="text-4xl lg:text-5xl text-zinc-100 font-semibold">
            Hi I'm Danillo
            <span>&#128075;</span> 
          </h1>
          <div className="p-2">
            <h2 
            className={`
                text-2xl lg:text-4xl 
                text-text-secondary 
                tracking-widest whitespace-nowrap	
                overflow-hidden 
                border-r-2 border-text-secondary 
                animate-[typing_6s_steps(18)_infinite] 
                animete-[blink_0.5s_step-end_infinite_alternate]
                `}>
              Software Developer
            </h2>
          </div>
        </div>

        {/* links  */}
        <div className="w-96 space-y-5">
        <Links />
        <a
          href="mailto:nilloferreiira@gmail.com"
          className="bg-shark rounded-full py-4  w-4/5 mx-auto font-bold text-zinc-100 flex items-center justify-center gap-2 hover:bg-shark/80"
        >
          Contact me <EnvelopeSimple size={20} weight="bold" />
        </a>
        </div>
      </div>
    </header>
  );
}
