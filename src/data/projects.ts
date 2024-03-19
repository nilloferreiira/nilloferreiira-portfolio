import { ProjectProps } from "../components/main/projects/project-card";

export function getProjects() {
  const projects: ProjectProps[] = [
    {
      project: {
        id: 1,
        title: "Read.ED",
        description: "Your personal online library!",
        imgSrc:
          "https://github.com/nilloferreiira/readed/raw/main/src/assets/readmeimg.png",
        url: "https://readed.vercel.app/",
      },
    },
    {
      project: {
        id: 2,
        title: "Type Quotes",
        description:
          "Enhance your typing skills while diving into philosophy with the quotes from this app!",
        imgSrc:
          "https://github.com/nilloferreiira/type-quotes/raw/main/public/assets/readmeimg.png",
        url: "https://type-quotes.vercel.app/",
      },
    },
    {
      project: {
        id: 3,
        title: "AI movie",
        description: "Choose your next movie using AI",
        imgSrc:
          "https://github.com/nilloferreiira/ai-movie/blob/main/public/assets/readmeimg.png?raw=true",
        url: "https://ai-movie-nilloferreiira.vercel.app/",
      },
    },
    {
      project: {
        id: 4,
        title: "Expert Notes",
        description: "An notes application with React",
        imgSrc:
          "https://github.com/nilloferreiira/NLW-Expert/raw/master/public/readmeimg.png",
        url: "https://expert-notes-nilloferreiira.vercel.app/",
      },
    },
    {
      project: {
        id: 5,
        title: "Spotify UI clone",
        description: "Spotify ui clone",
        imgSrc:
          "https://github.com/nilloferreiira/Spotify-clone/raw/main/public/assets/readmeimg.png",
        url: "https://spotify-clone-opal-ten.vercel.app/",
      },
    },
  ];

  return { projects };
}
