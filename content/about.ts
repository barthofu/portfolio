const calculateAge = (
    birthDate: { year: number; month: number; day: number },
    now: Date = new Date(),
): number => {
    const nowYear = now.getUTCFullYear()
    const nowMonth = now.getUTCMonth() + 1
    const nowDay = now.getUTCDate()

    let age = nowYear - birthDate.year

    const hasHadBirthdayThisYear =
        nowMonth > birthDate.month || (nowMonth === birthDate.month && nowDay >= birthDate.day)

    if (!hasHadBirthdayThisYear) age -= 1
    return age
}

const age = calculateAge({ year: 2002, month: 2, day: 1 })

export const subtitle: LocalizedString = {
    en: `${age} years old . french . devops/cloudops . software/web developer . tech lover`,
    fr: `${age} ans . français . devops . cloudops . développeur web/logiciel . passionné de tech`
}

export const about: LocalizedString<true> = {
    en: [
        `Hi 👋 I'm Bartholomé, a French IT apprentice who's fallen head over heels for this fascinating field!`,
        `Driven by an unrelenting creative spark, I’ve ventured into design, video editing, and even music, before finally finding my place in the vast world of software development.`,
        `I like to see myself as a true jack-of-all-trades in tech, with a special love for all things Web and a growing passion for DevOps and CloudOps over the years.`,
        `Welcome to my website — here you’ll find my various projects, the technologies I’ve explored, and a look at my professional journey. Enjoy your stay!`
    ],
    fr: [
        `Salut 👋 Moi c’est Bartholomé, alternant français en informatique tombé amoureux de ce domaine passionnant !`,
        `Poussé par une fièvre créative constante, j’ai exploré le design, le montage vidéo et même la musique, avant de poser mes valises dans le vaste monde du développement logiciel.`,
        `Je me définis comme un véritable touche-à-tout dans ce domaine, avec une affection particulière pour le Web (sous toutes ses formes), ainsi qu’une passion grandissante pour le DevOps et le CloudOps au fil des années.`,
        `Bienvenue sur mon site ! Vous y trouverez mes différents projets, les technologies que j’ai explorées, ainsi qu’un aperçu de mon parcours professionnel. Bonne visite !`
    ]
}
  

export const skills: Content.Skill[] = [
    {
        name: 'Front-end',
        level: {
            en: `5+ years of experience`,
            fr: `5+ ans d'expérience`,
        },
        description: {
            en: `With over five years of experience, I've built modern and responsive interfaces using technologies like React, Next.js, Angular, Svelte, TypeScript, SCSS, and HTML. I focus on creating user-centric, accessible, and visually appealing front-ends, while maintaining performance and code quality.`,
            fr: `Avec plus de cinq ans d'expérience, j'ai conçu des interfaces modernes et responsives en utilisant des technologies comme React, Next.js, Angular, Svelte, TypeScript, SCSS et HTML. Je m'attache à créer des interfaces centrées sur l'utilisateur, accessibles et visuellement soignées, tout en garantissant performance et qualité du code.`
        }
    },    
    {
        name: 'Back-end',
        level: {
            en: `+4 years of experience`,
            fr: `+4 ans d'expérience`,
        },
        description: {
            en: `I've developed and maintained robust back-end systems using technologies such as Node.js, Rust, and Python. I'm experienced with RESTful APIs, authentication flows, database modeling (PostgreSQL, MySQL), and I've built scalable architectures using Docker and cloud services.`,
            fr: `J'ai développé et maintenu des systèmes back-end robustes en utilisant des technologies telles que Node.js, Rust et Python. Je maîtrise les API REST, les flux d'authentification, la modélisation de bases de données (PostgreSQL, MySQL), et j'ai conçu des architectures évolutives avec Docker et divers services cloud.`
        }
    },
    {
        name: 'DevOps/CloudOps',
        level: {
            en: `+3 years of experience`,
            fr: `+3 ans d'expérience`,
        },
        description: {
            en: `Experienced in deploying and maintaining modern development environments using Docker, Nix, CI/CD pipelines, and infrastructure-as-code tools. I ensure scalable and reliable systems with a focus on automation.`,
            fr: `Expérimenté dans le déploiement et la maintenance d'environnements de développement modernes avec Docker, Nix, des pipelines CI/CD et des outils d'infrastructure as code. Je m'assure de la scalabilité et de la fiabilité des systèmes, en privilégiant l'automatisation.`
        }
    }
]