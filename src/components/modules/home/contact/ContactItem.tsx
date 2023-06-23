import { Icon, Link, Text } from '@chakra-ui/react'
import { CardLayout } from '@components/layouts'
import { useLocale } from '@core/hooks/useLocale'
import { extractLocalizedString } from '@core/utils/functions'
import React from 'react'

type ContactItemProps = {
    contact: Content.Contact
}

export const ContactItem: React.FC<ContactItemProps> = (props) => {

    const locale = useLocale()

	return (<>
        <Link href={props.contact.url} target='_blank' _hover={{
            textDecoration: 'none'
        }}>
            <CardLayout 
                flexDirection='row'
                alignItems='center'
                justifyContent='center'
            >
                <Icon as={props.contact.icon} 
                    fontSize='2em'
                />
                <Text>{extractLocalizedString(props.contact.title, locale)}</Text>
            </CardLayout>
        </Link>  
    </>)
}