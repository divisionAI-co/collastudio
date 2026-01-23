import type { Meta, StoryObj } from '@storybook/react';
import { CardGiftCard } from './CardGiftCard';

const meta: Meta<typeof CardGiftCard> = {
  title: 'Components/Card/CardGiftCard',
  component: CardGiftCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CardGiftCard>;

export const Default: Story = {
  args: {
    title: '200€ Gift Card',
    body: 'Best for someone who keeps saying "I\'ll go next year."',
    status: true,
  },
};

export const Off: Story = {
  args: {
    title: '200€ Gift Card',
    body: 'Best for someone who keeps saying "I\'ll go next year."',
    status: false,
  },
};
