import nextConfig from 'next.config'

export const extractLocalizedString = (content: LocalizedString, locale: string | undefined): string => {

    if (typeof content === 'string') return content
    else {

        if (!locale) locale = nextConfig.i18n!.defaultLocale
        return content[locale as Locale] || ''
    }
}

export const extractLocalizedStrings = (content: LocalizedString<true>, locale: string | undefined): string[] => {

    if (Array.isArray(content)) return content
    else {

        if (!locale) locale = nextConfig.i18n!.defaultLocale
        return content[locale as Locale] || []
    }
}

