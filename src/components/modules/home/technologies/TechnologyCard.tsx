import { Icon, Text, Tooltip } from '@chakra-ui/react'
import { CardLayout } from '@components/layouts'
import { PopBox } from '@components/shared'
import { useLocale } from '@core/hooks/useLocale'
import { extractLocalizedString } from '@core/utils/functions'
import React from 'react'
import { TechnologyIcon } from './TechnologyIcon'
import { TfiMedallAlt } from 'react-icons/tfi'
import { Mastery } from '@content'

const masteryLabels: Record<Mastery, LocalizedString> = {
    [Mastery.Beginner]: {
        en: 'Beginner',
        fr: 'Débutant',
    },
    [Mastery.Intermediate]: {
        en: 'Intermediate',
        fr: 'Intermédiaire',
    },
    [Mastery.Advanced]: {
        en: 'Advanced',
        fr: 'Avancé',
    },
}

type TechnologyCardProps = {
    technology: Content.Technology
}

export const TechnologyCard: React.FC<TechnologyCardProps> = ({ technology }) => {

    const locale = useLocale()

    const name = extractLocalizedString(technology.name, locale)

	return (<>

        <PopBox
            w='100%'
            h='100%'
        >

            <CardLayout
                position='relative'
                width='auto'
                h='100%'
                p='1rem'
            >

                {technology?.mastery !== Mastery.Beginner &&
                    <Tooltip 
                        // @ts-ignore
                        label={extractLocalizedString(masteryLabels[technology.mastery], locale)}
                        placement='bottom'
                        bg='background.primary'
                        color='text.primary'  
                    >
                        <span>
                            <Icon as={TfiMedallAlt} 
                                fontSize='1.5em'
                                position='absolute'
                                top='1em'
                                right='1em'
                                color={technology.mastery === Mastery.Intermediate ? '#C0C0C0' : '#FFD700'}
                                zIndex='10'
                            />
                        </span>
                    </Tooltip>
                }
                
                <Text
                    fontSize='small'
                    fontWeight='500'
                    color='text.secondary'
                    pb='.5em'
                >
                    {name}
                </Text>

                <TechnologyIcon technology={technology}
                    size={{ base: '3em', lg: '4em' }}
                    linkWide={true}
                    pb='1rem'
                />
            
            </CardLayout>
        </PopBox>
    </>)
}