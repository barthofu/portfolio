import { Flex, Heading, Text } from '@chakra-ui/react'
import { CardLayout } from '@components/layouts'
import { ProjectLinks, ProjectTechnologies } from '@components/modules'
import { useLocale } from '@core/hooks/useLocale'
import { extractLocalizedString } from '@core/utils/functions'
import React from 'react'

type ProjectProps = {
    project: Content.Project
}

export const Project: React.FC<ProjectProps> = (props) => {

    const { project } = props
    const locale = useLocale()

	return (<>
        <CardLayout h='20em'>
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
            <Text>{extractLocalizedString(project.description, locale)}</Text>

            {/* Technologies */}
            {project.technologies && <ProjectTechnologies technologies={project.technologies} />}
            
        </CardLayout>
    </>)
}