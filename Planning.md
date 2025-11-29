# Cohortive - Project Planning & Architecture

## 1. Project Overview
Cohortive is a Peer-to-Peer Learning & Mentorship Platform connecting users to teach and learn skills.
**Core Value Proposition**: "Earn by teaching, spend to learn."

## 2. Architecture: Microfrontends & Microservices
To ensure scalability and maintainability, we will use a distributed architecture.

### 2.1 Frontend: Microfrontends (MFE)
We will use **React** with **Vite** and **Module Federation**.
*   **Host App (Shell)**: Manages routing, layout, and shared state (User Session).
*   **Auth MFE**: Login, Signup, Forgot Password.
*   **Dashboard MFE**: User profile, stats, credit balance.
*   **Marketplace MFE**: Search mentors, skill listings, matching UI.
*   **Session MFE**: Video calls, chat, whiteboard.

**Tech Stack**:
*   Framework: React 18+
*   Build Tool: Vite
*   Styling: Tailwind CSS
*   State Management: Zustand (lightweight, good for sharing across MFEs)
*   Routing: React Router v6

### 2.2 Backend: Microservices
We will use **Node.js** with **Express** (lightweight) or **NestJS** (structured). Given the scale, **Express** is sufficient for "free tier" efficiency, but **NestJS** is better for strict structure. We will use **Express** for simplicity and speed in this plan, organized in a monorepo.

*   **API Gateway**: Single entry point, routes requests to services, handles rate limiting.
*   **Auth Service**: User identity, JWT issuance.
*   **User Service**: Profiles, reputation score.
*   **Skill Service**: Skills taxonomy, user skills, credits ledger.
*   **Match Service**: Matching algorithm (Python or Node.js logic).
*   **Communication Service**: Signaling for WebRTC, Chat history (Socket.io).

**Tech Stack**:
*   Runtime: Node.js
*   Framework: Express.js
*   Database:
    *   **PostgreSQL** (Supabase Free Tier): Users, Transactions, Structured Data.
    *   **MongoDB** (Atlas Free Tier): Chat logs, unstructured skill metadata.
    *   **Redis** (Upstash Free Tier): Caching, Session store, Matchmaking queue.

## 3. "Free to Build" Strategy (Zero Cost)
*   **Hosting**:
    *   Frontend: **Vercel** (Free for hobby/non-commercial).
    *   Backend: **Render** (Free tier for web services) or **Railway** (Trial/Free tier).
    *   Database: **Supabase** (500MB free), **MongoDB Atlas** (512MB free).
*   **Video/Audio**:
    *   **WebRTC**: Peer-to-Peer (Free).
    *   **Signaling**: Self-hosted Socket.io on Render.
    *   **STUN Server**: Google's public STUN servers (Free).
    *   **TURN Server**: OpenRelay (Free tier) or fallback to P2P only (works 80% of time).
*   **Images/Files**: **Cloudinary** (Free tier) or **Supabase Storage**.
*   **Design**: **Figma** (Free).
*   **CI/CD**: **GitHub Actions** (Free minutes).

## 4. Folder Structure (Monorepo)
We will use **Turborepo** to manage the workspace.

```text
Cohortive/
├── apps/
│   ├── frontend/
│   │   ├── host/           # The Shell Application
│   │   ├── auth/           # Authentication MFE
│   │   ├── dashboard/      # User Dashboard MFE
│   │   └── session/        # Video/Chat MFE
│   └── backend/
│       ├── gateway/        # API Gateway
│       ├── auth-service/   # Authentication Logic
│       ├── user-service/   # User Management
│       └── match-service/  # Matching Algorithm
├── packages/
│   ├── ui/                 # Shared React Components (Tailwind)
│   ├── config/             # Shared TSConfig, ESLint, Tailwind Config
│   └── utils/              # Shared helper functions
├── docker/                 # Docker compose for local dev
├── package.json
├── turbo.json
└── README.md
```

## 5. Implementation Roadmap

### Phase 1: Setup & Scaffolding
1.  Initialize Turborepo.
2.  Set up Frontend Host + Remotes (Vite).
3.  Set up Backend Services (Express).
4.  Configure Shared UI Library.

### Phase 2: Core Identity & Profiles
1.  **Auth Service**: Register/Login, JWT.
2.  **User Service**: Profile CRUD.
3.  **Frontend**: Auth pages, Profile page.

### Phase 3: Skills & Credits
1.  **Skill Service**: Add skills, search skills.
2.  **Credits**: Ledger system (mock payment for now).
3.  **Frontend**: Marketplace UI.

### Phase 4: Matching & Sessions
1.  **Match Service**: Basic algorithm (tag matching).
2.  **Communication Service**: Socket.io setup.
3.  **Frontend**: Video call UI (WebRTC integration).

### Phase 5: Deployment
1.  Dockerize services.
2.  Deploy to Vercel (Frontend) and Render (Backend).

## 6. Automation & Commands
*   `npm run dev`: Starts all apps in parallel.
*   `npm run build`: Builds all apps.
*   `npm run lint`: Lints entire monorepo.
