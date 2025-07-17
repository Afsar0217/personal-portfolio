# Portfolio Website - Henry Clark

## Overview

This is a modern full-stack portfolio website built with React, TypeScript, and Express. The application showcases a developer's skills, projects, and provides a contact form for potential clients. It features a sleek, animated interface with smooth scrolling and modern design patterns.

## User Preferences

Preferred communication style: Simple, everyday language.
- Normal browser scrolling (no smooth scroll libraries)
- Animated hero background with floating elements
- Removed Reviews/Testimonials section

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens
- **Animations**: GSAP for advanced animations with normal browser scrolling
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for development and build process

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Storage**: In-memory storage with interface for future database integration
- **API Design**: RESTful API with JSON responses
- **Validation**: Zod for runtime type validation

## Key Components

### Frontend Components
- **Header**: Fixed navigation with smooth scroll to sections
- **Hero**: Main landing section with animated elements
- **About**: Personal information and images
- **Skills**: Technical skills with progress bars and tool showcases
- **Work**: Portfolio projects with filtering capabilities

- **Contact**: Contact form with real-time validation
- **Footer**: Links and additional information

### Backend Components
- **Contact API**: Handles form submissions with validation
- **Storage Layer**: Abstract interface supporting multiple storage backends
- **Error Handling**: Centralized error handling with proper HTTP status codes

### UI System
- **Design System**: Consistent color scheme with CSS custom properties
- **Component Library**: Comprehensive UI components from shadcn/ui
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Accessibility**: ARIA-compliant components from Radix UI

## Data Flow

### Contact Form Submission
1. User fills out contact form in the frontend
2. Form data is validated using Zod schema on client-side
3. API request sent to `/api/contact` endpoint
4. Server validates data again using shared schema
5. Data stored in memory storage (ready for database integration)
6. Success/error response sent back to client
7. Toast notification displayed to user

### Data Validation
- **Shared Schemas**: Zod schemas defined in `shared/schema.ts` for consistent validation
- **Type Safety**: TypeScript types derived from Zod schemas
- **Runtime Validation**: Both client and server perform validation

## External Dependencies

### Core Dependencies
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Headless UI components
- **drizzle-orm**: Type-safe SQL toolkit (prepared for database integration)
- **zod**: Runtime type validation
- **wouter**: Lightweight React router

### Development Dependencies
- **Vite**: Build tool and development server
- **TypeScript**: Type checking and compilation
- **Tailwind CSS**: Utility-first CSS framework
- **ESBuild**: Fast JavaScript bundler for production

### External Services
- **Fonts**: Google Fonts (Barlow, Open Sans, Poppins)
- **Images**: Unsplash for placeholder images
- **CDN Libraries**: GSAP loaded from CDN for animations

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds React app to `dist/public`
- **Backend**: ESBuild bundles server code to `dist/index.js`
- **Static Assets**: Frontend assets served by Express in production

### Environment Configuration
- **Development**: Vite dev server with HMR and Express API
- **Production**: Single Express server serving both API and static files
- **Database**: Configured for PostgreSQL with Drizzle ORM (environment-dependent)

### Scripts
- `npm run dev`: Development mode with hot reload
- `npm run build`: Production build
- `npm run start`: Production server
- `npm run db:push`: Database schema migration

### Database Integration
- **ORM**: Drizzle configured for PostgreSQL
- **Migrations**: Schema files in `shared/schema.ts`
- **Connection**: Environment variable `DATABASE_URL` required
- **Provider**: Compatible with Neon Database or any PostgreSQL instance

The application is designed to be easily deployable on platforms like Vercel, Railway, or any Node.js hosting service with minimal configuration changes.