import { Box, Divider, Flex, Heading, Image, Text, VStack, keyframes } from '@chakra-ui/react'
import { ParallaxText } from '@components/shared'
import React from 'react'

import { subtitle } from '@content'
import { extractLocalizedString } from '@core/utils/functions'
import { useRouter } from 'next/router'

type HeroBannerProps = {}

export const HeroBanner: React.FC<HeroBannerProps> = () => {

    const { locale } = useRouter()

	return (<>

        <Flex 
            flexDirection='column' 
            alignItems='flex-start' justifyContent='center'
            w='98vw' h='70vh'
            overflowX='hidden'
        >

            <Box
                overflowX='hidden'
                width='100%'
                mb='4em'
            >

                <ParallaxText baseVelocity={-2} length={4}>
                    <Text
                        fontSize={{ base: '5rem', md: '9rem' }} fontWeight='black'
                        fontFamily='Montserrat'
                        mx='.5em'
                    >Bartholomé</Text>
                </ParallaxText>

                <Box height='2em' />

                <ParallaxText baseVelocity={2} length={9}>
                    <Text
                        fontSize={{ base: '5rem', md: '9rem' }} fontWeight='black'
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
                fontSize='1.3em' fontFamily='Raleway'
                color='gray'
                letterSpacing={'.1em'}
            >
                {extractLocalizedString(subtitle, locale)}
            </Text>

        </Flex>


    </>)
}