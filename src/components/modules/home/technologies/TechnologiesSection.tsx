import React from 'react'
import { Section, TechnologyCard, TechnologyFilter } from '@components/modules'

import type { types } from '@content'
import { Box, Grid } from '@chakra-ui/react'

type TechnologiesSectionProps = {
    technologies: Technology[]
    types: typeof types
}

export const TechnologiesSection: React.FC<TechnologiesSectionProps> = (props) => {

    const [selectedType, setSelectedType] = React.useState<string | null>(null)

	return (<>
        <Section title='Technologies'>

            <Box pb='2rem'>
                <TechnologyFilter 
                    types={props.types}
                    selectedType={selectedType}
                    setSelectedType={setSelectedType}
                />
            </Box>
            
            <Grid w='100%' templateColumns='repeat(5, 1fr)' gap='1rem'>
                {props.technologies
                    .filter(technology => selectedType === null || technology.type === selectedType)
                    .map((technology, i) => 

                        <TechnologyCard
                            key={i}
                            technology={technology}
                        />
                )}
            </Grid>

        </Section>
    </>)
}