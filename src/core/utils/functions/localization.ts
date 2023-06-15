import nextConfig from 'next.config'
import { locales, type Locale, defaultLocale } from '@content'

export const extractLocalizedString = (content: LocalizedString, locale: string | undefined): string => {

    if (typeof content === 'string') return content
    else {

        if (!locale) locale = defaultLocale
        return content[locale as Locale] || ''
    }
}

export const extractLocalizedStrings = (content: LocalizedString<true>, locale: string | undefined): string[] => {

    if (Array.isArray(content)) return content
    else {

        if (!locale) locale = defaultLocale
        return content[locale as Locale] || []
    }
}

export const getLocalizedPathSlugs = () => {
    return locales.map(locale => ({
        params: {
            locale
        }
    }))
}