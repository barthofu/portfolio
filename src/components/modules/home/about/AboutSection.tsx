import React from 'react'
import { Section } from '@components/modules'
import { BasicCard } from '@components/shared'
import { Flex, SimpleGrid, Text } from '@chakra-ui/react'
import { extractLocalizedString, extractLocalizedStrings } from '@core/utils/functions'
import { useRouter } from 'next/router'

type AboutSectionProps = {
    about: About,
    skills: Skill[]
}

export const AboutSection: React.FC<AboutSectionProps> = (props) => {

    const router = useRouter()

	return (<>

        <Section title='About'>

            <BasicCard>
                {extractLocalizedStrings(props.about, router.locale).map((paragraph, index) =>
                    <Text key={index} mb='1em'>{paragraph}</Text>
                )}
            </BasicCard>

            {/* Skills */}

            <SimpleGrid templateColumns='repeat(3, 1fr)' w='100%'>

                {props.skills.map((skill, index) => 

                    <BasicCard
                        key={index}
                        title={extractLocalizedString(skill.name, router.locale)}
                        subtitle={extractLocalizedString(skill.level, router.locale)}
                        fontSize='.9rem'
                    >
                        {extractLocalizedString(skill.description, router.locale)}
                    </BasicCard>    
                )}

            </SimpleGrid>

        </Section>
    </>)
}