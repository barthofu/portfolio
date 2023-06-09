import { Type } from './types'

export enum Mastery {
    Beginner,
    Intermediate,
    Advanced,
}

export const technologies: Content.Technology[] = [
    {
        id: 'react',
        name: 'React',
        type: Type.Library,
        icon: 'react',
        url: 'https://react.dev/',
        mastery: Mastery.Advanced,
    },
    {
        id: 'typescript',
        name: 'TypeScript',
        type: Type.Language,
        icon: 'typescript',
        url: 'https://typescriptlang.org/',
        mastery: Mastery.Advanced,
    },
    {
        id: 'javascript',
        name: 'JavaScript',
        type: Type.Language,
        icon: 'javascript',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        mastery: Mastery.Advanced,
    },
    {
        id: 'nodejs',
        name: 'Node.js',
        type: Type.Framework,
        icon: 'nodejs',
        url: 'https://nodejs.org/',
        mastery: Mastery.Advanced,
    },
    {
        id: 'springboot',
        name: 'Spring Boot',
        type: Type.Framework,
        icon: 'spring',
        url: 'https://spring.io/projects/spring-boot',
        mastery: Mastery.Intermediate,
    },
    {
        id: 'java',
        name: 'Java',
        type: Type.Language,
        icon: 'java',
        url: 'https://java.com/',
        mastery: Mastery.Intermediate,
    },
    {
        id: 'php',
        name: 'PHP',
        type: Type.Language,
        icon: 'php',
        url: 'https://php.net/',
        mastery: Mastery.Intermediate,
    },
    {
        id: 'symfony',
        name: 'Symfony',
        type: Type.Framework,
        icon: 'symfony not-colored',
        url: 'https://symfony.com/',
        mastery: Mastery.Intermediate,
    },
    {
        id: 'mysql',
        name: 'MySQL',
        type: Type.Database,
        icon: 'mysql',
        url: 'https://mysql.com/',
        mastery: Mastery.Advanced,
    },
    {
        id: 'postgresql',
        name: 'PostgreSQL',
        type: Type.Database,
        icon: 'postgresql',
        url: 'https://postgresql.org/',
        mastery: Mastery.Advanced,
    },
    {
        id: 'mongodb',
        name: 'MongoDB',
        type: Type.Database,
        icon: 'mongodb',
        url: 'https://mongodb.com/',
        mastery: Mastery.Intermediate,
    },
    {
        id: 'docker',
        name: 'Docker',
        type: Type.Devops,
        icon: 'docker',
        url: 'https://docker.com/',
        mastery: Mastery.Advanced,
    },
    {
        id: 'markdown',
        name: 'Markdown',
        type: Type.Language,
        icon: 'markdown',
        url: 'https://daringfireball.net/projects/markdown/',
        mastery: Mastery.Advanced,
    },
    {
        id: 'html',
        name: 'HTML',
        type: Type.Language,
        icon: 'html5',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
        mastery: Mastery.Advanced,
    },
    {
        id: 'css',
        name: 'CSS',
        type: Type.Language,
        icon: 'css3',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
        mastery: Mastery.Advanced,
    },
    {
        id: 'sass',
        name: 'Sass',
        type: Type.Language,
        icon: 'sass',
        url: 'https://sass-lang.com/',
        mastery: Mastery.Advanced,
    },
    {
        id: 'python',
        name: 'Python',
        type: Type.Language,
        icon: 'python',
        url: 'https://python.org/',
        mastery: Mastery.Beginner,
    },
    {
        id: 'csharp',
        name: 'C#', 
        type: Type.Language,
        icon: 'csharp',
        url: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
        mastery: Mastery.Beginner,
    },
    {
        id: 'c',
        name: 'C',
        type: Type.Language,
        icon: 'c',
        url: 'https://en.wikipedia.org/wiki/C_(programming_language)',
        mastery: Mastery.Beginner,
    },
    {
        id: 'rust',
        name: 'Rust',
        type: Type.Language,
        icon: 'rust',
        url: 'https://rust-lang.org/',
        mastery: Mastery.Intermediate,
    },
    {
        id: 'bash',
        name: 'Bash',
        type: Type.Language,
        icon: 'bash',
        url: 'https://gnu.org/software/bash/',
        mastery: Mastery.Intermediate,
    },
    {
        id: 'powershell',
        name: 'PowerShell',
        type: Type.Language,
        icon: 'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_powershell_icon_130243.png',
        url: 'https://learn.microsoft.com/fr-fr/powershell/scripting/overview?view=powershell-7.3',
        mastery: Mastery.Beginner,
    },
    {
        id: 'go',
        name: 'Go',
        type: Type.Language,
        icon: 'go',
        url: 'https://golang.org/',
        mastery: Mastery.Beginner,
    },
    {
        id: 'git',
        name: 'Git',
        type: Type.Tool,
        icon: 'git',
        url: 'https://git-scm.com/',
        mastery: Mastery.Advanced,
    },
    {
        id: 'github',
        name: 'GitHub',
        type: Type.Tool,
        icon: 'github not-colored',
        url: 'https://github.com/',
        mastery: Mastery.Advanced,
    },
    {
        id: 'gitlab',
        name: 'GitLab',
        type: Type.Tool,
        icon: 'gitlab',
        url: 'https://gitlab.com/',
        mastery: Mastery.Advanced,
    },
    {
        id: 'android-studio',
        name: 'Android Studio',
        type: Type.Tool,
        icon: 'androidstudio',
        url: 'https://developer.android.com/studio',
        mastery: Mastery.Beginner,
    },
    {
        id: 'jetbrains',
        name: 'JetBrains',
        type: Type.Tool,
        icon: 'jetbrains',
        url: 'https://jetbrains.com/',
        mastery: Mastery.Intermediate,
    },
    {
        id: 'vsc',
        name: 'Visual Studio Code',
        type: Type.Tool,
        icon: 'vscode',
        url: 'https://code.visualstudio.com/',
        mastery: Mastery.Advanced,
    },
    {
        id: 'postman',
        name: 'Postman',
        type: Type.Tool,
        icon: 'https://img.uxwing.com/wp-content/themes/uxwing/download/brands-social-media/postman-icon.png',
        url: 'https://postman.com/',
        mastery: Mastery.Advanced,
    },
    {
        id: 'unity',
        name: 'Unity',
        type: Type.Tool,
        icon: 'unity',
        url: 'https://unity.com/',
        mastery: Mastery.Beginner,
    },
    {
        id: 'linux',
        name: 'Linux',
        type: Type.Tool,
        icon: 'linux',
        url: 'https://fr.wikipedia.org/wiki/Linux',
        mastery: Mastery.Advanced,
    },
    {
        id: 'windows',
        name: 'Windows',
        type: Type.Tool,
        icon: 'windows8',
        url: 'https://windows.com/',
        mastery: Mastery.Advanced,
    },
    {
        id: 'seo',
        name: 'SEO',
        type: Type.Tool,
        icon: 'https://www.freeiconspng.com/thumbs/seo-icon-png/search-engine-optimization-icon-7.png',
        url: 'https://en.wikipedia.org/wiki/Search_engine_optimization',
        mastery: Mastery.Beginner,
    },
    {
        id: 'express',
        name: 'Express',
        type: Type.Library,
        icon: 'express',
        url: 'https://expressjs.com/',
        mastery: Mastery.Intermediate,
    },
    {
        id: 'fastify',
        name: 'Fastify',
        type: Type.Library,
        icon: 'https://www.svgrepo.com/show/306030/fastify.svg',
        url: 'https://fastify.io/',
        mastery: Mastery.Intermediate,
    },
    {
        id: 'vite',
        name: 'Vite',
        type: Type.Library,
        icon: 'https://www.svgrepo.com/show/374167/vite.svg',
        url: 'https://vitejs.dev/',
        mastery: Mastery.Intermediate,
    },
    {
        id: 'nextjs',
        name: 'Next.js',
        type: Type.Framework,
        icon: 'nextjs',
        url: 'https://nextjs.org/',
        mastery: Mastery.Advanced,
    },
    {
        id: 'trpc',
        name: 'tRPC',
        type: Type.Library,
        icon: 'https://trpc.io/img/logo.svg',
        url: 'https://trpc.io/',
        mastery: Mastery.Advanced,
    },
    {
        id: 'gatsby',
        name: 'Gatsby',
        type: Type.Framework,
        icon: 'gatsby',
        url: 'https://gatsbyjs.com/',
        mastery: Mastery.Intermediate,
    },
    {
        id: 'angular',
        name: 'Angular',
        type: Type.Framework,
        icon: 'angularjs',
        url: 'https://angular.io/',
        mastery: Mastery.Intermediate,
    },
    {
        id: 'astro',
        name: 'Astro',
        type: Type.Framework,
        icon: 'https://bestofjs.org/logos/astro.dark.svg',
        url: 'https://astro.build/',
        mastery: Mastery.Beginner,
    },
    {
        id: 'strapi',
        name: 'Strapi',
        type: Type.Tool,
        icon: 'https://static-00.iconduck.com/assets.00/strapi-icon-512x505-3hl7a1v3.png',
        url: 'https://strapi.io/',
        mastery: Mastery.Advanced,
    },
    {
        id: 'photoshop',
        name: 'Photoshop',
        type: Type.Tool,
        icon: 'photoshop',
        url: 'https://adobe.com/products/photoshop.html',
        mastery: Mastery.Intermediate,
    },
    {
        id: 'premiere-pro',
        name: 'Premiere Pro',
        type: Type.Tool,
        icon: 'premierepro',
        url: 'https://adobe.com/products/premiere.html',
        mastery: Mastery.Intermediate,
    },
    {
        id: 'figma',
        name: 'Figma',
        type: Type.Tool,
        icon: 'figma',
        url: 'https://figma.com/',
        mastery: Mastery.Beginner,
    },
    {
        id: 'rocket',
        name: 'Rocket.rs',
        type: Type.Library,
        icon: 'https://www.iconpacks.net/icons/1/free-rocket-launch-icon-1190-thumb.png',
        url: 'https://rocket.rs/',
        mastery: Mastery.Intermediate,
    },
    {
        id: 'storybook',
        name: 'Storybook',
        type: Type.Tool,
        icon: 'storybook',
        url: 'https://storybook.js.org/',
        mastery: Mastery.Intermediate,
    },
    {
        id: 'svelte',
        name: 'Svelte',
        type: Type.Framework,
        icon: 'svelte',
        url: 'https://svelte.dev/',
        mastery: Mastery.Beginner,
    },
    {
        id: 'ansible',
        name: 'Ansible',
        type: Type.Devops,
        icon: 'ansible not-colored',
        url: 'https://ansible.com/',
        mastery: Mastery.Beginner,
    },
    {
        id: 'azure',
        name: 'Azure',
        type: Type.Devops,
        icon: 'azure',
        url: 'https://azure.microsoft.com/',
        mastery: Mastery.Intermediate,
    },
    {
        id: 'terraform',
        name: 'Terraform',
        type: Type.Devops,
        icon: 'terraform',
        url: 'https://terraform.io/',
        mastery: Mastery.Beginner,
    },
    {
        id: 'chakra-ui',
        name: 'Chakra UI',
        type: Type.Library,
        icon: 'https://www.coffeeclass.io/logos/chakra-ui.png',
        url: 'https://chakra-ui.com/',
        mastery: Mastery.Advanced,
    },
    {
        id: 'prisma',
        name: 'Prisma',
        type: Type.Library,
        icon: 'https://plugins.jetbrains.com/files/14282/146547/icon/pluginIcon.png',
        url: 'https://prisma.io/',
        mastery: Mastery.Intermediate,
    },
    {
        id: 'vitest',
        name: 'Vitest',
        type: Type.Library,
        icon: 'https://seeklogo.com/images/V/vitest-logo-9ADDA575A5-seeklogo.com.png',
        url: 'https://vitest.netlify.app/',
        mastery: Mastery.Intermediate,
    },
    {
        id: 'mikro-orm',
        name: 'MikroORM',
        type: Type.Library,
        icon: 'https://avatars.githubusercontent.com/u/54766168?s=200&v=4',
        url: 'https://mikro-orm.io/',
        mastery: Mastery.Advanced,
    },
    {
        id: 'diesel',
        name: 'Diesel',
        type: Type.Library,
        icon: 'https://global.discourse-cdn.com/standard10/uploads/diesel/original/1X/945720760e2734f43b77244049b92ff32f226923.png',
        url: 'https://diesel.rs/',
        mastery: Mastery.Intermediate,
    },
    {
        id: 'discordjs',
        name: 'Discord.js',
        type: Type.Library,
        icon: 'https://media.discordapp.net/attachments/554783275915280404/1118564168631599104/image-removebg-preview.png?width=532&height=532',
        url: 'https://discord.js.org/',
        mastery: Mastery.Advanced,
    },
    {
        id: 'kafka',
        name: 'Kafka',
        type: Type.Library,
        icon: 'https://assets.confluent.io/m/674be3c67bab5343/webimage-icon-kafka-light-SVG',
        url: 'https://kafka.apache.org/',
        hidden: true
    },
    {
        id: 'serverless',
        name: 'Serverless',
        type: Type.Library,
        icon: 'https://www.vectorlogo.zone/logos/serverless/serverless-icon.svg',
        url: 'https://serverless.com/',
        mastery: Mastery.Intermediate,
    },
    {
        id: 'nx',
        name: 'Nx',
        type: Type.Tool,
        icon: 'https://ultimatecourses.com/assets/category/nx-6c132a35ad2a671dd3cf042dbbc4e1d941a3c52971b01c9e332b4300dba07df4.svg',
        url: 'https://nx.dev/',
        mastery: Mastery.Intermediate,
    },
    {
        id: 'kotlin',
        name: 'Kotlin',
        type: Type.Language,
        icon: 'https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg',
        url: 'https://kotlinlang.org/',
        mastery: Mastery.Beginner,
    }
]