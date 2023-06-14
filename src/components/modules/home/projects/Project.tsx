import { Badge, Box, Flex, HStack, Heading, Icon, Image, Link, Text, VStack } from '@chakra-ui/react'
import { CardLayout } from '@components/layouts'
import { extractLocalizedString } from '@core/utils/functions'
import { useRouter } from 'next/router'
import React from 'react'
import { FiGithub, FiPlay } from 'react-icons/fi'
import { BsPlay } from 'react-icons/bs'

import { technologies, tags, statuses } from '@content'
import { PopBox } from '@components/shared'

type ProjectProps = {
    project: Content.Project
    inverted?: boolean
}

export const Project: React.FC<ProjectProps> = ({ project, inverted }) => {

    const { locale } = useRouter()

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

                        return <>
                            <CardLayout
                                key={parsedTag.id}
                                mr={inverted ? '1em' : '0'}
                                ml={inverted ? '0' : '1em'}
                                fontSize='.9em'
                                p='.3em .7em'
                            >
                                {extractLocalizedString(parsedTag.label, locale)}
                            </CardLayout>
                        </>
                    })}

                </Flex>

                {/* Description card */}
                <CardLayout>
                    <Text>{extractLocalizedString(project.description, locale)}</Text>
                </CardLayout>

                {/* Technologies */}
                <Flex>
                    {project.technologies && project.technologies.map((technologyId, index) => {
                        const technology = technologies.find(t => t.id === technologyId)
                        if (!technology) return null
                        return <Text mr='.8em' key={index} color='text.secondary'>{extractLocalizedString(technology.name, locale)}</Text>
                    })}
                </Flex>

                {/* Links */}
                <HStack spacing='1em'>
                    {project.githubUrl &&
                        <Link href={project.githubUrl} target='_blank'>
                            <Icon as={FiGithub} fontSize='1.5rem'/>
                        </Link>
                    }
                    {project.demoUrl && 
                        <Link href={project.demoUrl} target='_blank'>
                            <Icon as={BsPlay} color='green.400' fontSize='2.5rem' fontWeight='bolder'></Icon>
                        </Link> 
                    }
                </HStack>

            </VStack>

            {project.imageUrl?.endsWith('.mp4') ?

                <Box as='video'
                    src={project.imageUrl}
                    autoPlay
                    loop
                    muted
                    position='absolute'
                    w='50%'
                    right={inverted ? 'unset' : 0} left={inverted ? 0 : 'unset'}
                    top='50%' transform='translateY(-50%)'
                    zIndex={-1}
                    borderRadius='10px'
                />
                :
                <Image 
                    src={project.imageUrl}
                    position='absolute'
                    w='50%'
                    right={inverted ? 'unset' : 0} left={inverted ? 0 : 'unset'}
                    top='50%' transform='translateY(-50%)'
                    zIndex={-1}
                    borderRadius='10px'
                />
            }


        </PopBox>



    </>)
}