import { Container, Flex } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'

type DefaultLayoutProps = {
    title: string 
    iconHref?: string
    children: React.ReactNode
}

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({ 
    title,
    iconHref,
    children 
}) => {

	return (<>
        <Head>
			<title>{ title }</title>
            <link rel="icon" href={ iconHref } />
		</Head>

        <Flex justifyContent='center' px={{ base: '2rem', md: '2rem', lg: '5rem' }} py='10rem'>

            <Flex
                flexDirection='column' alignItems='center'
                w='100%'
                maxW='960px'
            >
                { children }
            </Flex>
        </Flex>

    </>)
}