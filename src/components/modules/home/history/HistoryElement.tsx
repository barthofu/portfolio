import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/react'
import { PopBox } from '@components/shared'
import { extractLocalizedString } from '@core/utils/functions'
import { useRouter } from 'next/router'
import React from 'react'

type HistoryElementProps = {
    historyElement: Content.HistoryElement
    inverted: boolean
}

export const HistoryElement: React.FC<HistoryElementProps> = ({ historyElement, inverted }) => {

    const { locale } = useRouter()

	return (<>

        <PopBox
            display='flex' 
            flexDir={inverted ? 'row-reverse' : 'row'}
            w='100%'
            my='2.5em' 
        >

            {/* Date */}
            <Box w='50%'>
                <Box 
                    textAlign={inverted ? 'left' : 'right'} 
                    marginRight={inverted ? '0' : '1em'}
                    marginLeft={inverted ? '1em' : '0'}
                >{historyElement.year}</Box>
            </Box>

            {/* Content */}
            <VStack w='50%' alignItems={inverted ? 'flex-end' : 'flex-start' }>

                {/* Title */}
                <Flex alignItems='center' justify='flex-start' flexDir={inverted ? 'row-reverse' : 'row'}>
                    <Box 
                        w='50px' h='1px'
                        bg='text.primary'
                        borderRadius='full'
                    />
                    <Heading as='h3' 
                        fontSize='1.5rem' 
                        fontFamily='Raleway'
                        textAlign={inverted ? 'right' : 'left'}
                        mx='1em'
                    >
                        {extractLocalizedString(historyElement.title, locale)}
                    </Heading>
                </Flex>
                
                {/* Description */}
                <Text 
                    textAlign={inverted ? 'right' : 'left'}
                    marginLeft={inverted ? '0' : '1em'}
                    marginRight={inverted ? '1em' : '0'}
                    maxW='80%'
                >
                    {extractLocalizedString(historyElement.description, locale)}
                </Text>
            </VStack>

        </PopBox>

    </>)
}