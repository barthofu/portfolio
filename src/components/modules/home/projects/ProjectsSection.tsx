import { Box, Grid, VStack, useBreakpointValue } from '@chakra-ui/react'
import { PinnedProject, Project } from '@components/modules'
import { Filter, Section } from '@components/shared'
import React from 'react'

import { Tag, projects, tags } from '@content'
import { extractLocalizedString } from '@core/utils/functions'

type ProjectsSectionProps = {}

export const ProjectsSection: React.FC<ProjectsSectionProps> = () => {

    const [selectedType, setSelectedType] = React.useState<Tag | null>(tags[0].id)

    // sort projects by year (string)
    projects.sort((a, b) => (b.year || '0') > (a.year || '0') ? 1 : -1)

    const detailedProjects = projects
        .filter(project => 
            (selectedType === null || project.tags.includes(selectedType)) 
            && !project.hidden
            && project.imageUrl
        )

    const cardProjects = projects
        .filter(project => 
            (selectedType === null || project.tags.includes(selectedType)) 
            && !project.hidden
            && (!project.imageUrl || project.pinned === false)
        )

    const cardProjectsColumns = useBreakpointValue({ base: 1, md: 2, lg: 3 })

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
                {detailedProjects
                    .map((project, index) =>
                    
                        <PinnedProject
                            key={extractLocalizedString(project.name, 'en')}
                            project={project}
                            inverted={index % 2 !== 0}    
                        />
                )}
            </VStack>

            <Grid 
                w='100%' 
                templateColumns={`repeat(${cardProjectsColumns}, 1fr)`} 
                gap='1rem'
                mt={cardProjects.length > 0 && detailedProjects.length > 0 ? '5rem' : '0'}
            >
                {cardProjects
                    .map(project => 

                        <Project
                            key={extractLocalizedString(project.name, 'en')}
                            project={project}
                        />
                )}
            </Grid>

        </Section>
    </>)
}