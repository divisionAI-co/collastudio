import type { Meta, StoryObj } from '@storybook/react';
import { CardTravelServiceClasses } from './CardTravelServiceClasses';

const meta: Meta<typeof CardTravelServiceClasses> = {
  title: 'Components/Card/CardTravelServiceClasses',
  component: CardTravelServiceClasses,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CardTravelServiceClasses>;

export const Default: Story = {
  args: {
    type: 'ESSENCE',
    title: 'The Portuguese Way: From Vigo to Santiago and back',
    showPlus1: true,
    showPlus2: true,
    showPlus3: true,
    showPlus4: true,
  },
};

export const PartialServices: Story = {
  args: {
    type: 'ESSENCE',
    title: 'The Portuguese Way: From Vigo to Santiago and back',
    showPlus1: true,
    showPlus2: true,
    showPlus3: false,
    showPlus4: false,
  },
};
