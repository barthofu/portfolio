import { Box, Flex, VStack } from '@chakra-ui/react'
import { Section } from '@components/shared'
import { history } from '@content'
import React from 'react'
import { HistoryElement } from './HistoryElement'
import { extractLocalizedString } from '@core/utils/functions'

type HistorySectionProps = {}

export const HistorySection: React.FC<HistorySectionProps> = () => {

    return (

        <Section title={{
            en: 'Experiences',
            fr: 'Expériences'
        }}>

            <Box
                position='relative'
                display='flex'
                w='100%'
            >

                <Box my='10em'></Box>

                {/* Line */}
                <Box
                    w='1px' h='100%'
                    bg='linear-gradient(transparent 0,rgba(255, 255, 255, 0.5) 15%,rgba(255, 255, 255, 0.5) 85%,transparent 100%)'
                    position='absolute' top='0' left={{ base: '0', lg: '50%' }} transform='translate(-50%, 0)'
                />

                {/* Elements */}
                <Flex flexDir='column' w='100%' mt='5em'>
                    {[...history].reverse().map((historyElement, index) =>
                        <HistoryElement
                            key={extractLocalizedString(historyElement.title, 'en')}
                            historyElement={historyElement}
                            inverted={index % 2 === 0}
                        />
                    )}
                </Flex>

            </Box>

        </Section>
    )
}