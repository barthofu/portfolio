import { Box, Container, Flex } from '@chakra-ui/react'
import { Navbar } from '@components/modules'
import { Locale } from '@content'
import { LocaleContext } from '@core/contexts/locale'
import Head from 'next/head'
import React from 'react'

type DefaultLayoutProps = {
    title: string 
    locale: Locale
    iconHref?: string
    children: React.ReactNode
}

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({ 
    title,
    locale,
    iconHref,
    children 
}) => {

	return (<>
        <Head>
			<title>{ title }</title>
            {iconHref && <link rel="icon" href={ iconHref } />}
		</Head>

        <LocaleContext.Provider value={{
            locale
        }}>

            <Box
                position='fixed' 
                top='2em' 
                left='2em'
            >
                <Navbar />
            </Box>

            <Flex justifyContent='center' px={{ base: '2rem', lg: '5rem' }}>

                <Flex
                    flexDirection='column' alignItems='center'
                    w='100%'
                    maxW='960px'
                >
                    { children }
                </Flex>
            </Flex>
        </LocaleContext.Provider>

    </>)
}