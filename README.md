# AgencyOS

A modern client portal & project management SaaS built for web agencies.
Agencies manage clients, projects, tasks, invoices and communication —
clients track progress, upload files, approve work and message the team —
all from one clean dashboard.

## Features
- Role-based authentication (Admin & Client)
- Protected dashboard routes
- Project tracking with progress %, status, deadlines
- Kanban-style task management
- File uploads
- Client messaging
- Invoice tracking
- Calendar / meeting scheduling
- Analytics charts
- Dark / light mode
- Fully responsive, mobile-first UI
- SEO optimized (metadata, OpenGraph, sitemap, robots.txt)
- Lighthouse score target: 95+ across Performance, Accessibility, Best Practices, SEO

## Tech Stack
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Supabase (Auth + Database)
- Framer Motion
- Recharts
- Lucide Icons

## Getting Started

\`\`\`bash
npm install
cp .env.example .env.local   # add your Supabase keys
npm run dev
\`\`\`

Visit `http://localhost:3000`

## Demo Accounts
- **Admin Demo** — manage clients, projects, invoices, tasks
- **Client Demo** — track progress, upload files, approve work, message the agency

## Folder Structure
See project source for full `src/app`, `src/components`, `src/lib` structure
(App Router based, grouped by auth / dashboard / admin / client routes).

## Roadmap
- [ ] Messages (real-time via Supabase Realtime)
- [ ] Invoice PDF generation
- [ ] Calendar / Google Meet integration
- [ ] File uploads via Cloudinary
- [ ] Notifications system

## License
Copyright © 2026 SK Baloch. All Rights Reserved.
See [LICENSE](./LICENSE) for details.

---
Created by **SK Baloch** — Frontend Developer
Portfolio: https://sk-baloch.vercel.app/
GitHub: https://github.com/itxskbaloch4-jpg
