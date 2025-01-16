import type { Meta, StoryObj } from '@storybook/vue3'
import BaseContainer from '../components/layout/BaseContainer.vue'

const meta: Meta<typeof BaseContainer> = {
  title: 'Layout/BaseContainer',
  component: BaseContainer,
  tags: ['autodocs'],
  argTypes: {
    fluid: {
      control: 'boolean',
      description: 'Makes the container full-width with no maximum width'
    },
    narrow: {
      control: 'boolean',
      description: 'Reduces the maximum width to 768px'
    },
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
      description: 'Controls the padding around the container content'
    }
  }
}

type Story = StoryObj<typeof BaseContainer>
export default meta

// Default container with medium padding
export const Default: Story = {
  args: {
    fluid: false,
    narrow: false,
    padding: 'md'
  },
  render: (args) => ({
    components: { BaseContainer },
    setup() {
      return { args }
    },
    template: `
      <BaseContainer v-bind="args">
        <div style="background-color: #e5e7eb; padding: 2rem; text-align: center;">
          Container Content
        </div>
      </BaseContainer>
    `
  })
}

// Fluid container that spans full width
export const Fluid: Story = {
  args: {
    fluid: true,
    padding: 'md'
  }
}

// Narrow container with reduced max-width
export const Narrow: Story = {
  args: {
    narrow: true,
    padding: 'md'
  }
}

// Showcase different padding options
export const PaddingVariants: Story = {
  render: (args) => ({
    components: { BaseContainer },
    setup() {
      return { args }
    },
    template: `
      <div>
        <BaseContainer padding="none" style="margin-bottom: 1rem">
          <div style="background-color: #e5e7eb; padding: 2rem; text-align: center;">
            No Padding
          </div>
        </BaseContainer>

        <BaseContainer padding="sm" style="margin-bottom: 1rem">
          <div style="background-color: #e5e7eb; padding: 2rem; text-align: center;">
            Small Padding
          </div>
        </BaseContainer>

        <BaseContainer padding="md" style="margin-bottom: 1rem">
          <div style="background-color: #e5e7eb; padding: 2rem; text-align: center;">
            Medium Padding
          </div>
        </BaseContainer>

        <BaseContainer padding="lg">
          <div style="background-color: #e5e7eb; padding: 2rem; text-align: center;">
            Large Padding
          </div>
        </BaseContainer>
      </div>
    `
  })
}
