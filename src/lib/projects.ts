type Project = {
    id: number;
    name: string;
    desc: string;
    techs: string[];
    type: string;
    image: string;
    githubLink: string;
    websiteLink: string;
};

export const projects: Project[] = [
    {
        id: 1,
        name: "Socially",
        desc: "Socially is microblogging app for posting texts and images and interacting with likes and comments",
        techs: [
            "Next.js 16",
            "Tailwind v4",
            "Drizzle ORM",
            "NeonDB",
            "Clerk",
            "shadcn"            
        ],
        type: "Web Dev",
        image: "/projects/socially.png",
        githubLink: "https://github.com/AmitBiswas1402/socially-microblogging-app",
        websiteLink: "https://socially-phi-ochre.vercel.app/"
    }
]