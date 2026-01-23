import type { Meta, StoryObj } from '@storybook/react';
import { BlogCard } from './BlogCard';

const meta: Meta<typeof BlogCard> = {
  title: 'Components/Card/BlogCard',
  component: BlogCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof BlogCard>;

export const Default: Story = {
  args: {
    showCta: true,
    title: 'How to approach (and enjoy) your first walking holiday',
    showTag: true,
  },
};

export const WithoutCTA: Story = {
  args: {
    showCta: false,
    title: 'How to approach (and enjoy) your first walking holiday',
    showTag: true,
  },
};

export const WithoutTag: Story = {
  args: {
    showCta: true,
    title: 'How to approach (and enjoy) your first walking holiday',
    showTag: false,
  },
};
