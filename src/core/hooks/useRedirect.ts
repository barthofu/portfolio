import { defaultLocale } from "@content"
import languageDetector from "@core/lib/languageDetector"
import { useRouter } from "next/router"
import { useEffect } from "react"

export const useRedirect = () => {

    const router = useRouter(),
          to = router.asPath

    useEffect(() => {

        let detectedLanguage = languageDetector.detect()
        if  (!detectedLanguage) detectedLanguage = defaultLocale
        
        if (to.startsWith('/' + detectedLanguage) && router.route === '/404') { // prevent endless loop
            router.replace('/' + detectedLanguage + router.route)
            return
        }
      
        languageDetector.cache?.(detectedLanguage)
        router.replace('/' + detectedLanguage + to)
    }, [])
}