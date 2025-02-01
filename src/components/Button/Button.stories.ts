import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
	title: 'Компоненты/Button',
	component: Button,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Small: Story = {
	args: {
		appearance: 'small',
		children: 'Кнопка',
	},
};

export const Big: Story = {
	args: {
		appearance: 'big',
		children: 'Кнопка',
	},
};
