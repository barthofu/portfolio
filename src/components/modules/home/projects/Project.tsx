import { Box, Flex, Heading, Popover, Text, Tooltip } from '@chakra-ui/react'
import { CardLayout } from '@components/layouts'
import { ProjectLinks, ProjectTechnologies } from '@components/modules'
import { useLocale } from '@core/hooks/useLocale'
import { extractLocalizedString } from '@core/utils/functions'
import React from 'react'

const maxDescriptionLength = 120

type ProjectProps = {
    project: Content.Project
}

export const Project: React.FC<ProjectProps> = (props) => {

    const { project } = props
    const locale = useLocale()

    const description = extractLocalizedString(project.description, locale),
          shouldDesriptionBeShortened = description.length > maxDescriptionLength

	return (<>
        <CardLayout h='20em' justifyContent='space-between'>

            <Flex flexDirection='column' gap='1em'>
                
                {/* Header */}
                <Flex w='100%' justifyContent='space-between' alignItems='center'>

                    {/* Icon */}

                    {/* Links */}
                    <ProjectLinks githubUrl={project.githubUrl} demoUrl={project.demoUrl} />
                </Flex>

                {/* Title */}
                <Heading as='h3'
                    fontSize='1.3em'
                    fontFamily='Raleway'
                    fontWeight='bold'
                >
                    {extractLocalizedString(project.name, locale)}
                </Heading>

                {/* Description */}
                <Tooltip 
                    label={description} 
                    zIndex='10'
                    bg='background.primary'
                    color='text.secondary'
                    p='1em'
                >
                    <Text zIndex='10'>{shouldDesriptionBeShortened ? description.slice(0, maxDescriptionLength) + '...' : description}</Text>
                </Tooltip>
            </Flex>

            {/* Technologies */}
            {project.technologies && <ProjectTechnologies technologies={project.technologies} maxDisplayed={3}/>}
            
        </CardLayout>
    </>)
}