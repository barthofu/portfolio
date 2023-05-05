import { Badge, Button, HStack, Text } from '@chakra-ui/react'
import type { types } from '@content'
import { extractLocalizedString } from '@core/utils/functions'
import { useRouter } from 'next/router'
import React from 'react'

type TechnologyFilterProps = {
    types: typeof types
    selectedType: string | null
    setSelectedType: React.Dispatch<React.SetStateAction<string | null>>
}

export const TechnologyFilter: React.FC<TechnologyFilterProps> = (props) => {

    const router = useRouter()

    const onSelectHandler = (type: string) => {
        if (props.selectedType === type) props.setSelectedType(null)
        else props.setSelectedType(type)
    } 

	return (<>
        <HStack>
            
            <Text>Filter by</Text>

            {props.types.map((type, i) =>
                <Button
                    key={i}
                    variant='outline'
                    size='sm'
                    borderRadius='10px'
                    isActive={props.selectedType === type.id}
                    onClick={() => onSelectHandler(type.id)}
                >
                    {extractLocalizedString(type.label, router.locale)}
                </Button>
            )}
            
        </HStack>
    </>)
}