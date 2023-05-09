import { Box, Circle, VStack } from '@chakra-ui/react'
import { Section } from '@components/shared'
import { history } from '@content'
import React from 'react'
import { HistoryElement } from './HistoryElement'

type HistorySectionProps = {}

export const HistorySection: React.FC<HistorySectionProps> = () => {

	return (<>

        <Section title={{
            en: 'History',
            fr: 'Historique'
        }}>

            <Box
                position='relative'
                display='flex'
                w='100%'
            >
            
                {/* Starting point */}
                <Box 
                    w='10px' h='10px'
                    bg='text.primary'
                    borderRadius='50%'
                    position='absolute' top='0' left='50%' transform='translate(-50%, -50%)'
                />

                {/* Line */}
                <Box
                    w='1px' h='100%'
                    bg='text.primary'
                    position='absolute' top='0' left='50%' transform='translate(-50%, 0)'
                />

                {/* Elements */}
                <VStack w='100%'>
                    {history.map((historyElement, i) => <>
                        <HistoryElement historyElement={historyElement} inverted={i % 2 === 0} />
                    </>)}
                </VStack>
                    
            </Box>
        
        </Section>

    </>)
}