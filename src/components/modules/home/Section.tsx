import { Box, Heading } from '@chakra-ui/react'
import { extractLocalizedString } from '@core/utils/functions'
import { useRouter } from 'next/router'
import React from 'react'

type SectionProps = {
    title: LocalizedString
    children: React.ReactNode
}

export const Section: React.FC<SectionProps> = (props) => {

    const { locale } = useRouter()

	return (<>
        <Box as='section'
            display='flex'
            flexDirection='column'
            alignItems={{ base: 'center', md: 'flex-start' }}
            gap='1rem'
            width='100%'
            pb='6rem'
        >
            <Heading as='h2' 
                size='2xl' mb='20px'
            >
                { extractLocalizedString(props.title, locale) }
            </Heading>

            { props.children }
        </Box>
    </>)
}