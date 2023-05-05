type Locale = 'en' | 'fr'

type LocalizedString<ArrayMode extends boolean = false> = {
    [key in Locale]: ArrayMode extends false ? string : string[]
} | (ArrayMode extends false ? string : string[])
