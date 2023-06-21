import { Box, VStack } from '@chakra-ui/react'
import { Project } from '@components/modules'
import { Filter, Section } from '@components/shared'
import React from 'react'

import { Tag, projects, tags } from '@content'
import { extractLocalizedString } from '@core/utils/functions'

type ProjectsSectionProps = {}

export const ProjectsSection: React.FC<ProjectsSectionProps> = () => {

    const [selectedType, setSelectedType] = React.useState<Tag | null>(Tag.Personal)

	return (<>
        <Section title={{
            en: 'Projects',
            fr: 'Projets',
        }}>

            
            <Box pb='2rem' maxW='100%'>
                <Filter<Tag>
                    data={tags}
                    selectedType={selectedType}
                    setSelectedType={setSelectedType}
                />
            </Box>
            
            <VStack w='100%' spacing='5rem'>
                {projects
                    .filter(project => (selectedType === null || project.tags.includes(selectedType)) && !project.hidden)
                    .map((project, index) =>
                    
                        <Project
                            key={extractLocalizedString(project.name, 'en')}
                            project={project}
                            inverted={index % 2 !== 0}    
                        />
                )}
            </VStack>

        </Section>
    </>)
}