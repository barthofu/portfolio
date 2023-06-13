import '@fontsource/raleway/400.css'
import '@fontsource/peace-sans/400.css'
import '@fontsource/work-sans'
import '@fontsource/montserrat'
import '@styles/glow.scss'

import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@core/theme'

function MyApp({ Component, pageProps }: AppProps) {
	
  	return (
		<ChakraProvider theme={theme}>
			<Component {...pageProps} />
		</ChakraProvider>
	)
}

export default MyApp
