import { Button, HStack, Text } from '@chakra-ui/react'
import { Tag, tags } from '@content'
import { extractLocalizedString } from '@core/utils/functions'
import { useRouter } from 'next/router'
import React from 'react'

type FilterProps<T> = {
    data: {
        id: T
        label: LocalizedString
    }[]
    selectedType: T | null
    setSelectedType: React.Dispatch<React.SetStateAction<T | null>>
}

export const Filter = <T, >(props: FilterProps<T>) => {

    const { locale } = useRouter()

    const onSelectHandler = (type: T) => {
        if (props.selectedType === type) props.setSelectedType(null)
        else props.setSelectedType(type)
    } 

	return (<>
        <HStack>
            
            <Text>{extractLocalizedString({
                fr: 'Filtrer par type',
                en: 'Filter by type'
            }, locale)}</Text>

            {props.data.map((type, i) =>
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