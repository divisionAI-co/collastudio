import type { Meta, StoryObj } from '@storybook/react';
import { ItineraryCard } from './ItineraryCard';

const meta: Meta<typeof ItineraryCard> = {
  title: 'Components/Card/ItineraryCard',
  component: ItineraryCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ItineraryCard>;

export const Default: Story = {
  args: {
    date: '02 Novembre',
    title: 'From Vigo to Nigaran',
    km: '1.500',
    hoursWalking: '2',
    elevation: '1.500',
    showKm: true,
    showFlightTransferDetails: true,
    showHotelDetails: true,
    showElevationContainer: true,
    property1: true,
  },
};

export const Collapsed: Story = {
  args: {
    date: '02 Novembre',
    title: 'From Vigo to Nigaran',
    km: '1.500',
    hoursWalking: '2',
    elevation: '1.500',
    showKm: true,
    showFlightTransferDetails: true,
    showHotelDetails: true,
    showElevationContainer: true,
    property1: false,
  },
};
