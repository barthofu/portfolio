export enum Type {
    Language = 'language',
    Framework = 'framework',
    Library = 'library',
    Database = 'database',
}

export const types = [
    { id: Type.Language, label: { en: 'Language', fr: 'Langage', } },
    { id: Type.Framework, label: 'Framework' },
    { id: Type.Library, label: { en: 'Library', fr: 'Librairie', } },
    { id: Type.Database, label: { en: 'Database', fr: 'Base de données', } },
]
