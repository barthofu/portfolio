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
        description: 'This template was created to give developers a starting point for new Discord bots, so that much of the initial setup can be avoided and developers can instead focus on meaningful bot features.',
        imageUrl: 'https://www.angeluriot.com/portfolio/resources/images/projects/Neural_network.webp',
        tags: [Tag.Personal],
        status: ProjectStatus.Completed,
        year: '2022',
        technologies: ['typescript'],
        githubUrl: 'https://github.com/barthofu/tscord',
        demoUrl: 'https://tscord.discbot.app',
    }
]