import { Box, Flex, HStack, Heading, Text, useBreakpointValue } from '@chakra-ui/react'
import { BasicCard, PopBox } from '@components/shared'
import { extractLocalizedString } from '@core/utils/functions'
import React from 'react'

import { technologies } from '@content'
import { useLocale } from '@core/hooks/useLocale'
import { TechnologyIcon } from '../technologies/TechnologyIcon'

type HistoryElementProps = {
    historyElement: Content.HistoryElement
    inverted: boolean
}

export const HistoryElement: React.FC<HistoryElementProps> = ({ historyElement, inverted }) => {

    const locale = useLocale()
    
    const isInverted = (invertedValue: string, notInvertedValue: string, mobileValue?: string): any => {
        return { base: mobileValue || notInvertedValue, lg: inverted ? invertedValue : notInvertedValue }
    }

	return (
        <PopBox
            display='flex' 
            justifyContent={isInverted('flex-start', 'flex-end', 'flex-start')}
            w='100%'
            m={{ base: '1em 0', lg: '-32px 0' }}
        >

            <Flex w={{ base: '100%', lg: '50%' }} flexDir={isInverted('row-reverse', 'row')} alignItems='center'>

                {/* Line */}
                <Box 
                    w='50px' h='1px'
                    bg={`linear-gradient(${useBreakpointValue(isInverted('-90deg', '90deg'))},rgba(255, 255, 255, 0.5) 20%,transparent 100%)`}
                    borderRadius='full'
                />

                 {/* Card */}
                <BasicCard w='100%' mx='1em'>

                    {/* Date */}
                    <Text
                        fontFamily='Raleway'
                        fontSize='1.2rem'
                        color='text.secondary'
                        mb='.5em'
                    >
                        {extractLocalizedString(historyElement.date, locale)}
                    </Text>

                    {/* Title */}
                    <Heading as='h3' 
                        fontSize='1.5rem' 
                        fontFamily='Raleway'
                        fontWeight='bold'
                        mb='.5em'
                    >
                        {extractLocalizedString(historyElement.title, locale)}
                    </Heading>

                    {/* Description */}
                    <Text 
                        maxW='80%'
                        whiteSpace='pre-wrap'
                    >
                        {extractLocalizedString(historyElement.description, locale)}
                    </Text>

                    {/* Technologies */}
                    {historyElement.technologies && <>
                        <HStack mt='1.75em' spacing='1em' zIndex='10' opacity='0.6'>
                            {historyElement.technologies.map((technologyId) => {

                                const technology = technologies.find(t => t.id === technologyId)
                                if (!technology) return null

                                return (
                                    <TechnologyIcon key={technology.id} 
                                        technology={technology} 
                                        size='1.5em' 
                                        zIndex='10'
                                    />

                                    // <Link href={technology.url} zIndex={10} key={technology.url}>
                                    //     <Image
                                    //         key={technology.url}
                                    //         src={technology.icon}
                                    //         alt={technology.url}
                                    //         w='1.5em'
                                    //         h='1.5em'
                                    //         objectFit='contain'
                                    //     />
                                    // </Link>
                                )
                            })}
                        </HStack> 
                    </>}


                </BasicCard>

            </Flex>


        </PopBox>
    )
}