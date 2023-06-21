import { Box, Grid, useBreakpointValue } from '@chakra-ui/react'
import { TechnologyCard } from '@components/modules'
import { Filter, Section } from '@components/shared'
import React from 'react'

import { Type, technologies, types, Mastery } from '@content'

type TechnologiesSectionProps = {}

export const TechnologiesSection: React.FC<TechnologiesSectionProps> = (props) => {

    const [selectedType, setSelectedType] = React.useState<Type | null>(Type.Language)

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
                    .filter(technology => (selectedType === null || technology.type === selectedType) && !technology.hidden)
                    .sort(sortTechnologies)
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

// Sort technologies from advanced to beginner
const sortTechnologies = (a: Content.Technology, b: Content.Technology) => {
    
    if (a.mastery === Mastery.Beginner && b.mastery === Mastery.Intermediate) return 1
    if (a.mastery === Mastery.Beginner && b.mastery === Mastery.Advanced) return 1
    if (a.mastery === Mastery.Intermediate && b.mastery === Mastery.Advanced) return 1
    if (a.mastery === Mastery.Intermediate && b.mastery === Mastery.Beginner) return -1
    if (a.mastery === Mastery.Advanced && b.mastery === Mastery.Beginner) return -1
    if (a.mastery === Mastery.Advanced && b.mastery === Mastery.Intermediate) return -1

    if (!a.mastery) return -1
    else return 1
}