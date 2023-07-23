import { Box, Flex, Heading, HStack, Image, Stack, Text, useBreakpointValue, VStack } from '@chakra-ui/react'
import { CardLayout } from '@components/layouts'
import { extractLocalizedString } from '@core/utils/functions'
import React from 'react'

import { PopBox } from '@components/shared'
import { statuses, tags } from '@content'
import { useLocale } from '@core/hooks/useLocale'
import { ProjectLinks } from './ProjectLinks'
import { ProjectTechnologies } from './ProjectTechnologies'

type PinnedProjectProps = {
    project: Content.Project
    inverted?: boolean
}

export const PinnedProject: React.FC<PinnedProjectProps> = ({ project, inverted }) => {

    const locale = useLocale()

    const parsedStatus = statuses.find(t => t.id === project.status)
    const direction = inverted ? 'flex-end' : 'flex-start'

    const isMobile = useBreakpointValue({ base: true, lg: false })

	return (<>

        <PopBox 
            position='relative' 
            display='flex'
            flexDirection={{ base: 'column', lg: 'row' }}
            justifyContent={direction}
            alignItems='center'
            w='100%' 
        >

            <VStack
                alignItems={{ base: 'center', lg: direction }}
                spacing={4} 
                w={{ base: '100%', lg: '60%' }}
            >
            
                {/* Heading */}
                <HStack>
                    {/* Period */}
                    {project.year && <Text color='text.secondary'>{project.year}</Text>}
                    {project.year && project.tags[0] && <Text color='text.secondary'>•</Text>}
                    {/* Status */}
                    {parsedStatus && <Text color='text.secondary'>{extractLocalizedString(parsedStatus.label, locale)}</Text>}
                </HStack>

                {/* Title */}
                <Flex flexDirection={{ base: 'column', lg: inverted ? 'row-reverse' : 'row' }} alignItems='center'>

                    <Heading as='h3'
                        fontSize='1.5em'
                        fontFamily='Raleway'
                        fontWeight='bold'
                        mb={{ base: '1em', lg: '0' }}
                    >
                        {extractLocalizedString(project.name, locale)}
                    </Heading>

                    {/* Tags */}
                    <Box
                        display='flex'
                        maxW='100%'
                        flexWrap='wrap'
                        gap='1em'
                    >
                        {project.tags.map(tag => {

                            const parsedTag = tags.find(t => t.id === tag)
                            if (!parsedTag) return null

                            return (
                                <CardLayout
                                    key={parsedTag.id}
                                    fontSize='.9em'
                                    p='.3em .7em'
                                >
                                    {extractLocalizedString(parsedTag.label, locale)}
                                </CardLayout>
                            )
                        })}
                    </Box>

                </Flex>

                {/* Description card */}
                <CardLayout
                    mb={{ base: '25% !important', lg: 'unset !important' }}
                >
                    <Text
                        mb={{ base: '10vw', lg: '0' }}
                    >{extractLocalizedString(project.description, locale)}</Text>
                </CardLayout>

                {!isMobile && <>
                    {/* Technologies */}
                    {project.technologies && <ProjectTechnologies technologies={project.technologies} />}

                    {/* Links */}
                    <ProjectLinks githubUrl={project.githubUrl} demoUrl={project.demoUrl}/>
                </>}

            </VStack>

            {project.imageUrl?.endsWith('.mp4') ?

                <Box as='video'
                    src={project.imageUrl}
                    autoPlay
                    loop
                    muted
                    position={{ base: 'relative', lg: 'absolute' }}
                    w={{ base: '60vw', lg: '50%' }}
                    maxH={{ base: '40vw', lg: '90%' }}
                    objectFit='cover'
                    right={{ base: 'unset', lg: inverted ? 'unset' : 0}} 
                    left={{ base: 0, lg: inverted ? 0 : 'unset'}}
                    top={{ base: 0, lg: '50%' }}
                    mt={{ base: '-15vw', lg: 'unset' }}
                    transform='translateY(-50%)'
                    zIndex={{ base: 1, lg: -1 }}
                    border='2px solid' borderColor='background.tertiary'
                    borderRadius='10px'
                />
                :
                <Image 
                    src={project.imageUrl}
                    alt={extractLocalizedString(project.name, locale)}
                    position={{ base: 'relative', lg: 'absolute' }}
                    w={{ base: '60vw', lg: '50%' }}
                    maxH={{ base: '40vw', lg: '90%' }}
                    objectFit='cover'
                    right={{ base: 'unset', lg: inverted ? 'unset' : 0}} 
                    left={{ base: 0, lg: inverted ? 0 : 'unset'}}
                    top={{ base: 0, lg: '50%' }}
                    mt={{ base: '-15vw', lg: 'unset' }}
                    transform='translateY(-50%)'
                    zIndex={{ base: 1, lg: -1 }}
                    border='2px solid' borderColor='background.tertiary'
                    borderRadius='10px'
                />
            }

            {isMobile && <VStack spacing={4} mt='-12.5vw'>
                {/* Technologies */}
                {project.technologies && <ProjectTechnologies technologies={project.technologies} />}

                {/* Links */}
                <ProjectLinks githubUrl={project.githubUrl} demoUrl={project.demoUrl}/>
            </VStack>}


        </PopBox>



    </>)
}