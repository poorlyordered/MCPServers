# System Patterns: Architecture & Design Decisions

## How the System is Built

### Frontend Architecture
1. Vue 3 with TypeScript
   - Composition API for better type inference
   - Script setup syntax for cleaner components
   - Type-safe component props and events

2. Theme System
   - Color System
     - Primary colors (50, 500, 900) for brand identity
     - Accent colors for status (success, error, warning)
     - Neutral colors for backgrounds and text
     - Dark mode with semantic color mapping
     - Gradient backgrounds with opacity variants
   
   - Typography System
     - Responsive heading scales (h1-h3)
     - Body text sizes with consistent line heights
     - Inter font family as system default
     - Mobile-optimized text scaling
   
   - Spacing System
     - Base unit of 4px (0.25rem)
     - Consistent vertical rhythm
     - Responsive spacing scale
     - Component-specific spacing
   
   - Responsive Design
     - Mobile-first approach
     - Breakpoints: sm(640px), md(768px), lg(1024px), xl(1280px), 2xl(1536px)
     - Fluid typography
     - Adaptive layouts

   - Implementation
     - TailwindCSS for utility-first styling
     - CSS custom properties for theme tokens
     - Component-level theme integration
     - Dark mode using media queries

3. State Management
   - Pinia for centralized state
   - Modular store design
   - Composable functions for reusable logic

4. Routing System
   - Vue Router with typed routes
   - Nested route structure
   - Route guards for auth
   - OAuth callback handling

5. Component Architecture
   - Atomic design pattern
   - Feature-based organization
   - Shared components in common directory
   - Strict props typing and validation

### Backend Integration
1. Supabase Implementation
   - Authentication with multiple providers
   - PostgreSQL database with RLS policies
   - Real-time subscriptions
   - Edge Functions for serverless operations

2. API Integration
   - RIOT API for game data
   - Type-safe API clients
   - Request caching
   - Rate limiting implementation

## Key Technical Decisions

### ADR 1: Vue 3 + TypeScript (2023-12-15)
- Context: Need for modern, type-safe frontend framework
- Decision: Chose Vue 3 with TypeScript over alternatives
- Rationale:
  - Strong typing support
  - Composition API benefits
  - Excellent developer experience
  - Growing ecosystem

### ADR 2: Supabase Backend (2023-12-20)
- Context: Need for scalable backend solution
- Decision: Selected Supabase over alternatives
- Rationale:
  - PostgreSQL database capabilities
  - Built-in authentication
  - Real-time features
  - Cost-effective scaling

### ADR 3: Pinia State Management (2024-01-05)
- Context: Need for robust state management
- Decision: Migrated from Vuex to Pinia
- Rationale:
  - Better TypeScript support
  - Simpler API
  - Devtools integration
  - Scalable module system

### ADR 4: Multi-Step Authentication (2024-01-10)
- Context: Need for secure, flexible registration
- Decision: Implemented multi-step auth with profile creation
- Rationale:
  - Better user experience
  - Multiple provider support
  - Secure session management
  - Scalable verification process

### ADR 5: TailwindCSS Theme System (2024-01-15)
- Context: Need for consistent design system
- Decision: Implemented theme system using TailwindCSS
- Rationale:
  - Utility-first approach for rapid development
  - Built-in responsive design
  - Easy dark mode implementation
  - Extensible configuration

## Architecture Patterns

### Component Development
1. File Structure
   ```
   src/
   ├── components/
   │   ├── auth/
   │   ├── common/
   │   ├── layout/
   │   └── features/
   ├── composables/
   ├── stores/
   └── views/
   ```

2. Component Pattern
   ```vue
   <script setup lang="ts">
   // Types
   // Props
   // Emits
   // Composables
   // State
   // Methods
   </script>

   <template>
   <!-- Component Structure -->
   </template>

   <style scoped>
   /* Component Styles */
   </style>
   ```

### Theme Pattern
1. Color Usage
   ```vue
   <!-- Primary Colors -->
   <div class="bg-primary-500 text-white">
     <!-- Primary content -->
   </div>

   <!-- Dark Mode -->
   <div class="bg-white dark:bg-neutral-900">
     <!-- Dark mode aware content -->
   </div>

   <!-- Gradients -->
   <div class="bg-gradient-to-r from-primary-50 to-primary-100">
     <!-- Gradient background content -->
   </div>
   ```

2. Typography Usage
   ```vue
   <!-- Headings -->
   <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold">
     <!-- Responsive heading -->
   </h1>

   <!-- Body Text -->
   <p class="text-base md:text-lg text-neutral-600 dark:text-neutral-300">
     <!-- Responsive body text -->
   </p>
   ```

### State Management Pattern
1. Store Structure
   ```typescript
   export const useAuthStore = defineStore('auth', {
     state: () => ({
       user: null,
       isAuthenticated: false
     }),
     actions: {
       async login() { /* ... */ },
       async logout() { /* ... */ }
     }
   })
   ```

2. Composable Pattern
   ```typescript
   export function useAuth() {
     const store = useAuthStore()
     // Composable logic
     return {
       // Exposed functionality
     }
   }
   ```

### Testing Pattern
1. Component Tests
   ```typescript
   describe('Component', () => {
     it('behavior description', () => {
       // Arrange
       // Act
       // Assert
     })
   })
   ```

2. Integration Tests
   ```typescript
   test('feature workflow', async () => {
     // Setup
     // Execute
     // Verify
   })
   ```

## Evolution Strategy

### Component Evolution
1. Base Components → Feature Components
   - Start with core UI components
   - Build feature-specific components
   - Maintain consistent patterns

2. State Evolution
   - Local component state
   - Shared composable state
   - Global store state

### System Growth
1. Authentication → Features → Integration
   - Build core auth system
   - Add feature modules
   - Integrate external services

2. Testing Evolution
   - Unit tests first
   - Integration tests
   - E2E testing
