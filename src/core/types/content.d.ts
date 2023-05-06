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
    tags: import('@content').Tag[]
    technologies?: Technology['id'][]
    imageUrl?: string
    githubUrl?: string
    demoUrl?: string
}