import React from 'react'
import { Meta, StoryFn } from '@storybook/react'

import { BasicCard } from './BasicCard'

export default {
    title: 'Card/BasicCard',
    component: BasicCard,
} as Meta<typeof BasicCard>

const Template: StoryFn<typeof BasicCard> = (args) => (
    <BasicCard {...args}>
        <p>Card</p>
    </BasicCard>
)

export const Default = Template.bind({})
Default.args = {

}
