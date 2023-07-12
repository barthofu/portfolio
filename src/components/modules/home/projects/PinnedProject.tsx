import { Box, Flex, HStack, Heading, Icon, Image, Link, Text, VStack } from '@chakra-ui/react'
import { CardLayout } from '@components/layouts'
import { extractLocalizedString } from '@core/utils/functions'
import React from 'react'
import { BsPlay } from 'react-icons/bs'
import { FiGithub } from 'react-icons/fi'

import { PopBox } from '@components/shared'
import { statuses, tags, technologies } from '@content'
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

	return (<>

        <PopBox 
            position='relative' 
            display='flex' 
            justifyContent={direction}
            w='100%' 
        >

            <VStack 
                alignItems={direction}
                spacing={4} 
                w='60%'
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
                <Flex flexDirection={inverted ? 'row-reverse' : 'row' } alignItems='center'>

                    <Heading as='h3'
                        fontSize='1.5em'
                        fontFamily='Raleway'
                        fontWeight='bold'
                    >
                        {extractLocalizedString(project.name, locale)}
                    </Heading>

                    {/* Tags */}
                    {project.tags.map(tag => {

                        const parsedTag = tags.find(t => t.id === tag)
                        if (!parsedTag) return null

                        return (
                            <CardLayout
                                key={parsedTag.id}
                                mr={inverted ? '1em' : '0'}
                                ml={inverted ? '0' : '1em'}
                                fontSize='.9em'
                                p='.3em .7em'
                            >
                                {extractLocalizedString(parsedTag.label, locale)}
                            </CardLayout>
                        )
                    })}

                </Flex>

                {/* Description card */}
                <CardLayout>
                    <Text>{extractLocalizedString(project.description, locale)}</Text>
                </CardLayout>

                {/* Technologies */}
                {project.technologies && <ProjectTechnologies technologies={project.technologies} />}

                {/* Links */}
                <ProjectLinks githubUrl={project.githubUrl} demoUrl={project.demoUrl}/>

            </VStack>

            {project.imageUrl?.endsWith('.mp4') ?

                <Box as='video'
                    src={project.imageUrl}
                    autoPlay
                    loop
                    muted
                    position='absolute'
                    w='50%'
                    maxH='90%'
                    objectFit='cover'
                    right={inverted ? 'unset' : 0} left={inverted ? 0 : 'unset'}
                    top='50%' transform='translateY(-50%)'
                    zIndex={-1}
                    border='2px solid' borderColor='background.tertiary'
                    borderRadius='10px'
                />
                :
                <Image 
                    src={project.imageUrl}
                    alt={extractLocalizedString(project.name, locale)}
                    position='absolute'
                    w='50%'
                    maxH='90%'
                    objectFit='cover'
                    right={inverted ? 'unset' : 0} left={inverted ? 0 : 'unset'}
                    top='50%' transform='translateY(-50%)'
                    zIndex={-1}
                    border='2px solid' borderColor='background.tertiary'
                    borderRadius='10px'
                />
            }


        </PopBox>



    </>)
}