export enum Type {
    Language = 'language',
    Framework = 'framework',
    Library = 'library',
    Database = 'database',
    Devops = 'devops',
    Tool = 'tool',
}

export const types = [
    { id: Type.Language, label: { en: 'Language', fr: 'Langage', } },
    { id: Type.Framework, label: 'Framework' },
    { id: Type.Library, label: { en: 'Library', fr: 'Librairie', } },
    { id: Type.Database, label: { en: 'Database', fr: 'Base de données', } },
    { id: Type.Devops, label: 'DevOps' },
    { id: Type.Tool, label: { en: 'Tool', fr: 'Outil' } },
]
