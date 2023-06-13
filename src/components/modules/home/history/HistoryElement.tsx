import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/react'
import { BasicCard, PopBox } from '@components/shared'
import { extractLocalizedString } from '@core/utils/functions'
import { useRouter } from 'next/router'
import React from 'react'

type HistoryElementProps = {
    historyElement: Content.HistoryElement
    inverted: boolean
}

export const HistoryElement: React.FC<HistoryElementProps> = ({ historyElement, inverted }) => {

    const { locale } = useRouter()

	return (
        <PopBox
            display='flex' 
            justifyContent={inverted ? 'flex-start' : 'flex-end'}
            w='100%'
            m='-32px 0'
        >

            <Flex w='50%' flexDir={inverted ? 'row-reverse': 'row'} alignItems='center'>

                {/* Line */}
                <Box 
                    w='50px' h='1px'
                    bg={`linear-gradient(${inverted ? '-90deg' : '90deg'},rgba(255, 255, 255, 0.5) 20%,transparent 100%)`}
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
                        {historyElement.year}
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
                    >
                        {extractLocalizedString(historyElement.description, locale)}
                    </Text>

                </BasicCard>

            </Flex>



            {/* Date */}
            {/* <Box w='50%'>
                <Box 
                    textAlign={inverted ? 'left' : 'right'} 
                    marginRight={inverted ? '0' : '1em'}
                    marginLeft={inverted ? '1em' : '0'}
                >{historyElement.year}</Box>
            </Box> */}

           




        </PopBox>
    )
}