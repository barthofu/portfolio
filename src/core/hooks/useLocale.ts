import { LocaleContext } from "@core/contexts/locale"
import { useRouter } from "next/router"
import { useContext } from "react"

export const useLocale = () => {

    const { locale } = useContext(LocaleContext)

    return locale
}