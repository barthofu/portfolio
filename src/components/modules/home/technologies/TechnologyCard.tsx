import { Image, Text, useBreakpointValue } from '@chakra-ui/react'
import { CardLayout } from '@components/layouts'
import { PopBox } from '@components/shared'
import { extractLocalizedString } from '@core/utils/functions'
import { useRouter } from 'next/router'
import React from 'react'

type TechnologyCardProps = {
    technology: Content.Technology
}

export const TechnologyCard: React.FC<TechnologyCardProps> = ({ technology }) => {

    const { locale } = useRouter()

    const name = extractLocalizedString(technology.name, locale),
          imageSize = useBreakpointValue({ base: '3em', lg: '4em' })

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

                {technology.icon.startsWith('http') ?
                    <Image 
                        src={technology.icon} 
                        alt={name} 
                        width={imageSize}
                        alignSelf='center' 
                        pb='1rem'
                        maxW={imageSize}
                    />
                    :
                    <Text as='i'
                        className={getDevIconClass(technology.icon)}
                        fontSize={imageSize}
                        color='text.secondary'
                        textAlign='center'
                    />
                }
            
            </CardLayout>
        </PopBox>
    </>)
}

const getDevIconClass = (icon: string) => {
    
    const elements = icon.split(' ')
    return `devicon-${elements[0]}-original devicon-${elements[0]}-plain ${elements.includes('not-colored') ? '' : 'colored'}`
}