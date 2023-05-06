import { Badge, Button, HStack, Text } from '@chakra-ui/react'
import { extractLocalizedString } from '@core/utils/functions'
import { useRouter } from 'next/router'
import React from 'react'

import { types } from '@content'

type TechnologyFilterProps = {
    selectedType: string | null
    setSelectedType: React.Dispatch<React.SetStateAction<string | null>>
}

export const TechnologyFilter: React.FC<TechnologyFilterProps> = (props) => {

    const { locale } = useRouter()

    const onSelectHandler = (type: string) => {
        if (props.selectedType === type) props.setSelectedType(null)
        else props.setSelectedType(type)
    } 

	return (<>
        <HStack>
            
            <Text>Filter by</Text>

            {types.map((type, i) =>
                <Button
                    key={i}
                    variant='outline'
                    size='sm'
                    borderRadius='10px'
                    isActive={props.selectedType === type.id}
                    onClick={() => onSelectHandler(type.id)}
                >
                    {extractLocalizedString(type.label, locale)}
                </Button>
            )}
            
        </HStack>
    </>)
}