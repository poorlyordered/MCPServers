# Component Development Guidelines
Version: 1.0.0
Last Updated: 2024-01-15

## Naming Conventions

### Component Files
- Use PascalCase for component filenames: `BaseContainer.vue`, `DataTable.vue`
- Prefix base/core components with "Base": `BaseInput.vue`, `BaseModal.vue`
- Group related components with descriptive prefixes: `AuthCallback.vue`, `AuthVerification.vue`
- Use suffixes to indicate component type when needed: `UserList.vue`, `UserListItem.vue`

### Component Directories
- Use kebab-case for directory names: `src/components/layout/`, `src/components/auth/`
- Group components by feature or type:
  - `auth/` - Authentication related components
  - `common/` - Shared utility components
  - `data/` - Data display components
  - `feedback/` - User feedback components
  - `form/` - Form-related components
  - `icons/` - Icon components
  - `layout/` - Layout and structure components
  - `navigation/` - Navigation-related components

### Props
- Use camelCase for prop names: `maxWidth`, `showIcon`
- Boolean props should be prefixed with verbs:
  - is/has/should: `isLoading`, `hasError`, `shouldValidate`
  - can/will: `canEdit`, `willAutoClose`
- Use descriptive names that indicate the prop's purpose:
  ```typescript
  // Good
  fluid: boolean       // Indicates container spans full width
  padding: string      // Controls container padding
  
  // Avoid
  mode: string        // Too vague
  flag: boolean       // Not descriptive
  ```

### Events
- Use kebab-case for event names: `update:modelValue`, `item-selected`
- Prefix v-model events with `update:`: `update:modelValue`, `update:selected`
- Use past tense for completed actions: `item-selected`, `form-submitted`
- Use descriptive names that indicate what happened:
  ```typescript
  // Good
  'item-selected'      // Clear what happened
  'form-submitted'     // Specific event
  
  // Avoid
  'change'            // Too vague
  'update'            // Not specific enough
  ```

## Architecture Patterns

### Component Structure
1. Script Setup Section
   ```vue
   <script setup lang="ts">
   // 1. Type imports
   import type { PropType } from 'vue'
   
   // 2. Component imports
   import BaseIcon from '../common/BaseIcon.vue'
   
   // 3. Props definition
   defineProps({
     label: {
       type: String,
       required: true
     }
   })
   
   // 4. Emits definition
   defineEmits<{
     (e: 'update:modelValue', value: string): void
     (e: 'submit'): void
   }>()
   
   // 5. Composables
   const { isLoading } = useLoading()
   
   // 6. Reactive state
   const isOpen = ref(false)
   
   // 7. Computed properties
   const classes = computed(() => ({
     'is-active': isOpen.value
   }))
   
   // 8. Methods
   const handleClick = () => {
     isOpen.value = !isOpen.value
   }
   </script>
   ```

2. Template Structure
   ```vue
   <template>
     <!-- 1. Root element with component classes -->
     <div :class="['component-name', classes]">
       <!-- 2. Named slots for content injection -->
       <slot name="header">
         <h2>{{ title }}</h2>
       </slot>
   
       <!-- 3. Main content -->
       <div class="component-name__content">
         <slot></slot>
       </div>
   
       <!-- 4. Footer/actions area -->
       <div class="component-name__footer">
         <slot name="footer"></slot>
       </div>
     </div>
   </template>
   ```

3. Style Structure
   ```vue
   <style scoped>
   /* 1. Component root styles */
   .component-name {
     /* Base styles */
   }
   
   /* 2. Component variations */
   .component-name--modifier {
     /* Modifier styles */
   }
   
   /* 3. Child elements */
   .component-name__element {
     /* Element styles */
   }
   
   /* 4. State classes */
   .component-name.is-active {
     /* State styles */
   }
   
   /* 5. Media queries */
   @media (min-width: 768px) {
     .component-name {
       /* Responsive styles */
     }
   }
   </style>
   ```

### Props Pattern
- Use TypeScript for prop definitions
- Provide default values when appropriate
- Include prop validation where needed
- Document props with clear descriptions

