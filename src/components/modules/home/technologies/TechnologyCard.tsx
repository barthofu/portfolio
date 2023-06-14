import { Image, Text, useBreakpointValue } from '@chakra-ui/react'
import { CardLayout } from '@components/layouts'
import { PopBox } from '@components/shared'
import { extractLocalizedString } from '@core/utils/functions'
import { useRouter } from 'next/router'
import React from 'react'
import { TechnologyIcon } from './TechnologyIcon'

type TechnologyCardProps = {
    technology: Content.Technology
}

export const TechnologyCard: React.FC<TechnologyCardProps> = ({ technology }) => {

    const { locale } = useRouter()

    const name = extractLocalizedString(technology.name, locale)

	return (<>

        <PopBox
            w='100%'
            h='100%'
        >

            <CardLayout
                width='auto'
                h='100%'
                p='1rem'
            >
                
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

const getDevIconClass = (icon: string) => {
    
    const elements = icon.split(' ')
    return `devicon-${elements[0]}-original devicon-${elements[0]}-plain ${elements.includes('not-colored') ? '' : 'colored'}`
}