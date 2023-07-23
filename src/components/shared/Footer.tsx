import { Box, HStack, Link, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

type FooterProps = {}

export const Footer: React.FC<FooterProps> = () => {

	return <>
        <VStack h='300px' justifyContent='center' spacing={10} w='100%'>
            <Stack 
                direction={{ base: 'column', md: 'row' }} 
                justifyContent='space-around' alignItems='center' 
                w='100%' spacing='2em'
            >
                <Link href='https://github.com/barthofu/portfolio/blob/main/LICENSE.md' target='_blank'
                    _hover={{ textDecoration: 'none', textShadow: '0 0 5px #fff' }}
                    transition='all 0.2s ease-in-out'
                >
                    <Text>© 2023 Bartholomé Gili - MIT license</Text>
                </Link>
                <Link href='https://github.com/barthofu/portfolio' target='_blank'
                    _hover={{ textDecoration: 'none', textShadow: '0 0 5px #fff' }}
                    transition='all 0.2s ease-in-out'
                    display='flex' alignItems='center'
                >
                    <Text>See the repository on GitHub</Text>
                    <Text as='i' className='devicon-github-original' ml='.5em' />
                </Link>
            </Stack>
            <Text textAlign='center'>Built by Bartholomé Gili using Next.js with ❤️<br />Thank you for reading to the end, I hope you enjoyed this website!</Text>
        </VStack>
    </>
}