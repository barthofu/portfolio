import { VStack } from '@chakra-ui/react'
import { Project, Section } from '@components/modules'
import React from 'react'

import { projects } from '@content'

type ProjectsSectionProps = {}

export const ProjectsSection: React.FC<ProjectsSectionProps> = () => {

	return (<>
        <Section title={{
            en: 'Projects',
            fr: 'Projets',
        }}>
            
            <VStack w='100%' spacing='5rem'>
                {projects.map((project, index) =>
                
                    <Project
                        key={index}
                        project={project}
                        inverted={index % 2 !== 0}    
                    />
                )}
            </VStack>

        </Section>
    </>)
}