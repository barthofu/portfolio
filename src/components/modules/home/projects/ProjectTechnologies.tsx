import { Flex, Text, Tooltip } from '@chakra-ui/react'
import React from 'react'

import { technologies } from '@content'
import { extractLocalizedString } from '@core/utils/functions'
import { useLocale } from '@core/hooks/useLocale'

type ProjectTechnologiesProps = {
    technologies: string[]
    maxDisplayed?: number
}

export const ProjectTechnologies: React.FC<ProjectTechnologiesProps> = (props) => {

    const locale = useLocale()

    const maxDisplayed = props.maxDisplayed || 5
    const processedTechnologies = props.technologies
        .map((technologyId, index) => technologies.find(t => t.id === technologyId))
        .filter(t => t) as Content.Technology[]
    const shouldCrop = processedTechnologies?.length > maxDisplayed

	return <>
        <Flex>
            {shouldCrop ? (
                <Tooltip label={processedTechnologies.map(technology => extractLocalizedString(technology.name, locale)).join(' - ')}>
                    <Text color='text.secondary'>
                        {processedTechnologies.slice(0, maxDisplayed).map((technology, index) =>
                            <Text as='span' mr='.8em' key={index}>{extractLocalizedString(technology.name, locale)}</Text>
                        )}
                        <Text as='span' >...</Text>
                    </Text>
                </Tooltip>
            ) : (
                processedTechnologies.map((technology, index) => 
                    <Text mr='.8em' key={index} color='text.secondary'>{extractLocalizedString(technology.name, locale)}</Text>
                ))
            
        }
        </Flex>
    </>
}