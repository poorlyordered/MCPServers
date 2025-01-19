# Technical Context: Development Environment & Stack

## Technologies Used

### Frontend Stack
- Vue 3 with TypeScript
- Vite for build tooling
- Vue Router for routing
- Pinia for state management
- TailwindCSS for styling and theme system
- Vitest for unit testing
- Playwright for E2E testing
- Storybook for component documentation

### Backend Services
- Supabase
  - Authentication
  - PostgreSQL database
  - Real-time subscriptions
  - Edge Functions
- RIOT API Integration

### Development Tools
- ESLint with TypeScript rules
- Prettier for code formatting
- Husky for pre-commit hooks
- TypeScript for type safety
- npm for package management

## Development Setup

### Prerequisites
1. Node.js and npm
2. Vue CLI
3. Git
4. VSCode (recommended)
   - Volar extension
   - ESLint extension
   - Prettier extension

### Environment Setup
1. Install Dependencies
   ```bash
   npm install
   ```

2. Configure Environment Variables
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_KEY=your_supabase_key
   VITE_RIOT_API_KEY=your_riot_api_key
   ```

3. Start Development Server
   ```bash
   npm run dev
   ```

4. Run Tests
   ```bash
   npm run test:unit
   npm run test:e2e
   ```

### Development Workflow
1. Component Development
   - Create in appropriate directory
   - Add TypeScript types
   - Write unit tests
   - Create Storybook story
   - Document usage

2. Feature Development
   - Create feature branch
   - Implement components
   - Add tests
   - Update documentation
   - Submit PR

## Technical Constraints

### Performance Requirements
- First contentful paint < 1.5s
- Time to interactive < 3s
- Bundle size < 250KB (initial load)
- API response time < 200ms

### Browser Support
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

### Mobile Support
- iOS Safari (latest 2 versions)
- Android Chrome (latest 2 versions)
- Responsive design (320px to 1920px)

### Security Requirements
1. Authentication
   - HTTPS only
   - Secure session management
   - OAuth 2.0 compliance
   - XSS protection

2. Data Protection
   - Input sanitization
   - SQL injection prevention
   - CORS configuration
   - Rate limiting

### Code Quality Standards
1. TypeScript Requirements
   - Strict mode enabled
   - No any types
   - Documented interfaces
   - Type-safe API calls

2. Theme System Requirements
   - Follow TailwindCSS class order convention
   - Use semantic color variables
   - Implement dark mode variants
   - Maintain responsive design patterns
   - Document component theming

2. Testing Requirements
   - Unit test coverage > 80%
   - E2E tests for critical paths
   - Integration tests for API
   - Visual regression tests

3. Performance Monitoring
   - Lighthouse scores > 90
   - Web Vitals tracking
   - Error tracking
   - Performance monitoring

## Development Guidelines

### Component Standards
1. Naming Conventions
   - PascalCase for components
   - camelCase for props
   - kebab-case for events
   - Prefix base components with "Base"

2. File Organization
   ```
   components/
   ├── auth/
   ├── common/
   ├── data/
   ├── feedback/
   ├── form/
   ├── layout/
   └── navigation/
   ```

3. Code Style
   - 2 space indentation
   - Single quotes for strings
   - Semicolons required
   - Trailing commas in multiline
   - Max line length: 100

### Documentation Requirements
1. Component Documentation
   - Props description
   - Events documentation
   - Usage examples
   - Accessibility notes

2. Code Comments
   - JSDoc for methods
   - Inline comments for complexity
   - TODO comments for pending work

3. Commit Messages
   - Conventional commits format
   - Clear description
   - Reference issues/tickets

### Build & Deployment
1. Build Process
   - Development build
   - Production optimization
   - Source maps generation
   - Asset optimization

2. Deployment Requirements
   - CI/CD pipeline
   - Environment configuration
   - Build verification
   - Rollback capability
