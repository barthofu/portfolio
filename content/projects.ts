import { Tag } from './tags'

export enum Status {
    InProgress = 'in-progress',
    Completed = 'completed',
    OnHold = 'on-hold',
    Cancelled = 'cancelled',
    Maintenance = 'maintenance',
}

export const statuses = [
    { id: Status.InProgress, label: { en: 'In progress', fr: 'En cours', } },
    { id: Status.Completed, label: { en: 'Completed', fr: 'Terminé', } },
    { id: Status.OnHold, label: { en: 'On hold', fr: 'En pause', } },
    { id: Status.Cancelled, label: { en: 'Cancelled', fr: 'Annulé', } },
    { id: Status.Maintenance, label: { en: 'In maintenance', fr: 'En maintenance', } },
]

export const projects: Content.Project[] = [
    {
        name: 'TSCord',
        description: {
            en: "Discord bot template created to give developers a starting point, so that much of the initial setup can be avoided and developers can instead focus on meaningful bot features. 250+ stars on GitHub.",
            fr: "Template de bot Discord qui a été créé pour donner aux développeurs un point de départ, afin que la plupart de la configuration initiale puisse être évitée et que les développeurs puissent plutôt se concentrer sur des fonctionnalités de bot significatives. 250+ étoiles sur GitHub.",
        },
        imageUrl: 'https://tscord.bartho.dev/img/tscord-template-icon.png',
        tags: [Tag.Highlight, Tag.Other],
        status: Status.Maintenance,
        year: '2022',
        technologies: ['typescript', 'discordjs', 'mikro-orm'],
        githubUrl: 'https://github.com/barthofu/tscord',
        demoUrl: 'https://tscord.bartho.dev',
    },
    {
        name: 'Portfolio',
        description: {
            en: "This website was created to showcase my projects and skills. I put a lot of effort in its design.",
            fr: "Ce site web a été créé pour présenter mes projets et mes compétences. J'ai mis beaucoup d'efforts dans son design.",
        },
        imageUrl: '/assets/projects/portfolio.mp4',
        tags: [Tag.Highlight, Tag.Web],
        status: Status.Completed,
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
        imageUrl: '/assets/projects/bdeinfo.mp4',
        tags: [Tag.Web],
        status: Status.Completed,
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
        imageUrl: '/assets/projects/nautiljon-scraper.png',
        tags: [Tag.Web],
        status: Status.Completed,
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
        imageUrl: '/assets/projects/space.mp4',
        tags: [Tag.Game, Tag.Highlight],
        status: Status.Cancelled,
        year: '2022',
        technologies: ['typescript', 'vite'],
        githubUrl: 'https://github.com/barthofu/space',
        demoUrl: undefined
    },
    {
        name: 'Soundome',
        description: {
            fr: "Soundome est un outil auto-hébergé qui centralise, télécharge, tagge et organise automatiquement votre bibliothèque musicale à partir de multiples sources (Spotify, SoundCloud, YouTube…). Il gère les métadonnées, évite les doublons, conserve la trace des sources et propose une interface web pour les corrections manuelles.",
            en: "Soundome is a self-hosted tool that centralizes, downloads, tags, and automatically organizes your music library from multiple sources (Spotify, SoundCloud, YouTube…). It handles metadata, prevents duplicates, keeps track of original sources, and provides a web interface for manual corrections.",
        },
        imageUrl: '/assets/projects/soundome.png',
        tags: [Tag.Highlight, Tag.Other],
        status: Status.InProgress,
        year: '2025',
        technologies: ['rust', 'rocket', 'diesel'],
        githubUrl: 'https://github.com/barthofu/soundome',
    },
    {
        name: 'Installoop',
        description: {
            en: "Recursively install npm dependencies from multiple package.json",
            fr: "Installe récursivement les dépendances npm à partir de plusieurs package.json",
        },
        imageUrl: undefined,
        tags: [Tag.Library],
        status: Status.Completed,
        year: '2022',
        technologies: ['typescript', 'nodejs'],
        githubUrl: 'https://github.com/barthofu/installoop',
        demoUrl: 'https://npmjs.com/package/installoop'
    },
    {
        name: 'Cucumber',
        description: {
            en: "Cucumber is a dating application specialized in speed dating, which offers a fast and efficient dating experience for users. It is a group project carried out as part of the DevOps Professional License at IUT Lyon 1. The objective was to create a native Java application with at least these characteristics: a database, a client/server architecture and sockets.",
            fr: "Cucumber est une application de rencontre spécialisée dans le speed dating, qui offre une expérience de rencontre rapide et efficace pour les utilisateurs. Il s'agit d'un projet de groupe réalisé dans le cadre de la Licence Pro DevOps à l'IUT Lyon 1. L'objectif était de réaliser une application native en Java comportant ces caractéristiques au minimum: une base de données, une architecture client/serveur et des sockets",
        },
        imageUrl: undefined,
        tags: [Tag.School, Tag.Desktop],
        status: Status.Completed,
        year: '2023',
        technologies: ['java'],
        githubUrl: 'https://github.com/barthofu/cucumber',
        demoUrl: undefined
    },
    {
        name: 'Nuit de l\'Info 2022',
        description: {
            en: "The Nuit de l'Info is a national french hackathon that takes place every year in December. The objective was to create a web application in nearly 12 hours (the entire night in fact) on a given theme. The theme of this year was \"Sex prevention trough play\".",
            fr: "La Nuit de l'Info est un hackathon français national qui a lieu chaque année en décembre. L'objectif était de créer une application web en près de 12 heures (toute la nuit en fait) sur un thème donné. Le thème de cette année était \"La prévention du sexe par le jeu\".",
        },
        imageUrl: undefined,
        tags: [Tag.School, Tag.Web],
        status: Status.Completed,
        year: '2022',
        technologies: ['typescript', 'react', 'nextjs', 'strapi'],
        githubUrl: 'https://github.com/barthofu/ndi2022',
        demoUrl: undefined
    },
    {
        name: 'Jarvis',
        description: {
            en: "A personal voice assistant for Linux, inspired by Jarvis in Iron Man. Developed in Python with modular, extensible architecture in mind.",
            fr: "Un assistant vocal personnel pour Linux, inspiré de Jarvis dans Iron Man. Développé en Python avec en tête une architecture modulaire et extensible.",
        },
        imageUrl: undefined,
        tags: [Tag.School],
        status: Status.Completed,
        year: '2022',
        technologies: ['python'],
        githubUrl: 'https://github.com/barthofu/jarvis',
        demoUrl: undefined
    },
    {
        name: 'GeoCarbu',
        description: {
            en: "GeoCarbu is an Android application that allows you to find the cheapest gas stations around you. It was developed as part of a group project at IUT Lyon 1.",
            fr: "GeoCarbu est une application mobile Android qui permet de trouver les stations essence les moins chères autour de vous. Elle a été développée dans le cadre d'un projet de groupe à l'IUT Lyon 1.",
        },
        imageUrl: undefined,
        tags: [Tag.School, Tag.Mobile],
        status: Status.Completed,
        year: '2022',
        technologies: ['kotlin', 'android-studio'],
        githubUrl: 'https://github.com/barthofu/geocarbu',
        demoUrl: undefined
    },
    {
        name: 'HTTP',
        description: {
            en: "Very basic HTTP server written from scratch in C, which can return HTML, PNG and JPG files located in the website folder via classic HTTP GET requests.",
            fr: "Serveur HTTP très basique écrit from scratch en C, qui peut renvoyer des fichiers HTML, PNG et JPG situés dans le dossier website via des requêtes HTTP GET classiques.",
        },
        imageUrl: undefined,
        tags: [Tag.School],
        status: Status.Completed,
        year: '2022',
        technologies: ['c'],
        githubUrl: 'https://github.com/barthofu/http',
        demoUrl: undefined
    },
    {
        name: 'Jom & Terry',
        description: {
            en: "Unity game made as part of the PTUT of the 2nd year of the DUT Informatique. It is a 3D Capture The Flag / Tower Defense type video game with so-called asymmetric gameplay, featuring a hunter trying to prevent mice from eating cheese before the end of the allotted time.",
            fr: "Jeu Unity réalisé dans le cadre du PTUT de 2ème année du DUT Informatique. Il s'agit d'un jeu vidéo de type Capture The Flag / Tower Défense en 3D à gameplay dit asymétrique, mettant en scène un chasseur devant empêcher des souris de manger un fromage avant la fin du temps imparti.",
        },
        imageUrl: undefined,
        tags: [Tag.School, Tag.Game],
        status: Status.Completed,
        year: '2022',
        technologies: ['csharp', 'unity'],
        githubUrl: 'https://github.com/barthofu/jom-et-terry',
        demoUrl: undefined
    },
    {
        name: 'Darkest Dungeon',
        description: {
            en: "Game using maze generation and resolution made for a High School project. Your goal is simple: escape from this labyrinthine dungeon while being plunged into an intense darkness! In addition to this darkness, many enemies roam the area and magical temples conferring various bonuses and penalties are scattered everywhere.",
            fr: "Jeu utilisant la génération et la résolution de labyrinthe réalisé pour un projet de Lycée. Votre objectif est simple : échappez-vous de ce donjon labyrinthique tout en étant plongé dans une intense pénombre ! En plus de cette obscurité, de nombreux ennemis rôdent dans les parages et des temples magiques conférant divers bonus et malus sont disséminés un peu partout.",
        },
        imageUrl: undefined,
        tags: [Tag.School, Tag.Game],
        status: Status.Completed,
        year: '2020',
        technologies: ['python'],
        githubUrl: 'https://github.com/barthofu/darkest-dungeon',
        demoUrl: undefined
    },
    {
        name: 'ByeCine',
        description: {
            en: "University PHP Project to introduce us to a classic OOP MVC structure",
            fr: "Projet PHP universitaire pour nous initier à une structure MVC OOP classique",
        },
        imageUrl: undefined,
        tags: [Tag.School, Tag.Web],
        status: Status.Completed,
        year: '2021',
        technologies: ['php', 'css'],
        githubUrl: 'https://github.com/barthofu/byecine',
        demoUrl: undefined
    },
    {
        name: 'Manga Shop',
        description: {
            en: "HTML/CSS exercise for school. We had to create a shopping site without any interactivity (no JS).",
            fr: "Exercice HTML/CSS pour l'école. Nous devions créer un site marchant sans aucune interactivité (pas de JS).",
        },
        imageUrl: undefined,
        tags: [Tag.School, Tag.Web],
        status: Status.Completed,
        year: '2021',
        technologies: ['html', 'css'],
        githubUrl: 'https://github.com/barthofu/manga-shop',
        demoUrl: undefined
    },
    {
        name: 'Spawnise',
        description: {
            en: "This simple package lets you run commands on your device asynchronously using promises through the spawn function. In fact, it uses the cross-spawn library under the hood in order to have a more consistent spawn.",
            fr: "Ce package simple vous permet d\'exécuter des commandes sur votre appareil de manière asynchrone en utilisant des promesses via la fonction spawn. En fait, il utilise la bibliothèque cross-spawn sous le capot afin d\'avoir un spawn plus cohérent.",
        },
        imageUrl: undefined,
        tags: [Tag.Library],
        status: Status.Completed,
        year: '2022',
        technologies: ['typescript'],
        githubUrl: 'https://github.com/barthofu/spawnise',
        demoUrl: 'https://www.npmjs.com/package/spawnise'
    },
    {
        name: 'Mega Link Checker',
        description: {
            en: "This simple package lets you check if a mega.io link is valid or not.",
            fr: "Ce package simple vous permet de vérifier si un lien mega.io est valide ou non.",
        },
        imageUrl: undefined,
        tags: [Tag.Library],
        status: Status.Completed,
        year: '2021',
        technologies: ['javascript'],
        githubUrl: 'https://github.com/barthofu/mega-link-checker',
        demoUrl: 'https://www.npmjs.com/package/mega-link-checker'
    },
    {
        name: 'SaveQLite',
        description: {
            en: "Incremental backup system for SQLite databases written in TypeScript. With an incremental backup system, only the difference since the last snapshot is saved so we end up with a lightweight save, including multiple snapshots to rollback to any state of the database.",
            fr: "Système de sauvegarde incrémentale pour bases de données SQLite écrit en TypeScript. Avec un système de sauvegarde incrémentale, seule la différence depuis la dernière sauvegarde est sauvegardée, on se retrouve donc avec une sauvegarde légère, incluant plusieurs snapshots pour revenir à n'importe quel état de la base de données.",
        },
        imageUrl: undefined,
        tags: [Tag.Highlight, Tag.Library],
        status: Status.Completed,
        year: '2022',
        technologies: ['typescript'],
        githubUrl: 'https://github.com/barthofu/saveqlite',
        demoUrl: 'https://www.npmjs.com/package/saveqlite'
    },
    {
        name: 'RxEta',
        description: {
            en: "Reactive state management written in TypeScript with a minimal API and full power of RxJS! This is a simple store that can be used to manage state. After instantiating the store, you can either set, update or get states values, with a subscribtion system to keep track of the store changes.",
            fr: "Gestionnaire d'état réactif écrit en TypeScript avec une API minimale et toute la puissance de RxJS ! Il s'agit d'un simple store pouvant être utilisé pour gérer l'état. Après avoir instancié le store, vous pouvez soit définir, mettre à jour ou obtenir les valeurs des états, avec un système d'abonnement pour suivre les changements du store.",
        },
        imageUrl: undefined,
        tags: [Tag.Highlight, Tag.Library],
        status: Status.Completed,
        year: '2022',
        technologies: ['typescript'],
        githubUrl: 'https://github.com/barthofu/rxeta',
        demoUrl: 'https://www.npmjs.com/package/rxeta'
    },
    {
        name: 'Todoly',
        description: {
            en: "A list based todolist web app, heavily inspired from Weektodo but with a focus on: Centralized self-hosted server, Offline / sync, Cross-platform, Alarms & notifications, Archives, Multi-users, Workspaces, Widgets, Locales, etc.",
            fr: "Une application web todolist basée sur des listes, fortement inspirée de Weektodo mais avec un accent sur : Serveur auto-hébergé centralisé, Hors ligne / synchronisation, Multi-plateforme, Alarmes & notifications, Archives, Multi-utilisateurs, Espaces de travail, Widgets, Locales, etc.",
        },
        imageUrl: undefined,
        tags: [Tag.Web],
        status: Status.Cancelled,
        year: '2023',
        technologies: ['typescript', 'react', 'nextjs', 'chakra-ui', 'trpc', 'storybook', 'prisma'],
        githubUrl: 'https://github.com/barthofu/todoly',
        demoUrl: undefined
    },
    {
        name: 'Mockabase',
        description: {
            en: "A tool to intelligently generate mocked data for an entire PostgreSQL schema database",
            fr: "Un outil pour générer intelligemment des données simulées pour une base de données de schéma PostgreSQL entière",
        },
        imageUrl: undefined,
        tags: [Tag.CLI],
        status: Status.OnHold,
        year: '2023',
        technologies: ['typescript'],
        githubUrl: 'https://github.com/barthofu/mockabase',
        demoUrl: undefined
    },
    {
        name: 'NixOS Configuration',
        description: {
            en: "The declarative configuration of my NixOS daily desktop system. It is fully reproducible, Flakes based, modular and uses home-manager for user configurations.",
            fr: "La configuration déclarative de mon système de bureau quotidien NixOS. Elle est entièrement reproductible, basée sur les Flakes, modulaire et utilise home-manager pour les configurations utilisateur.",
        },
        imageUrl: '/assets/projects/nixos.webp',
        tags: [Tag.Highlight, Tag.Other],
        status: Status.InProgress,
        year: '2024',
        technologies: ['nix', 'bash'],
        githubUrl: 'https://github.com/barthofu/dotfiles',
        demoUrl: undefined
    },
    {
        name: 'Homelab',
        description: {
            en: "The declarative configuration of my whole homelab setup. It is fully reproducible and uses many tools like Packer, Pulumi, Ansible, Kubernetes, etc.",
            fr: "La configuration déclarative de mon homelab. Elle est entièrement reproductible et utilise de nombreux outils comme Packer, Pulumi, Ansible, Kubernetes, etc.",
        },
        imageUrl: "/assets/projects/homelab.webp",
        tags: [Tag.Highlight, Tag.Devops, Tag.Other],
        year: '2024',
        technologies: ['packer', 'pulumi', 'ansible', 'kubernetes', 'argocd'],
        githubUrl: 'https://github.com/barthofu/homelab',
        status: Status.InProgress,
        demoUrl: undefined
    },
    {
        name: 'Serrurerie de Lestrade',
        description: {
            fr: "Site web pour une entreprise de ferronnerie en France.",
            en: "Website for an ironwork company in France.",
        },
        imageUrl: '/assets/projects/serrureriedelestrade.png',
        tags: [Tag.Professional, Tag.Web],
        status: Status.Completed,
        year: '2024',
        technologies: ['svelte', 'typescript', 'sass'],
        githubUrl: 'https://github.com/barthofu/serrureriedelestrade',
        demoUrl: 'https://serrureriedelestrade.pages.dev'
    },
    {
        name: 'Cinestia',
        description: {
            en: "Cinestia is a booking prototype application. It is a group project carried out as part of my Master 1 at ESTIAM. The objective was to create a fullstack web application in typescript with React and Nest.js for the backend.",
            fr: "Cinestia est une application prototype de réservation. Il s'agit d'un projet de groupe réalisé dans le cadre de mon Master 1 à l'ESTIAM. L'objectif était de réaliser une application web fullstack en typescript avec React et Nest.js pour le backend.",
        },
        imageUrl: '/assets/projects/cinestia.png',
        tags: [Tag.School, Tag.Web],
        status: Status.Completed,
        year: '2023',
        technologies: ['typescript', 'react', 'nx', 'nestjs', 'prisma', 'ts-rest'],
        githubUrl: 'https://github.com/barthofu/cinestia',
        demoUrl: undefined
    },
    {
        name: 'RSoundcloud',
        description: {
            en: "RSoundcloud is a Rust client library for interacting with SoundCloud's internal (read-only) API, with no API key required. It's inspired by the Python library soundcloud-v2.",
            fr: "RSoundcloud est une bibliothèque cliente Rust pour interagir avec l’API interne de SoundCloud (en lecture seule), sans clé API. Elle s’inspire de la librairie Python soundcloud-v2.",
        },
        imageUrl: undefined,
        tags: [Tag.Highlight, Tag.Library],
        status: Status.Completed,
        year: '2025',
        technologies: ['rust'],
        githubUrl: 'https://github.com/barthofu/rsoundcloud',
        demoUrl: 'https://crates.io/crates/rsoundcloud'
    },
    {
        name: 'GoBlog',
        description: {
            en: "A simple blog engine API written in Go, with a focus on simplicity and performance. For a school project.",
            fr: "Un moteur de blog simple écrit en Go, avec un accent sur la simplicité et la performance. Pour un projet d'école.",
        },
        imageUrl: undefined,
        tags: [Tag.School],
        status: Status.Completed,
        year: '2025',
        technologies: ['go'],
        githubUrl: 'https://github.com/barthofu/goblog',
    },
    {
        name: 'Dockops',
        description: {
            en: "Scripts that provides a lightweight GitOps workflow for managing Docker Compose deployments. It automatically pulls changes from a Git repository and restarts Docker Compose services if changes are detected.",
            fr: "Scripts qui fournissent un flux de travail GitOps léger pour gérer les déploiements Docker Compose. Il tire automatiquement les modifications d'un dépôt Git et redémarre les services Docker Compose si des modifications sont détectées.",
        },
        imageUrl: undefined,
        tags: [Tag.Devops],
        status: Status.Completed,
        year: '2024',
        technologies: ['bash'],
        githubUrl: 'https://github.com/barthofu/dockops'
    },
    {
        name: 'Cron Wrapper',
        description: {
            en: "Script that acts as a wrapper for running cron jobs on Linux. It ensures proper logging, optional environment setup, and log file rotation based on configurable retention settings",
            fr: "Script qui agit comme un wrapper pour exécuter des tâches cron sur Linux. Il garantit une journalisation appropriée, une configuration d'environnement optionnelle et une rotation des fichiers de logs basée sur des paramètres de rétention configurables.",
        },
        imageUrl: undefined,
        tags: [Tag.Devops],
        status: Status.Completed,
        year: '2024',
        technologies: ['bash'],
        githubUrl: 'https://github.com/barthofu/cron-wrapper'
    }
]