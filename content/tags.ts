export enum Tag {
    Personal = 'personal',
    School = 'school',
    Professional = 'professional',
    Web = 'web',
    Mobile = 'mobile',
    Desktop = 'desktop',
    CLI = 'cli',
    Game = 'game',
    Library = 'library',
    Other = 'other',
}

export const tags = [
    { id: Tag.Personal, label: { en: 'Personal', fr: 'Personnel', } },
    { id: Tag.School, label: { en: 'School', fr: 'Scolaire', } },
    { id: Tag.Professional, label: { en: 'Professional', fr: 'Professionnel', } },
    { id: Tag.Web, label: 'Web' },
    { id: Tag.Mobile, label: 'Mobile' },
    { id: Tag.Desktop, label: { en: 'Desktop', fr: 'Bureau', } },
    { id: Tag.CLI, label: 'CLI' },
    { id: Tag.Game, label: { en: 'Game', fr: 'Jeu', } },
    { id: Tag.Library, label: { en: 'Library', fr: 'Librairie', } },
    { id: Tag.Other, label: { en: 'Other', fr: 'Autre', } },
]