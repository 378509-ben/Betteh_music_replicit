# Betteh Music - Music Entertainment Platform

## Overview

Betteh Music is a full-stack web application for a music and entertainment services company. The platform showcases DJ services, live bands, equipment rental, and event management capabilities. Built with a modern React frontend and Express backend, it features a music-themed dark gradient design with interactive elements including a persistent music player, contact form submissions, and a comprehensive gallery system.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Tooling**
- React with TypeScript for type-safe component development
- Vite as the build tool and development server for fast HMR (Hot Module Replacement)
- Wouter for lightweight client-side routing instead of React Router
- TanStack Query (React Query) for server state management and API data fetching

**UI Component System**
- Shadcn/ui component library with Radix UI primitives for accessible, unstyled components
- Tailwind CSS for utility-first styling with custom design tokens
- Custom theming system using CSS variables for dark mode support with gradient backgrounds
- Class Variance Authority (CVA) for type-safe component variants

**Design System**
- Dark gradient theme (background: hsl(218 75% 6%)) with electric blue primary accents
- Custom color palette defined via CSS custom properties supporting both light/dark modes
- Typography using Inter/Poppins fonts from Google Fonts
- Responsive grid layouts: mobile-first breakpoints (md: 768px, lg: 1024px)
- Consistent spacing scale using Tailwind's spacing units

**State Management**
- React Context API for global music player state (MusicPlayerProvider)
- Local component state with useState/useRef hooks
- Form state managed by React Hook Form with Zod validation
- Toast notifications via custom useToast hook

**Routing Structure**
- Home page (/) - Hero section with services overview
- About (/about) - Company story, timeline, and values
- Entertainment (/entertainment) - Service details (DJ, live bands, equipment)
- Gallery (/gallery) - Image gallery with category filtering
- Staff (/staff) - Team member profiles
- Contact (/contact) - Contact form with backend integration
- 404 page for unmatched routes

### Backend Architecture

**Server Framework**
- Express.js as the HTTP server framework
- TypeScript for type safety across the backend
- ESM (ES Modules) module system configured via package.json

**API Design**
- RESTful API endpoints under `/api` prefix
- POST /api/contact - Submit contact form data
- GET /api/contacts - Retrieve all contact submissions
- JSON request/response format with proper error handling
- Request body validation using Zod schemas

**Data Layer**
- In-memory storage implementation (MemStorage) with Map-based data structures
- Interface-based storage abstraction (IStorage) for future database migration
- UUID-based entity IDs using Node's crypto.randomUUID()

**Validation & Error Handling**
- Zod schemas for runtime type validation of request payloads
- zod-validation-error for user-friendly validation error messages
- Try-catch blocks with appropriate HTTP status codes (400, 500)
- Request logging middleware tracking method, path, status, and duration

**Development Features**
- Vite middleware mode for seamless frontend integration during development
- HMR (Hot Module Replacement) support via Vite's dev server
- Custom logging utility with formatted timestamps
- Runtime error overlay plugin for development

### Database Schema

**Contact Form Table**
- Designed for PostgreSQL using Drizzle ORM
- Schema defined in shared/schema.ts for type sharing between client/server
- Fields: id (UUID primary key), name, email, phone (optional), eventType (optional), message, createdAt timestamp
- Drizzle-Zod integration for automatic Zod schema generation from database schema

**User Table**
- Minimal user schema with id, username, and password fields
- Currently unused but provides foundation for future authentication system

**Migration Strategy**
- Drizzle Kit configured for PostgreSQL dialect
- Migration files output to ./migrations directory
- Database URL from environment variable (DATABASE_URL)
- "db:push" script for schema synchronization without migrations

## External Dependencies

### Core Frameworks
- **React 18+** - Frontend UI library with concurrent features
- **Express** - Minimal Node.js web framework for REST API
- **TypeScript** - Type safety across frontend and backend
- **Vite** - Fast build tool and dev server with plugin ecosystem

### Database & ORM
- **Drizzle ORM** - TypeScript ORM for PostgreSQL with type-safe queries
- **@neondatabase/serverless** - Serverless PostgreSQL driver for Neon database
- **Drizzle-Zod** - Integration for generating Zod schemas from Drizzle tables

### UI Component Libraries
- **Radix UI** - 20+ unstyled, accessible component primitives (Dialog, Dropdown, Accordion, etc.)
- **Shadcn/ui** - Pre-styled components built on Radix UI with Tailwind
- **Tailwind CSS** - Utility-first CSS framework with custom configuration
- **Lucide React** - Icon library for consistent iconography

### Form Handling & Validation
- **React Hook Form** - Performant form state management with minimal re-renders
- **Zod** - TypeScript-first schema validation library
- **@hookform/resolvers** - Resolver for integrating Zod with React Hook Form

### State Management & Data Fetching
- **TanStack Query (React Query)** - Server state management with caching and background updates
- **Wouter** - Minimalist routing library (~1KB alternative to React Router)

### Additional Utilities
- **date-fns** - Modern JavaScript date utility library
- **clsx** & **tailwind-merge** - Utility for conditional className merging
- **class-variance-authority** - Type-safe component variant handling
- **cmdk** - Command menu component (Command+K interface)
- **embla-carousel-react** - Carousel/slider component

### Development Tools
- **@replit/vite-plugin-runtime-error-modal** - Error overlay for Replit environment
- **@replit/vite-plugin-cartographer** - Code mapping tool for Replit
- **esbuild** - Fast JavaScript bundler for production builds
- **tsx** - TypeScript execution engine for development

### Session & Storage (Prepared but not actively used)
- **connect-pg-simple** - PostgreSQL session store for Express sessions
- Indicates future authentication/session management capability

### Font Loading
- **Google Fonts** - Inter, Poppins, DM Sans, Architects Daughter, Fira Code, Geist Mono
- Preconnect to fonts.googleapis.com and fonts.gstatic.com for performance

### Asset Management
- Custom alias configuration (@assets) pointing to attached_assets directory
- Static asset serving through Vite in development, Express in production
- Image assets stored in attached_assets/generated_images directory