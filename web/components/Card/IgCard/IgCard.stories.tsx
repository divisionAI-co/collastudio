import type { Meta, StoryObj } from '@storybook/react';
import { IgCard } from './IgCard';

const meta: Meta<typeof IgCard> = {
  title: 'Components/Card/IgCard',
  component: IgCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof IgCard>;

export const Post: Story = {
  args: {
    copy: 'Ieri 17 Aprile abbiamo ritirato, a Santiago de Compostela, il premio 🏅 "Calidad Turistica" che ci certifica come Tour Operator che offre servizi di qualità in Spagna.',
    typology: 'Post',
  },
};

export const Reel: Story = {
  args: {
    copy: 'Ieri 17 Aprile abbiamo ritirato, a Santiago de Compostela, il premio 🏅 "Calidad Turistica" che ci certifica come Tour Operator che offre servizi di qualità in Spagna.',
    typology: 'Reel',
  },
};