Example:
```typescript
defineProps({
  // Boolean props with default
  fluid: {
    type: Boolean,
    default: false
  },
  
  // String props with validation
  padding: {
    type: String,
    default: 'md',
    validator: (value: string) => ['none', 'sm', 'md', 'lg'].includes(value)
  },
  
  // Complex props with TypeScript
  item: {
    type: Object as PropType<Item>,
    required: true
  }
})
```

### Composables Pattern
- Extract reusable logic into composables
- Use the `use` prefix for composable names
- Return reactive references when needed
- Document composable parameters and return values

Example:
```typescript
// useToast.ts
export function useToast() {
  const isVisible = ref(false)
  const message = ref('')
  const type = ref<'success' | 'error' | 'info'>('info')

  const show = (newMessage: string, newType: typeof type.value) => {
    message.value = newMessage
    type.value = newType
    isVisible.value = true
  }

  const hide = () => {
    isVisible.value = false
  }

  return {
    isVisible,
    message,
    type,
    show,
    hide
  }
}
```

## Testing Framework

### Unit Tests
- Use Vitest for unit testing
- Test files should be co-located with components
- Follow the Arrange-Act-Assert pattern
- Test both success and error cases

Example:
```typescript
// BaseInput.spec.ts
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BaseInput from './BaseInput.vue'

describe('BaseInput', () => {
  it('emits update:modelValue event when input changes', async () => {
    // Arrange
    const wrapper = mount(BaseInput)
    const input = wrapper.find('input')
    const newValue = 'test'

    // Act
    await input.setValue(newValue)

    // Assert
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([newValue])
  })

  it('displays error message when error prop is provided', () => {
    // Arrange
    const errorMessage = 'This field is required'
    const wrapper = mount(BaseInput, {
      props: {
        error: errorMessage
      }
    })

    // Assert
    expect(wrapper.find('.input-error').text()).toBe(errorMessage)
  })
})
```

### Component Story Tests
- Use Storybook's test runner for component testing
- Write interaction tests for complex components
- Test accessibility compliance
- Test responsive behavior

Example:
```typescript
// BaseModal.stories.ts
import type { Meta, StoryObj } from '@storybook/vue3'
import { within, userEvent } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import BaseModal from './BaseModal.vue'

const meta = {
  component: BaseModal,
  args: {
    title: 'Test Modal'
  }
} satisfies Meta<typeof BaseModal>

export default meta
type Story = StoryObj<typeof meta>

export const ClosesOnEscape: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    
    // Open modal
    await userEvent.click(canvas.getByRole('button'))
    
    // Press escape
    await userEvent.keyboard('{Escape}')
    
    // Verify modal is closed
    await expect(canvas.queryByRole('dialog')).not.toBeInTheDocument()
  }
}
```

## Documentation Requirements

### Component Documentation
- Each component should have a Storybook story
- Document all props, events, and slots
- Provide usage examples
- Include accessibility considerations

Example:
```typescript
const meta = {
  title: 'Components/BaseButton',
  component: BaseButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'text'],
      description: 'The visual style of the button'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the button'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled'
    }
  }
} satisfies Meta<typeof BaseButton>
```

### Code Comments
- Use JSDoc comments for complex methods
- Document non-obvious implementations
- Explain business logic complexities

Example:
```typescript
/**
 * Calculates the grid column span based on breakpoint
 * @param {number} span - Desired column span
 * @param {string} breakpoint - Current breakpoint
 * @returns {number} Actual column span to use
 */
const calculateSpan = (span: number, breakpoint: string): number => {
  // Implementation
}
```

## Best Practices

### Performance
- Use `v-show` for frequently toggled elements
- Implement lazy loading for heavy components
- Use `shallowRef` for large objects that don't need deep reactivity
- Avoid unnecessary watchers and computed properties

### Accessibility
- Use semantic HTML elements
- Provide ARIA labels and roles where needed
- Ensure keyboard navigation works
- Test with screen readers

### State Management
- Use props for parent-child communication
- Use emits for child-parent communication
- Use composables for shared state
- Consider Pinia for global state

### Error Handling
- Implement proper error boundaries
- Provide meaningful error messages
- Log errors appropriately
- Handle edge cases gracefully
