import type { StorybookConfig } from '@storybook/nextjs'
import path from 'path'

const config: StorybookConfig = {

	stories: [
		'../src/**/*.mdx', 
		'../src/**/*.stories.@(js|jsx|ts|tsx)',
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@chakra-ui/storybook-addon',
	],
	webpackFinal: async (config, { configType }) => {

		if (config.resolve) {
			config.resolve.alias = {
			...config.resolve.alias,
			'@content': path.resolve(__dirname, "../content"),
			};
		}
	
		return config;
	},
	framework: {
		name: '@storybook/nextjs',
		options: {},
	},
	docs: {
		autodocs: 'tag',
	}
}

export default config