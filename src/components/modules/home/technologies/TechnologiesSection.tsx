import { Box, Grid } from '@chakra-ui/react'
import { Section, TechnologyCard, TechnologyFilter } from '@components/modules'
import React from 'react'

import { technologies } from '@content'

type TechnologiesSectionProps = {}

export const TechnologiesSection: React.FC<TechnologiesSectionProps> = (props) => {

    const [selectedType, setSelectedType] = React.useState<string | null>(null)

	return (<>
        <Section title='Technologies'>

            <Box pb='2rem'>
                <TechnologyFilter 
                    selectedType={selectedType}
                    setSelectedType={setSelectedType}
                />
            </Box>
            
            <Grid w='100%' templateColumns='repeat(5, 1fr)' gap='1rem'>
                {technologies
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