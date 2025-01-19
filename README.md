# Ranking of Legends Event Management System

A comprehensive platform for League of Legends esports event management, team organization, and player development.

## Project Overview

This platform serves as a hub for League of Legends players to find teams, for teams to recruit players, and to organize leagues and tournaments. Built with Vue 3, TypeScript, and Supabase, it provides a modern, type-safe, and scalable solution for esports event management.

## Documentation

Our documentation is organized into focused, single-purpose files for better maintainability and clarity:

### [Product Context](doc/productContext.md)
- Why this project exists
- What problems it solves
- How it should work

### [Active Context](doc/activeContext.md)
- What you're working on now
- Recent changes
- Next steps
(This is your source of truth for current development)

### [System Patterns](doc/systemPatterns.md)
- How the system is built
- Key technical decisions
- Architecture patterns

### [Technical Context](doc/techContext.md)
- Technologies used
- Development setup
- Technical constraints

### [Progress](doc/progress.md)
- What works
- What's left to build
- Progress status

## Cline Development Assistant

This project uses Cline as an AI development assistant with custom configurations:

### Rules File
The project includes a custom rules file for Cline at:
```
rulesfile.clinerules
```
This file contains project-specific rules and guidelines that Cline follows when assisting with development tasks.

### Custom Instructions
Cline operates with custom instructions tailored to this project's needs, ensuring consistent development practices and adherence to our project standards.

## Development Setup

### Prerequisites

1. [Node.js](https://nodejs.org/) (v18 or higher)
2. [VSCode](https://code.visualstudio.com/) with recommended extensions:
   - [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur)
   - [TypeScript Vue Plugin](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)
   - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
   - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### Initial Setup

1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd rol-events
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   Update the `.env` file with your configuration values.

### Development Workflow

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Run type checking in watch mode:
   ```bash
   npm run type-check:watch
   ```

3. Run tests:
   ```bash
   # Unit tests
   npm run test:unit

   # E2E tests (requires setup)
   npm run test:e2e
   ```

4. Lint and format code:
   ```bash
   npm run lint
   npm run format
   ```

## Git Workflow

We follow a modified GitFlow workflow with the following branches:

### Main Branches
- `main` - Production-ready code
- `develop` - Integration branch for features

### Supporting Branches
- `feature/*` - New features and non-emergency bug fixes
- `release/*` - Release preparation
- `hotfix/*` - Emergency production fixes
- `bugfix/*` - Bug fixes for features in development

### Branch Naming Convention
- Feature branches: `feature/[issue-number]-short-description`
- Bug fix branches: `bugfix/[issue-number]-short-description`
- Hotfix branches: `hotfix/[issue-number]-short-description`
- Release branches: `release/v[major].[minor].[patch]`

### Commit Message Convention
We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Adding/updating tests
- `chore`: Maintenance tasks

### Development Process

1. Create a new branch from develop:
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feature/123-new-feature
   ```

2. Make changes and commit following conventions:
   ```bash
   git add .
   git commit -m "feat: add new feature"
   ```

3. Keep your branch updated:
   ```bash
   git checkout develop
   git pull origin develop
   git checkout feature/123-new-feature
   git rebase develop
   ```

4. Push changes and create a Pull Request:
   ```bash
   git push origin feature/123-new-feature
   ```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run test:unit` - Run unit tests
- `npm run test:e2e` - Run end-to-end tests
- `npm run lint` - Lint code
- `npm run type-check` - Check TypeScript types
- `npm run format` - Format code with Prettier

## E2E Testing with Playwright

```bash
# Install browsers for the first run
npx playwright install

# Run all E2E tests
npm run test:e2e

# Run specific tests
npm run test:e2e -- tests/example.spec.ts

# Run in debug mode
npm run test:e2e -- --debug
```

## Type Support

TypeScript cannot handle type information for `.vue` imports by default, so we:
1. Replace `tsc` CLI with `vue-tsc` for type checking
2. Use Volar for TypeScript language service awareness of `.vue` types

## Configuration

- See [Vite Configuration Reference](https://vitejs.dev/config/)
- Environment variables are documented in `.env.example`

## Contributing

1. Ensure you've read the [Git Workflow](#git-workflow) section
2. Create a feature branch from develop
3. Make your changes following our conventions
4. Submit a Pull Request with:
   - Clear description of changes
   - Link to related issues
   - Screenshots (if UI changes)
   - All checks passing

## Documentation Maintenance

Each documentation file serves a specific purpose and should be updated when relevant changes occur:

- Update `activeContext.md` frequently as work progresses
- Update `progress.md` when features are completed or new work is planned
- Update `systemPatterns.md` when architectural decisions are made
- Update `techContext.md` when development requirements change
- Update `productContext.md` when project goals or scope changes

## Support

For questions or issues:
1. Check existing documentation
2. Ask in the development channel
3. Contact the tech lead

## License

[Add License Information]
