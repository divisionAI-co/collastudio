import type { Meta, StoryObj } from '@storybook/react';
import { ValueCard } from './ValueCard';

const meta: Meta<typeof ValueCard> = {
  title: 'Components/Card/ValueCard',
  component: ValueCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ValueCard>;

export const Default: Story = {
  args: {
    headline: 'Modern life obsesses over shortcuts; we choose the curve',
    body: 'We value the winding path over the efficient route, because we know that nature and personal growth does not move in straight lines. We celebrate the detour, for that is often where the most transformative moments are found.',
    status: true,
  },
};

export const Off: Story = {
  args: {
    headline: 'Modern life obsesses over shortcuts; we choose the curve',
    body: 'We value the winding path over the efficient route, because we know that nature and personal growth does not move in straight lines. We celebrate the detour, for that is often where the most transformative moments are found.',
    status: false,
  },
};
