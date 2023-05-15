import { Box, Flex, VStack } from '@chakra-ui/react'
import { Section } from '@components/shared'
import { history } from '@content'
import React from 'react'
import { HistoryElement } from './HistoryElement'

type HistorySectionProps = {}

export const HistorySection: React.FC<HistorySectionProps> = () => {

	return (<>

        <Section title={{
            en: 'Experience',
            fr: 'Expérience'
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
                    position='absolute' top='0' left='50%' transform='translate(-50%, 0)'
                />

                {/* Elements */}
                <Flex flexDir='column' w='100%' mt='5em'>
                    {history.map((historyElement, i) => <>
                        <HistoryElement 
                            key={i} 
                            historyElement={historyElement} 
                            inverted={i % 2 === 0} 
                        />
                    </>)}
                </Flex>
                    
            </Box>
        
        </Section>

    </>)
}