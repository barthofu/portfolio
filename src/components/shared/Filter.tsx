import { Button, HStack, Text } from '@chakra-ui/react'
import { useLocale } from '@core/hooks/useLocale'
import { extractLocalizedString } from '@core/utils/functions'
import React from 'react'
import { v4 as uuidv4 } from 'uuid'

type FilterProps<T> = {
    data: {
        id: T
        label: LocalizedString
    }[]
    selectedType: T | null
    setSelectedType: React.Dispatch<React.SetStateAction<T | null>>
}

export const Filter = <T, >(props: FilterProps<T>) => {

    const locale = useLocale()

    const onSelectHandler = (type: T) => {
        if (props.selectedType === type) props.setSelectedType(null)
        else props.setSelectedType(type)
    } 

	return (<>
        <HStack maxW='100%' overflow='auto'>
            
            <Text>{extractLocalizedString({
                fr: 'Filtrer par type',
                en: 'Filter by type'
            }, locale)}</Text>
            
            <HStack overflowX='auto'>
                {props.data.map((type) =>
                    <Button
                        key={uuidv4()}
                        variant='outline'
                        size='sm'
                        minW='auto'
                        borderRadius='10px'
                        isActive={props.selectedType === type.id}
                        onClick={() => onSelectHandler(type.id)}
                    >
                        {extractLocalizedString(type.label, locale)}
                    </Button>
                )}
            </HStack>
            
        </HStack>
    </>)
}