import type { Preview } from '@storybook/react';

const preview: Preview = {
	parameters: {
		backgrouns: {
			default: {
				values: [
					{
						name: 'dark',
						value: '#0000',
					},
				],
			},
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
};

export default preview;
