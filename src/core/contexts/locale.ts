import { Locale } from "@content"
import { createContext } from "react"

type LocaleContextType = {
    locale: Locale
}

export const LocaleContext = createContext<LocaleContextType>({} as LocaleContextType)