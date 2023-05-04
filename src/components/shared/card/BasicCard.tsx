import { Box, Heading, Text } from '@chakra-ui/react'
import { CardLayout } from '@components/layouts'
import React from 'react'

type BasicCardProps = {
    title?: string
    subtitle?: string
    fontSize?: string
    children?: React.ReactNode
} & Rest

export const BasicCard: React.FC<BasicCardProps> = ({ title, subtitle, fontSize, children, ...rest }) => {

	return (<>
        <CardLayout {...rest}>

            {/* title */}
            {title && 
                <Heading as='h3' fontSize='1.5rem'>
                    {title}
                </Heading>
            }

            {/* subtitle */}
            {subtitle && 
                <Text 
                    color='text.secondary'
                    fontSize='1.1rem'
                >
                    {subtitle}
                </Text>
            }

            {/* children */}
            <Box fontSize={fontSize || '1rem'}>
                {children}
            </Box>

        </CardLayout>
    </>)
}