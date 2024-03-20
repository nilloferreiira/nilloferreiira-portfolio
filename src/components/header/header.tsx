import { EnvelopeSimple } from "@phosphor-icons/react";
import { Links } from "./link";
import { useContext } from "react";
import { LanguageContext } from "../../app";

export function Header() {
  const { language } = useContext(LanguageContext);

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
          <h1 className="text-4xl lg:text-5xl text-zinc-100 font-semibold  sm-mx-auto text-center lg:text-left">
            {language ? "Hi I'm Danillo" : "Olá! Eu sou o Danillo"}

            <span>&#128075;</span>
          </h1>
          <div className="p-2">
            <h2
              className={`
                ${language ? "text-2xl" : "text-xl"}
                 lg:text-4xl 
                text-text-secondary 
                tracking-widest whitespace-nowrap	
                overflow-hidden 
                border-r-2 border-text-secondary 
                animate-typing
                `}
            >
              {language ? "Software Developer" : "Desenvolvedor de Software"}
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
            {language ? 'Contact me' : 'Me contate'} <EnvelopeSimple size={20} weight="bold" />
          </a>
        </div>
      </div>
    </header>
  );
}
