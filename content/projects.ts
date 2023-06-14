import { Tag } from './tags'

export enum ProjectStatus {
    InProgress = 'in-progress',
    Completed = 'completed',
    OnHold = 'on-hold',
    Cancelled = 'cancelled',
}

export const projects: Content.Project[] = [
    {
        name: 'TSCord',
        description: {
            en: "This template was created to give developers a starting point for new Discord bots, so that much of the initial setup can be avoided and developers can instead focus on meaningful bot features.",
            fr: "Ce template a été créé pour donner aux développeurs un point de départ pour de nouveaux bots Discord, afin que la plupart de la configuration initiale puisse être évitée et que les développeurs puissent plutôt se concentrer sur des fonctionnalités de bot significatives.",
        },
        imageUrl: 'https://tscord.discbot.app/img/tscord-template-icon.png',
        tags: [Tag.Personal],
        status: ProjectStatus.Completed,
        year: '2022',
        technologies: ['typescript'],
        githubUrl: 'https://github.com/barthofu/tscord',
        demoUrl: 'https://tscord.discbot.app',
    },
    {
        name: 'Portfolio',
        description: {
            en: "This website was created to showcase my projects and skills. I put a lot of effort in its design.",
            fr: "Ce site web a été créé pour présenter mes projets et mes compétences. J'ai mis beaucoup d'efforts dans son design.",
        },
        imageUrl: undefined,
        tags: [Tag.Personal, Tag.Web],
        status: ProjectStatus.Completed,
        year: '2023',
        technologies: ['typescript', 'react', 'nextjs', 'chakra-ui', 'storybook'],
        githubUrl: 'https://github.com/barthofu/portfolio',
        demoUrl: 'https://bartho.dev',
    },
    {
        name: {
            en: 'BDE Info Website',
            fr: 'Site web du BDE Info',
        },
        description: {
            en: "This website was created to showcase the events, members, etc of the BDE Info of the University of Technology of Lyon 1 (Doua). I was in charge of the design and the development of the website.",
            fr: "Ce site web a été créé pour présenter les événements, les membres, etc du BDE Info de l'Université de Technologie de Lyon 1 (Doua). J'étais en charge de la conception et du développement du site web.",
        },
        imageUrl: undefined,
        tags: [Tag.Web],
        status: ProjectStatus.Completed,
        year: '2022',
        technologies: ['typescript', 'react', 'nextjs', 'strapi'],
        githubUrl: 'https://github.com/BDEInfo/bdeinfo-website',
        demoUrl: 'https://bdeinfo.org',
    },
    {
        name: 'Nautiljon Scraper',
        description: {
            en: "An unofficial scraping tool for https://nautiljon.com, a french anime and manga data website that doesn't offers any official API.",
            fr: "Un outil de scraping non officiel pour https://nautiljon.com, un site web français de données sur les animes et mangas qui n'offre aucune API officielle.",
        },
        imageUrl: 'https://cdn.discordapp.com/attachments/554783275915280404/851106254893219840/nautiljon-scraper.png',
        tags: [Tag.Web, Tag.Personal],
        status: ProjectStatus.Completed,
        year: '2020',
        technologies: ['nodejs', 'javascript'],
        githubUrl: 'https://github.com/barthofu/nautiljon-scraper',
        demoUrl: 'https://npmjs.com/package/nautiljon-scraper'
    },
    {
        name: 'Space',
        description: {
            en: "A top-view 2D space game made from scratch in Typescript following a pure ECS design pattern. I made this as my first big project in Typescript and to discover the ECS design pattern that I found really interesting.",
            fr: "Un jeu spatial 2D en vue de dessus fait à partir de zéro en Typescript suivant un modèle de conception ECS pur. J'ai fait cela comme mon premier grand projet en Typescript et pour découvrir le modèle de conception ECS que j'ai trouvé vraiment intéressant.",
        },
        imageUrl: undefined,
        tags: [Tag.Game, Tag.Personal],
        status: ProjectStatus.Completed,
        year: '2022',
        technologies: ['typescript', 'vite'],
        githubUrl: 'https://github.com/barthofu/space',
        demoUrl: undefined
    },
    
]