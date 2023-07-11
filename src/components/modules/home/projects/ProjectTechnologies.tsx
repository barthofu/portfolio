import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

import { technologies } from '@content'
import { extractLocalizedString } from '@core/utils/functions'
import { useLocale } from '@core/hooks/useLocale'

type ProjectTechnologiesProps = {
    technologies: string[]
}

export const ProjectTechnologies: React.FC<ProjectTechnologiesProps> = (props) => {

    const locale = useLocale()

	return (<>
        <Flex>
            {props.technologies && props.technologies.map((technologyId, index) => {
                const technology = technologies.find(t => t.id === technologyId)
                if (!technology) return null
                return <Text mr='.8em' key={index} color='text.secondary'>{extractLocalizedString(technology.name, locale)}</Text>
            })}
        </Flex>
    </>)
}