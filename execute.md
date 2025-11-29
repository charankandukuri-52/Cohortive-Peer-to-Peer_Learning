# Execution Guide - Cohortive

This document provides detailed steps to run the Cohortive platform and lists the access URLs for each module.

## Prerequisites
*   **Node.js**: v18 or higher
*   **npm**: v9 or higher

## 1. Installation
Before running any services, install the dependencies for the entire monorepo.

```bash
# Run from the root directory
npm install
```

## 2. Running the Project
We use **Turborepo** to run all applications and services in parallel.

**IMPORTANT**: You must build the project first to generate the remote entry files for the microfrontends.

```bash
# 1. Build all apps
npm run build

# 2. Start all frontend apps and backend services
npm run dev
```

This command will start the following processes:

### Frontend Applications (Microfrontends)
| Module | Type | Description | URL |
| :--- | :--- | :--- | :--- |
| **Host** | Shell App | The main container application that loads other remotes. | [http://localhost:5173](http://localhost:5173) |
| **Auth** | Remote MFE | Handles Login and Registration flows. | [http://localhost:5001](http://localhost:5001) |
| **Dashboard** | Remote MFE | User dashboard, stats, and credit balance. | [http://localhost:5002](http://localhost:5002) |

### Backend Microservices
| Service | Type | Description | URL |
| :--- | :--- | :--- | :--- |
| **API Gateway** | Gateway | Single entry point for all backend requests. Proxies to other services. | [http://localhost:8000](http://localhost:8000) |
| **Auth Service** | Microservice | Handles authentication logic (JWT). | [http://localhost:8001](http://localhost:8001) |
| **User Service** | Microservice | Manages user profiles and data. | [http://localhost:8002](http://localhost:8002) |
| **Match Service** | Microservice | Handles skill matching logic. | [http://localhost:8003](http://localhost:8003) |

## 3. Running Individual Modules
If you wish to run a specific module in isolation, you can use the workspace command.

**Frontend:**
```bash
# Run only the Host app
npm run dev --workspace=host

# Run only the Auth app
npm run dev --workspace=auth
```

**Backend:**
```bash
# Run only the Gateway
npm run dev --workspace=gateway

# Run only the User Service
npm run dev --workspace=user-service
```

## 4. Building for Production
To build all applications for production:

```bash
npm run build
```

This will run the build script for every workspace.
*   Frontend apps will be built to `dist/` folders.
*   Backend services are simple Node.js apps and don't require a transpile step (unless using TypeScript in the future), but the build command verifies they are valid.

## 5. Troubleshooting
*   **Port Conflicts**: Ensure ports 5173, 5001, 5002, 8000-8003 are free.
*   **ESM/CJS Issues**: If you see errors about `module is not defined`, ensure your config files (tailwind, postcss) end in `.cjs`.
