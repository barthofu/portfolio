export enum Tag {
    Highlight = 'highlight',
    School = 'school',
    Professional = 'professional',
    Web = 'web',
    Devops = 'devops',
    Mobile = 'mobile',
    Desktop = 'desktop',
    CLI = 'cli',
    Game = 'game',
    Library = 'library',
    Other = 'other',
}

export const tags = [
    { id: Tag.Highlight, label: { en: 'Highlight', fr: 'En avant', } },
    { id: Tag.School, label: { en: 'School', fr: 'Scolaire', } },
    { id: Tag.Professional, label: { en: 'Professional', fr: 'Professionnel', } },
    { id: Tag.Web, label: 'Web' },
    { id: Tag.Devops, label: 'DevOps' },
    { id: Tag.Mobile, label: 'Mobile' },
    { id: Tag.Desktop, label: { en: 'Desktop', fr: 'Bureau', } },
    { id: Tag.CLI, label: 'CLI' },
    { id: Tag.Game, label: { en: 'Game', fr: 'Jeu', } },
    { id: Tag.Library, label: { en: 'Library', fr: 'Librairie', } },
    { id: Tag.Other, label: { en: 'Other', fr: 'Autre', } },
]