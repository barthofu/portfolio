import { Grid } from '@chakra-ui/react'
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

            <Grid
                w='100%'
                gap='1em'
                templateColumns={{ base: '1fr', lg: 'repeat(3, 1fr)' }}
            >
                {contacts.map((contact, index) => (
                    <ContactItem contact={contact} key={index} />
                ))}
            </Grid>
        </Section>
    </>)
}