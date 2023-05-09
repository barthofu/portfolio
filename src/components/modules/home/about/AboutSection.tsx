import { SimpleGrid, Text } from '@chakra-ui/react'
import { BasicCard, Section } from '@components/shared'
import { extractLocalizedString, extractLocalizedStrings } from '@core/utils/functions'
import { useRouter } from 'next/router'
import React from 'react'

import { about, skills } from '@content'

type AboutSectionProps = {}

export const AboutSection: React.FC<AboutSectionProps> = (props) => {

    const { locale } = useRouter()

	return (<>

        <Section title={{
            en: 'About',
            fr: 'À propos',
        }}>

            <BasicCard>
                {extractLocalizedStrings(about, locale).map((paragraph, index) =>
                    <Text key={index} mb='1em'>{paragraph}</Text>
                )}
            </BasicCard>

            {/* Skills */}

            <SimpleGrid templateColumns='repeat(3, 1fr)' gap='1rem' w='100%'>

                {skills.map((skill, index) => 

                    <BasicCard
                        key={index}
                        title={extractLocalizedString(skill.name, locale)}
                        subtitle={extractLocalizedString(skill.level, locale)}
                        fontSize='.9rem'
                    >
                        {extractLocalizedString(skill.description, locale)}
                    </BasicCard>    
                )}

            </SimpleGrid>

        </Section>
    </>)
}