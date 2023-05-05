import './style.css'

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
			default: 'main',
			values: [
				{
					name: 'main',
					value: 'rgba(0, 0, 0, 0)',
				}
			]
		},
		chakra: {
			theme
		}
	},
}

export default preview
