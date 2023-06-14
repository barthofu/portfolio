import { Box, Grid, useBreakpointValue } from '@chakra-ui/react'
import { TechnologyCard } from '@components/modules'
import { Filter, Section } from '@components/shared'
import React from 'react'

import { Type, technologies, types } from '@content'

type TechnologiesSectionProps = {}

export const TechnologiesSection: React.FC<TechnologiesSectionProps> = (props) => {

    const [selectedType, setSelectedType] = React.useState<Type | null>(null)

	return (<>
        <Section title='Technologies'>

            <Box pb='2rem' maxW='100%'>
                <Filter<Type>
                    data={types.map(type => ({
                        id: type.id,
                        label: type.label,
                    }))}
                    selectedType={selectedType}
                    setSelectedType={setSelectedType}
                />
            </Box>
            
            <Grid w='100%' templateColumns={`repeat(${useBreakpointValue({ base: '3', md: '4', lg: '5' })}, 1fr)`} gap='1rem'>
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