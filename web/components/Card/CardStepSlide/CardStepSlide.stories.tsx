import type { Meta, StoryObj } from '@storybook/react';
import { CardStepSlide } from './CardStepSlide';

const meta: Meta<typeof CardStepSlide> = {
  title: 'Card/CardStepSlide',
  component: CardStepSlide,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CardStepSlide>;

export const DefaultOff: Story = {
  args: {
    number: '02',
    title: 'Add details and book',
    showPlus: true,
    device: 'Default',
    status: 'Off',
  },
};

export const DefaultOn: Story = {
  args: {
    number: '02',
    title: 'Add details and book',
    paragraph: 'This is where the dream becomes a plan. Choose your dates, group size (or travel solo), and your preferred comfort level (Essence, Comfort, or Serenity). You can even add flights or extensions.',
    showPlus: true,
    showPaymentInfo: true,
    device: 'Default',
    status: 'On',
  },
};

export const MobileOff: Story = {
  args: {
    number: '02',
    title: 'Add details and book',
    showPlus: true,
    device: 'Mobile',
    status: 'Off',
  },
};

export const MobileOn: Story = {
  args: {
    number: '02',
    title: 'Add details and book',
    paragraph: 'This is where the dream becomes a plan. Choose your dates, group size (or travel solo), and your preferred comfort level (Essence, Comfort, or Serenity). You can even add flights or extensions.',
    showPlus: true,
    showPaymentInfo: true,
    device: 'Mobile',
    status: 'On',
  },
};
