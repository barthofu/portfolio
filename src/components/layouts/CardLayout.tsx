import { Box } from '@chakra-ui/react'
import React from 'react'

type CardLayoutProps = {
    children: React.ReactNode
} & Rest

export const CardLayout: React.FC<CardLayoutProps> = ({ children, ...rest }) => {

	return (<>
        <Box
            p='2rem'
            bg='background.secondary'
            border='1px solid' borderColor='background.tertiary'
            borderRadius='10px'
            display='flex' flexDirection='column' gap='20px' flex='1 1'
            w='100%'
            {...rest}
        >
            { children }
        </Box>
    </>)
}