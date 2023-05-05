import React from 'react'
import { Meta, StoryFn } from '@storybook/react'

import { TechnologyCard } from './TechnologyCard'
import { technologies } from '@content'

export default {
    title: 'Homepage/Technologies/TechnologyCard',
    component: TechnologyCard,
} as Meta<typeof TechnologyCard>

const Template: StoryFn<typeof TechnologyCard> = (args) => <TechnologyCard {...args} />

export const Default = Template.bind({})
Default.args = {
    technology: technologies[1]
}
