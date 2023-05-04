import type { Preview } from '@storybook/react'
import { theme } from '../src/core/theme'

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
		backgrounds: {
			default: 'dark',
			values: [
				{
					name: 'dark',
					value: theme.colors.background.primary,
				}
			]
		},
		chakra: {
			theme
		}
	},
}

export default preview
