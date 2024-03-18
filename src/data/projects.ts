import { ProjectProps } from "../components/main/projects/project-card";

export function getProjects() {
  const projects: ProjectProps[] = [
    {
      project: {
        id: 1,
        title: "Read.ED",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        imgSrc: "https://github.com/nilloferreiira/readed/raw/main/src/assets/readmeimg.png",
        url: "https://readed.vercel.app/",
      },
    },
    {
      project: {
        id: 2,
        title: "Types Quotes",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        imgSrc: "https://github.com/nilloferreiira/type-quotes/raw/main/public/assets/readmeimg.png",
        url: "https://type-quotes.vercel.app/",
      },
    },
    {
      project: {
        id: 3,
        title: "Ai movie",
        description: "Ai movie is an application blablalbalbla",
        imgSrc: "https://github.com/nilloferreiira/ai-movie/blob/main/public/assets/readmeimg.png?raw=true",
        url: "https://ai-movie-nilloferreiira.vercel.app/",
      },
    },
    {
      project: {
        id: 4,
        title: "Expert Notes",
        description: "Expert notes is an application blablalbalbla",
        imgSrc: "https://github.com/nilloferreiira/NLW-Expert/raw/master/public/readmeimg.png",
        url: "https://expert-notes-nilloferreiira.vercel.app/",
      },
    },
    {
      project: {
        id: 5,
        title: "Spotify ui cline",
        description: "Spotify ui clone is an application blablalbalbla",
        imgSrc: "https://github.com/nilloferreiira/Spotify-clone/raw/main/public/assets/readmeimg.png",
        url: "https://spotify-clone-opal-ten.vercel.app/",
      },
    },
  ];

  return { projects };
}


