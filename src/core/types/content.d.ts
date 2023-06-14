namespace Content {

    type Skill = {
        name: LocalizedString
        level: LocalizedString
        description: LocalizedString
    }

    enum Mastery {
        Beginner,
        Intermediate,
        Advanced,
        Expert,
    }

    type Technology = {
        /**
         * slugified version of the name
         */
        id: string 
        name: LocalizedString
        type: TechnologyType
        /**
         * Either an image url or a devicon id
         */
        icon: string
        description?: LocalizedString
        url?: string
        mastery?: Mastery
        hidden?: boolean
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
        hidden?: boolean
    }

    type HistoryElement = {
        title: LocalizedString
        date: LocalizedString
        description: LocalizedString
        technologies?: Technology['id'][]
    }
}