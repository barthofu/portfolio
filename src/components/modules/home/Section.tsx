import { Box, Heading } from '@chakra-ui/react'
import React from 'react'

type SectionProps = {
    title: string
    children: React.ReactNode
}

export const Section: React.FC<SectionProps> = (props) => {

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
                { props.title }
            </Heading>

            { props.children }
        </Box>
    </>)
}