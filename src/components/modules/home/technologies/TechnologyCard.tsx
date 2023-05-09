import { Image, Text } from '@chakra-ui/react'
import { CardLayout } from '@components/layouts'
import { PopBox } from '@components/shared'
import { extractLocalizedString } from '@core/utils/functions'
import { useRouter } from 'next/router'
import React from 'react'

type TechnologyCardProps = {
    technology: Technology
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
                
                <Image 
                    src={technology.imageUrl} 
                    alt={name} 
                    width='4rem'
                    alignSelf='center' 
                    pb='1rem'
                />
            
            </CardLayout>
        </PopBox>
    </>)
}