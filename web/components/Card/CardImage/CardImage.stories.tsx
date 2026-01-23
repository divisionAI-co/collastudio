import type { Meta, StoryObj } from '@storybook/react';
import { CardImage } from './CardImage';

const meta: Meta<typeof CardImage> = {
  title: 'Components/Card/CardImage',
  component: CardImage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CardImage>;

export const Default: Story = {};
