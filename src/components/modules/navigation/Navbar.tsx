import { HStack, Icon, Text } from '@chakra-ui/react'
import { CardLayout } from '@components/layouts'
import { useLocale } from '@core/hooks/useLocale'
import { extractLocalizedString } from '@core/utils/functions'
import Link from 'next/link'
import React from 'react'

type NavbarProps = {}

export const Navbar: React.FC<NavbarProps> = (props) => {

    const locale = useLocale()

    const navItems = [
        {
            title: extractLocalizedString({
                en: 'Home',
                fr: 'Accueil'
            }, locale),
            href: '/'
        },
        {
            title: extractLocalizedString('Articles', locale),
            href: '/articles'
        },
    ]

	return (<>
        <HStack 
            gap='2em'
            alignItems='center'
            padding='1em'
            borderRadius='5px'
            backdropBlur='10px'
            backgroundColor='background.secondary'
            zIndex={100}
        >
            {navItems.map((item, index) => (
                <Link href={item.href} key={index}>
                    <Text
                        fontWeight='bold'
                        cursor='pointer'
                    >
                        {item.title}
                    </Text>
                </Link>
            ))}
        </HStack>
    </>)
}