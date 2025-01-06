# Product Requirements Document (PRD) for League of Legends Esports Platform
Version: 1.0.2
Last Updated: 2024-01-09

## Document Purpose
### Continuously updated with clarifications
### Links technical decisions to business requirements

## Overview

This platform will serve as a hub for League of Legends players to find teams, for teams to recruit players, and to organize leagues and tournaments. The system will leverage existing APIs and services to minimize development complexity and costs.

## Key Features

**Player and Team Management**

- Player profiles with RIOT API integration for stats
- Team profiles with roster management
- Player-to-team and team-to-player matching system

**Tournament and League Organization**

- Tournament creation and management system
- League scheduling and standings
- Match result tracking and statistics
- Integration with RIOT API for game data

**Authentication and Backend**

- User registration and login via Supabase
- Email verification and communication
- Data storage for user profiles, teams, and tournament data

### Technology Stack

**Frontend**
- Vue.js 3 with TypeScript
- Vite for build tooling and development server
- Vue Router for client-side routing
- Pinia for state management
- Vitest for unit testing
- Playwright for end-to-end testing
- ESLint + Prettier for code quality
- Responsive design with CSS3 and modern layout techniques

**Backend and Services**
- Supabase for:
  - Authentication and user management
  - PostgreSQL database
  - Real-time subscriptions
  - File storage
- RIOT API for player and game statistics

### Detailed Requirements

**User Registration and Profiles**

1. Allow users to sign up using email or social media accounts
2. Implement email verification using Supabase
3. Create player profiles with:
   - Basic info (username, rank, preferred roles)
   - Stats pulled from RIOT API (win rate, KDA, etc.)
   - Team affiliations and availability status

**Team Management**

1. Enable users to create and manage teams
2. Team profiles should include:
   - Team name, logo, and description
   - Roster of current players
   - Team stats (wins, losses, tournament placements)
3. Implement a team search function for players looking to join

**Matchmaking System**

1. Allow players to browse and apply to teams
2. Enable teams to post openings and review player applications
3. Implement filters for rank, roles, and availability

**Tournament and League Organization**

1. Integrate RIOT API for tournament data
2. Allow users to create and manage leagues with multiple teams
3. Implement a scheduling system for matches
4. Display tournament brackets and league standings
5. Automatically update results and statistics after matches

**Communication**

1. Implement a messaging system for players and teams using Supabase real-time features
2. Set up automated email notifications for important events using Supabase Edge Functions

### User Interface

- Design a clean, intuitive interface with easy navigation
- Create separate dashboards for players and team managers
- Implement responsive design for mobile and desktop use

### Data Management

- Use Supabase PostgreSQL for storing user profiles, team data, and platform-specific information
- Integrate RIOT API for real-time player and game statistics
- Implement efficient caching strategies for API responses

### Security and Compliance

1. Implement secure authentication through Supabase
2. Ensure compliance with data protection regulations (GDPR, CCPA)
3. Implement rate limiting and API key management for RIOT API integration

### Monetization Strategy

1. Offer premium features for players and teams (advanced stats, priority matching)
2. Implement subscription tiers with different feature sets
3. Explore sponsorship opportunities for leagues and tournaments

### Development Approach

1. Utilize Supabase's built-in features to minimize custom backend development
2. Focus on creating a robust frontend with Vue.js and TypeScript
3. Use a modular approach to allow for future expansions and improvements
4. Implement comprehensive testing with Vitest and Playwright

### Timeline and Milestones

Phase 1 - Foundation (Completed)
- Project setup with Vue 3, TypeScript, and Vite
- Basic routing and state management implementation
- Initial UI components and layouts

Phase 2 - Core Features (In Progress)
- User authentication with Supabase
- Player profile creation and management
- Team management system
- Basic matchmaking functionality

Phase 3 - Advanced Features (Upcoming)
- Tournament and league management
- Advanced statistics and analytics
- Premium features implementation
- Mobile responsiveness optimization

Phase 4 - Launch Preparation
- Comprehensive testing
- Performance optimization
- Documentation
- Beta testing and feedback implementation

Citations:
[1] https://www.reddit.com/r/esports/comments/92vd78/is_game_developerran_leagues_and_tournaments_the/
[2] https://gametree.me/league-of-legends-lfg/
[3] https://www.restack.io/docs/supabase-knowledge-supabase-email-verification
[4] https://developer.riotgames.com
[5] https://esportsinsider.com/2024/10/league-of-legends-lta-teams-format-american-league
[6] https://riftq.com
[7] https://docs.flutterflow.io/integrations/authentication/supabase/email/
[8] https://stackoverflow.com/questions/76031708/collect-results-from-all-professional-competitive-league-of-legends-games
[9] https://www.youtube.com/watch?v=JgDNK1-zso8
[10] https://teamfind.com/league-of-legends/lobby
[11] https://supabase.com/features/email-login
[12] https://www.youtube.com/watch?v=mpndHZ8UzaM
[13] https://www.riotgames.com/en/news/building-the-future-of-sport-at-riot-games
[14] https://teams.gg
[15] https://tapin.gg

### Changelog

#### Version 1.0.1 (2024-01-09)
- Updated technology stack to reflect current implementation
- Removed Challengermode API integration from initial scope
- Added Vue Router and Pinia to frontend stack
- Expanded Supabase implementation details
- Updated timeline to reflect current project status
- Added version tracking and changelog

#### Version 1.0.0 (2023-12-15)
- Initial PRD document creation
- Defined core features and requirements
- Outlined development approach and timeline
