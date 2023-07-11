namespace Content {

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
        /**
         * Either an image url or a devicon id
         */
        icon: string
        description?: LocalizedString
        url?: string
        mastery?: import('@content').Mastery
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
        pinned?: boolean
    }

    type HistoryElement = {
        title: LocalizedString
        date: LocalizedString
        description: LocalizedString
        technologies?: Technology['id'][]
    }

    type Contact = {
        title: LocalizedString
        icon: import('react-icons').IconType
        url: string
    }
}