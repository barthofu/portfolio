import { Meta, StoryFn } from '@storybook/react'

import { projects } from '@content'
import { Project } from './Project'

export default {
    title: 'Homepage/Projects/Project',
    component: Project,
} as Meta<typeof Project>

const Template: StoryFn<typeof Project> = (args) => <Project {...args} />

export const Default = Template.bind({})
Default.args = {
    project: projects[1]
}
