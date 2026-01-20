# Eagle Groups - Corporate IT Services Website

## Overview

Eagle Groups (egalgroup.in) is a premium corporate website for a strategic IT services and digital transformation company. The application delivers an enterprise-grade marketing and lead generation platform featuring modern animations, contact form submissions, and a polished dark navy design aesthetic.

The site targets startups, SMEs, and global enterprises seeking web development, mobile applications, cloud infrastructure, and AI integration services.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with CSS custom properties for theming
- **Component Library**: shadcn/ui (Radix UI primitives with custom styling)
- **Animations**: Framer Motion for page transitions and scroll reveals
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite with custom plugins for Replit integration

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript (ESM modules)
- **API Pattern**: REST endpoints defined in `shared/routes.ts` with Zod schemas for type-safe request/response validation
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Session Storage**: connect-pg-simple for PostgreSQL-backed sessions

### Project Structure
```
client/           # React frontend application
  src/
    components/   # Reusable UI components
    pages/        # Route-based page components
    hooks/        # Custom React hooks
    lib/          # Utility functions and query client
server/           # Express backend
  routes.ts       # API endpoint definitions
  storage.ts      # Database access layer
  db.ts           # Database connection
shared/           # Shared types and schemas
  schema.ts       # Drizzle table definitions
  routes.ts       # API route contracts with Zod
```

### Design Decisions
- **Monorepo Structure**: Client and server share types through `@shared` path alias, ensuring type safety across the stack
- **Schema-First API**: Routes defined with Zod schemas in shared folder enable compile-time type checking for both client and server
- **Dark Theme**: Uses HSL CSS variables for consistent dark navy color scheme with electric blue accents
- **Component Architecture**: shadcn/ui components are copied into the project (not imported from npm), allowing full customization

## External Dependencies

### Database
- **PostgreSQL**: Primary data store accessed via `DATABASE_URL` environment variable
- **Drizzle Kit**: Database migrations stored in `/migrations` directory, pushed with `npm run db:push`

### Third-Party Services
- No external API integrations currently configured
- Infrastructure is set up to support future integrations (Stripe, OpenAI, nodemailer dependencies present in build allowlist)

### Key Runtime Dependencies
- `express` - HTTP server framework
- `drizzle-orm` + `pg` - Database access
- `@tanstack/react-query` - Client-side data fetching
- `framer-motion` - Animation library
- `zod` - Runtime schema validation
- Radix UI primitives - Accessible UI components