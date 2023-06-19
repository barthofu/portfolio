import { Box, HStack, Link, Text, VStack } from '@chakra-ui/react'
import React from 'react'

type FooterProps = {}

export const Footer: React.FC<FooterProps> = () => {

	return <>
        <VStack h='300px' justifyContent='center' spacing={10} w='100%'>
            <HStack justifyContent='space-around' w='100%'>
                <Link href='https://github.com/barthofu/portfolio/blob/master/LICENSE.md'
                    _hover={{ textDecoration: 'none', textShadow: '0 0 5px #fff' }}
                    transition='all 0.2s ease-in-out'
                >
                    <Text>© 2023 Bartholomé Gili - MIT license</Text>
                </Link>
                <Link href='https://github.com/barthofu/portfolio'
                    _hover={{ textDecoration: 'none', textShadow: '0 0 5px #fff' }}
                    transition='all 0.2s ease-in-out'
                    display='flex' alignItems='center'
                >
                    <Text>See the repository on GitHub</Text>
                    <Text as='i' className='devicon-github-original' ml='.5em' />
                </Link>
            </HStack>
            <Text textAlign='center'>Built by Bartholomé Gili using Next.js.<br />Thank you for reading to the end, I hope you enjoyed this website.</Text>
        </VStack>
    </>
}