import { Box, Heading } from '@chakra-ui/react'
import { useLocale } from '@core/hooks/useLocale'
import { extractLocalizedString } from '@core/utils/functions'
import React from 'react'
import slugify from 'slugify'

type SectionProps = {
    title: LocalizedString
    children: React.ReactNode
}

export const Section: React.FC<SectionProps> = (props) => {

    const locale = useLocale()

	return (<>
        <Box as='section'
            id={slugify(extractLocalizedString(props.title, 'en'), {
                lower: true
            })}
            display='flex'
            flexDirection='column'
            alignItems={{ base: 'center', lg: 'flex-start' }}
            gap='1rem'
            width='100%'
            pb={{ base: '4rem', lg: '8rem' }}
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