import { Box, HStack, Icon, Text, VStack } from '@chakra-ui/react'
import { transparentize } from '@chakra-ui/theme-tools'
import { useLocale } from '@core/hooks/useLocale'
import { theme } from '@core/theme'
import { capitalize, extractLocalizedString } from '@core/utils/functions'
import React from 'react'
import {
    FiAlertCircle,
    FiAlertTriangle,
    FiCheckCircle,
    FiInfo,
    FiPaperclip,
} from 'react-icons/fi'

type AdmonitionConfig = {
    color: string
    stroke: string
    icon: React.ComponentType
    title: LocalizedString
}

type Statuses = 'default' | 'info' | 'success' | 'warning' | 'error'

const admonitionConfigs: Record<Statuses, AdmonitionConfig> = {
    default: {
        color: 'gray.900',
        stroke: 'gray.500',
        icon: FiPaperclip,
        title: 'Note'
    },
    info: {
        color: 'blue.900',
        stroke: 'blue.500',
        icon: FiInfo,
        title: 'Info'
    },
    success: {
        color: 'green.900',
        stroke: 'green.500',
        icon: FiCheckCircle,
        title: 'Tip'
    },
    warning: {
        color: 'orange.900',
        stroke: 'orange.500',
        icon: FiAlertTriangle,
        title: {
            en: 'Warning',
            fr: 'Attention',
        }
    },
    error: {
        color: 'red.900',
        stroke: 'red.500',
        icon: FiAlertCircle,
        title: {
            en: 'Error',
            fr: 'Erreur',
        }
    },
}

type AdmonitionProps = {
    status?: Statuses
    title?: React.ReactNode
    children?: React.ReactNode
}

export const Admonition: React.FC<AdmonitionProps> = ({
    status = 'default',
    ...props
}) => {

    const locale = useLocale()

    const { color, stroke, icon: IconComponent, title } = admonitionConfigs[status || 'default']

    return (
        <Box
            as='aside'
            role='admonition'
            aria-details={status}
            backgroundColor={transparentize(color, 0.4)(theme)}
            backdropFilter='blur(10px)'
            borderLeft='4px'
            borderColor={stroke}
            borderRadius='0.2rem'
            padding='.5em 1em'
        >
            <HStack fontSize='1.1em' mb='.2em'>
                <Icon as={IconComponent} role='presentation' color={stroke} aria-hidden />
                <Box as='span' fontWeight='semibold'>{props.title || capitalize(extractLocalizedString(title, locale))}</Box>
            </HStack>

            <VStack className='body' alignItems='flex-start' fontSize='.9em'>{props.children}</VStack>
        </Box>
    )
}