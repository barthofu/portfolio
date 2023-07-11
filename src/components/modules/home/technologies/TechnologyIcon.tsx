import { Image, Link, ResponsiveValue, Text } from '@chakra-ui/react'
import { useLocale } from '@core/hooks/useLocale'
import { extractLocalizedString } from '@core/utils/functions'
import React from 'react'

type TechnologyIconProps = {
    technology: Content.Technology
    size: ResponsiveValue<string | number>
    linkWide?: boolean
} & Rest

export const TechnologyIcon: React.FC<TechnologyIconProps> = ({ technology, size, linkWide, ...rest }) => {

    const locale = useLocale()

	return (<>
        <Link href={technology.url} zIndex='10' target='_blank'
            w={linkWide ? '100%' : 'unset'} display='flex' justifyContent='center'
            _hover={{ textDecoration: 'none' }}
            
        >
            {technology.icon.startsWith('http') ?
                <Image 
                    src={technology.icon} 
                    alt={extractLocalizedString(technology.name, locale)} 
                    width={size}
                    maxW={size}
                    alignSelf='center' 
                    zIndex='10'
                />
                :
                <Text as='i'
                    className={getDevIconClass(technology.icon)}
                    fontSize={size}
                    color='text.secondary'
                    textAlign='center'
                    zIndex='10'
                />
            }
        </Link>
    </>)
}

const getDevIconClass = (icon: string) => {
    
    const elements = icon.split(' ')
    return `devicon-${elements[0]}-original devicon-${elements[0]}-plain ${elements.includes('not-colored') ? '' : 'colored'}`
}