import languageDetector from 'next-language-detector'

import { defaultLocale, locales } from '@content'

export default languageDetector({
  supportedLngs: locales,
  fallbackLng: defaultLocale
})