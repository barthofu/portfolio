import { Box, Flex, Text } from '@chakra-ui/react'
import { ParallaxText } from '@components/shared'
import React from 'react'

import { subtitle } from '@content'
import { useLocale } from '@core/hooks/useLocale'
import { extractLocalizedString } from '@core/utils/functions'

type HeroBannerProps = {}

export const HeroBanner: React.FC<HeroBannerProps> = () => {

    const locale = useLocale()

	return (<>

        <Flex 
            flexDirection='column' 
            alignItems='flex-start' justifyContent='center'
            w='100vw' h={{ base: '40vh', lg: '70vh' }}
            overflowX='hidden'
        >

            <Box
                overflowX='hidden'
                width='100%'
                mb={{ base: '2.5em', lg: '4em' }}
            >

                <ParallaxText baseVelocity={-2} length={4}>
                    <Text
                        fontSize={{ base: '5rem', lg: '9rem' }} fontWeight='black'
                        fontFamily='Montserrat'
                        mx='.5em'
                    >Bartholomé</Text>
                </ParallaxText>

                <Box height='2em' />

                <ParallaxText baseVelocity={2} length={9}>
                    <Text
                        fontSize={{ base: '5rem', lg: '9rem' }} fontWeight='black'
                        fontFamily='Montserrat'
                        color='background.primary' textShadow='0 0 2px #fff' 
                        textAlign='right'
                        mx='.2em'
                    >Gili</Text>
                </ParallaxText>
            </Box>

            <Text
                w='100%' mb='1em'
                textAlign='center'
                fontSize={{ base: '1rem', lg: '1.3rem' }} fontFamily='Raleway'
                color='gray'
                letterSpacing={'.1em'}
            >
                {extractLocalizedString(subtitle, locale)}
            </Text>

        </Flex>


    </>)
}