import { Image, SimpleGrid, Text, useBreakpointValue } from '@chakra-ui/react'
import { BasicCard, Section } from '@components/shared'
import { extractLocalizedString, extractLocalizedStrings } from '@core/utils/functions'
import React from 'react'

import { about, skills } from '@content'
import { useLocale } from '@core/hooks/useLocale'

type AboutSectionProps = {}

export const AboutSection: React.FC<AboutSectionProps> = (props) => {

    const locale = useLocale()

	return (<>

        <Section title={{
            en: 'About',
            fr: 'À propos',
        }}>

            <BasicCard pt={{ base: '10em', lg: '5em' }}>

                <Image 
                    src='https://avatars.githubusercontent.com/u/66025667?v=4'
                    width='100px'
                    borderRadius='50%'
                    position='absolute' top={{ base: '4.75em', lg: 0 }} left='50%' transform='translate(-50%, -50%)'
                />

                {extractLocalizedStrings(about, locale).map((paragraph, index) =>
                    <Text key={index} mb='1em'>{paragraph}</Text>
                )}
            </BasicCard>

            {/* Skills */}

            <SimpleGrid templateColumns={`repeat(${useBreakpointValue({ base: '1', lg: '3' })}, 1fr)`} gap='1rem' w='100%'>

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