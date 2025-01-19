# System Patterns: Architecture & Design Decisions

## How the System is Built

### Frontend Architecture
1. Vue 3 with TypeScript
   - Composition API for better type inference
   - Script setup syntax for cleaner components
   - Type-safe component props and events

2. State Management
   - Pinia for centralized state
   - Modular store design
   - Composable functions for reusable logic

3. Routing System
   - Vue Router with typed routes
   - Nested route structure
   - Route guards for auth
   - OAuth callback handling

4. Component Architecture
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
