type LocalizedString<ArrayMode extends boolean = false> = {
    [key in import('@content').Locale]: ArrayMode extends false ? string : string[]
} | (ArrayMode extends false ? string : string[])
