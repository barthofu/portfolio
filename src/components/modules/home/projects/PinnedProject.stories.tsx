import { Meta, StoryFn } from '@storybook/react'

import { projects } from '@content'
import { PinnedProject } from './PinnedProject'

export default {
    title: 'Homepage/Projects/Project',
    component: PinnedProject,
} as Meta<typeof PinnedProject>

const Template: StoryFn<typeof PinnedProject> = (args) => <PinnedProject {...args} />

export const Default = Template.bind({})
Default.args = {
    project: projects[1]
}
