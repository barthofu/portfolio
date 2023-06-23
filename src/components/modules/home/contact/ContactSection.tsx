import { HStack, Icon, Link, Stack } from '@chakra-ui/react'
import { CardLayout } from '@components/layouts'
import { Section } from '@components/shared'
import { contacts } from '@content'
import React from 'react'
import { ContactItem } from './ContactItem'

type ContactSectionProps = {}

export const ContactSection: React.FC<ContactSectionProps> = () => {

	return (<>
        <Section
            title={'Contact'}
        >

            <Stack direction={{ base: 'column', lg: 'row'}} justifyContent='center' w={{ base: 'auto', lg: '100%' }} spacing='2em'>
                {contacts.map((contact, index) => (
                    <ContactItem contact={contact} key={index} />
                ))}
            </Stack>
        </Section>
    </>)
}