export enum Tag {
    School = 'school',
    Personal = 'personal',
    Professional = 'professional',
    Web = 'web',
    Mobile = 'mobile',
    Desktop = 'desktop',
    Game = 'game',
    Other = 'other',
}

export const tags = [
    { id: Tag.School, label: { en: 'School', fr: 'Scolaire', } },
    { id: Tag.Personal, label: { en: 'Personal', fr: 'Personnel', } },
    { id: Tag.Professional, label: { en: 'Professional', fr: 'Professionnel', } },
    { id: Tag.Web, label: 'Web' },
    { id: Tag.Mobile, label: 'Mobile' },
    { id: Tag.Desktop, label: { en: 'Desktop', fr: 'Bureau', } },
    { id: Tag.Game, label: { en: 'Game', fr: 'Jeu', } },
    { id: Tag.Other, label: { en: 'Other', fr: 'Autre', } },
]