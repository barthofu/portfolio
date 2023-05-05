type About = LocalizedString<true>

type Skill = {
    name: LocalizedString
    level: LocalizedString
    description: LocalizedString
}

type Technology = {
    /**
     * slugified version of the name
     */
    id: string 
    name: LocalizedString
    type: TechnologyType
    imageUrl: string
    description?: LocalizedString,
}

type Project = {
    name: LocalizedString
    description: LocalizedString
    status: ProjectStatus
    year?: string
    tags: typeof import('@content').tags
    technologies?: Technology['id'][]
    imageUrl?: string
    githubUrl?: string
    demoUrl?: string
}

type ProjectStatus = {
    id: string,
    label: LocalizedString
}

enum ProjectStatus {
    InProgress = 'in-progress',
    Completed = 'completed',
    OnHold = 'on-hold',
    Cancelled = 'cancelled',
}