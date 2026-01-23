import type { Meta, StoryObj } from '@storybook/react';
import { DestinationCard } from './DestinationCard';

const meta: Meta<typeof DestinationCard> = {
  title: 'Components/Card/DestinationCard',
  component: DestinationCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DestinationCard>;

export const Default: Story = {
  args: {
    text: 'Ireland',
    number: '6',
    property1: false,
  },
};

export const WithTrails: Story = {
  args: {
    text: 'Ireland',
    number: '6',
    property1: true,
  },
};

export const Spain: Story = {
  args: {
    text: 'Spain',
    number: '12',
    property1: true,
  },
};
