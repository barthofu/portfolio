import { Box, HStack, Heading, Icon, Image, Link, Text, VStack } from '@chakra-ui/react'
import { CardLayout } from '@components/layouts'
import { extractLocalizedString } from '@core/utils/functions'
import { useRouter } from 'next/router'
import React from 'react'
import { FiGithub, FiPlay } from 'react-icons/fi'
import { BsPlay } from 'react-icons/bs'

import { technologies, tags } from '@content'
import { PopBox } from '@components/shared'

type ProjectProps = {
    project: Content.Project
    inverted?: boolean
}

export const Project: React.FC<ProjectProps> = ({ project, inverted }) => {

    const { locale } = useRouter()

    const parsedTag = tags.find(t => t.id === project.tags[0])
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
                    {project.year && <Text color='text.secondary'>{project.year}</Text>}
                    {project.year && project.tags[0] && <Text color='text.secondary'>•</Text>}
                    {parsedTag && <Text color='text.secondary'>{extractLocalizedString(parsedTag.label, locale)}</Text>}
                </HStack>

                {/* Title */}
                <Heading as='h3'
                    fontSize='1.5em'
                    fontFamily='Raleway'
                    fontWeight='bold'
                >
                    {extractLocalizedString(project.name, locale)}
                </Heading>

                {/* Description card */}
                <CardLayout>
                    <Text>{extractLocalizedString(project.description, locale)}</Text>
                </CardLayout>

                {/* Technologies */}
                {project.technologies && project.technologies.map((technologyId, index) => {
                    const technology = technologies.find(t => t.id === technologyId)
                    if (!technology) return null
                    return <Text mr='1em' key={index} color='text.secondary'>{extractLocalizedString(technology.name, locale)}</Text>
                })}

                {/* Links */}
                <HStack spacing='1em'>
                    {project.githubUrl &&
                        <Link href={project.githubUrl}>
                            <Icon as={FiGithub} fontSize='1.5rem'/>
                        </Link>
                    }
                    {project.demoUrl && 
                        <Link href={project.demoUrl}>
                            <Icon as={BsPlay} color='green.400' fontSize='2.5rem' fontWeight='bolder'></Icon>
                        </Link> 
                    }
                </HStack>

            </VStack>

            <Image 
                src={project.imageUrl}
                position='absolute'
                w='50%'
                right={inverted ? 'unset' : 0} left={inverted ? 0 : 'unset'}
                top='50%' transform='translateY(-50%)'
                zIndex={-1}
                borderRadius='10px'
            />


        </PopBox>



    </>)
}