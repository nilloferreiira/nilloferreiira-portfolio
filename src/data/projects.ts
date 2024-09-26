import { ProjectProps } from "../components/main/projects/project-card"

export function getProjects() {
  const projects: ProjectProps[] = [
    {
      project: {
        id: 1,
        title: "Read.ED",
        descriptionBR: "Sua biblioteca pessoal online!",
        descriptionUS: "Your personal online library!",
        imgSrc:
          "https://github.com/nilloferreiira/readed/raw/main/src/assets/readmeimg.png",
        url: "https://readed.vercel.app/"
      }
    },
    {
      project: {
        id: 2,
        title: "Type Quotes",
        descriptionBR:
          "Aprimore suas habilidades de digitação enquanto mergulha na filosofia com as citações deste aplicativo",
        descriptionUS:
          "Enhance your typing skills while diving into philosophy with the quotes from this app!",

        imgSrc:
          "https://github.com/nilloferreiira/type-quotes/raw/main/public/assets/readmeimg.png",
        url: "https://type-quotes.vercel.app/"
      }
    },
    {
      project: {
        id: 3,
        title: "AI movie",
        descriptionBR: "Escolha seu próximo filme usando IA",
        descriptionUS: "Choose your next movie using AI",
        imgSrc:
          "https://github.com/nilloferreiira/ai-movie/blob/main/public/assets/readmeimg.png?raw=true",
        url: "https://ai-movie-nilloferreiira.vercel.app/"
      }
    },
    {
      project: {
        id: 4,
        title: "In.Orbit",
        descriptionBR: "Um Aplicativo de gerenciamento de metas.",
        descriptionUS: "A goal management application.",
        imgSrc:
          "https://github.com/nilloferreiira/InOrbit-web/raw/main/public/assets/readmeimg.png",
        url: "https://github.com/nilloferreiira/InOrbit-web"
      }
    },
    {
      project: {
        id: 5,
        title: "Expert Notes",
        descriptionBR: "Um aplicativo de notas feito em React",
        descriptionUS: "An notes application with React",
        imgSrc:
          "https://github.com/nilloferreiira/NLW-Expert/raw/master/public/readmeimg.png",
        url: "https://expert-notes-nilloferreiira.vercel.app/"
      }
    },
    {
      project: {
        id: 6,
        title: "Legacy Homes",
        descriptionBR: "Landing page moderna com animações.",
        descriptionUS: "Modern landing page with animations.",
        imgSrc:
          "https://github.com/nilloferreiira/Legacy-Homes/raw/main/public/assets/readmeimg.png",
        url: "https://github.com/nilloferreiira/Legacy-Homes"
      }
    },
    {
      project: {
        id: 7,
        title: "Spotify UI clone",
        descriptionBR: "Clone da interface visual do Spotify",
        descriptionUS: "Spotify ui clone",
        imgSrc:
          "https://github.com/nilloferreiira/Spotify-clone/raw/main/public/assets/readmeimg.png",
        url: "https://spotify-clone-opal-ten.vercel.app/"
      }
    }
  ]

  return { projects }
}
