import type { Meta, StoryObj } from '@storybook/react';
import { CardTravel } from './CardTravel';

const meta: Meta<typeof CardTravel> = {
  title: 'Components/Card/CardTravel',
  component: CardTravel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CardTravel>;

export const Default: Story = {
  args: {
    title: 'The Portuguese Way: From Vigo to Santiago and back',
    destination: 'ST.JAMES WAY ',
    price: '515',
    property1: true,
  },
};

export const Off: Story = {
  args: {
    title: 'The Portuguese Way: From Vigo to Santiago and back',
    destination: 'ST.JAMES WAY ',
    price: '515',
    property1: false,
  },
};
