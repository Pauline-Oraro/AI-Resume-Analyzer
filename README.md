# AI Resume Analyzer

> An AI-powered resume analysis platform that helps job seekers evaluate resumes against job descriptions, receive ATS insights, and improve their applications.

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://ai-resume-analyzer-six-pi.vercel.app)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![React Router](https://img.shields.io/badge/React_Router-7-CA4245?logo=react-router&logoColor=white)](https://reactrouter.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Puter.js](https://img.shields.io/badge/Puter.js-Cloud-blue)](https://puter.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

**Live application:** [https://ai-resume-analyzer-six-pi.vercel.app](https://ai-resume-analyzer-six-pi.vercel.app)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Application Routes](#application-routes)
- [How It Works](#how-it-works)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Puter.js Setup](#puterjs-setup)
- [Available Scripts](#available-scripts)
- [Docker](#docker)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Overview

AI Resume Analyzer is a web application for reviewing resumes and understanding how effectively they align with a target job description. Users can upload a PDF resume, provide job information, and receive structured feedback including an overall score, ATS compatibility assessment, and category-specific recommendations.

The project uses React Router for navigation, Puter.js for browser-based authentication, cloud storage, AI analysis, and file handling, and Zustand for state management.

## Features

- Create or sign in with a Puter account
- Upload resume PDF files through a drag-and-drop interface
- Enter a company name, job title, and job description
- Convert resume PDFs into preview images
- Store resume and analysis data in Puter
- Generate AI-powered resume feedback
- View an overall resume score
- Review ATS compatibility and recommendations
- Inspect scores across tone and style, content, structure, and skills
- Browse previously analyzed resumes
- Delete saved resume records
- Responsive interface for desktop and mobile devices

## Tech Stack

| Category | Technology |
| --- | --- |
| UI | React 19 |
| Framework/router | React Router 7 |
| Language | TypeScript 5.8 |
| Styling | Tailwind CSS 4 |
| State management | Zustand 5 |
| Cloud/auth/AI/storage | Puter.js |
| PDF preview | PDF.js |
| File uploads | React Dropzone |
| Build tool | Vite 6 |
| Deployment | Vercel, Docker |

## Application Routes

| Route | Purpose |
| --- | --- |
| `/` | Lists previously analyzed resumes and provides access to the upload flow |
| `/auth` | Authenticates the user through Puter.js |
| `/upload` | Accepts resume details and uploads a PDF for analysis |
| `/resume/:id` | Displays the PDF preview and detailed AI analysis |

## How It Works

1. **Sign in:** The application redirects unauthenticated users to the Puter authentication flow.
2. **Upload:** A user submits a PDF resume together with the company name, job title, and job description.
3. **Prepare:** PDF.js converts the uploaded resume into an image for browser preview.
4. **Store:** The original PDF, preview image, and analysis metadata are stored through Puter services.
5. **Analyze:** Puter AI evaluates the resume against the supplied job description.
6. **Review:** The application presents the ATS score, summary, recommendations, and category breakdowns.
7. **Manage:** Previously analyzed resumes remain available from the home page until deleted.

## Project Structure

```text
AI-Resume-Analyzer/
├── app/
│   ├── components/          # Resume cards, upload UI, score displays, and details
│   │   ├── ATS.tsx
│   │   ├── Accordion.tsx
│   │   ├── Details.tsx
│   │   ├── FileUploader.tsx
│   │   ├── Navbar.tsx
│   │   ├── ResumeCard.tsx
│   │   ├── ScoreBadge.tsx
│   │   ├── ScoreCircle.tsx
│   │   ├── ScoreGauge.tsx
│   │   └── Summary.tsx
│   ├── constants/           # Prompt templates and feedback structures
│   ├── lib/
│   │   ├── pdf2img.ts       # PDF preview conversion
│   │   ├── puter.ts         # Puter authentication and service integration
│   │   └── utils.ts         # Shared formatting helpers
│   ├── routes/              # Home, authentication, upload, and resume pages
│   ├── routes.ts            # Route configuration
│   ├── root.tsx             # Root application layout
│   └── app.css              # Global application styles
├── public/                  # Static assets and public resources
├── types/                   # TypeScript declarations
├── Dockerfile               # Docker deployment configuration
├── package.json
├── react-router.config.ts
├── vite.config.ts
└── tsconfig.json
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 20 or newer
- npm
- A [Puter](https://puter.com/) account

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Pauline-Oraro/AI-Resume-Analyzer.git
cd AI-Resume-Analyzer
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open the local URL printed in the terminal, typically `http://localhost:5173`.

5. Sign in with Puter when prompted.

## Puter.js Setup

Puter.js is used for:

- User authentication
- Cloud storage
- AI text analysis
- File and image operations
- Persistent resume records

This project does not require an API key in a local `.env` file for basic Puter functionality. When the application starts, it loads Puter's browser SDK and creates a Puter session. Create a Puter account and sign in to use the upload, storage, and AI features.

If deployed to a new domain, verify that the Puter SDK and authentication popup are allowed to load in the browser and that third-party cookies are not blocked.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the React Router development server |
| `npm run build` | Create a production build |
| `npm start` | Serve the built application using React Router Serve |
| `npm run typecheck` | Generate route types and run TypeScript checking |

## Docker

Build the Docker image:

```bash
docker build -t ai-resume-analyzer .
```

Run the container:

```bash
docker run --rm -p 3000:3000 ai-resume-analyzer
```

Open `http://localhost:3000` and sign in with Puter.

## Deployment

The application is currently hosted on Vercel.

For another hosting provider:

1. Install dependencies.
2. Run `npm run build`.
3. Configure the React Router build as required by the host.
4. Ensure all `/auth`, `/upload`, and `/resume/:id` routes are handled by the application rather than returning a static host 404.
5. Confirm that Puter authentication and browser storage are available on the deployment domain.

## Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a feature branch:

```bash
git checkout -b feature/your-feature-name
```

3. Make your changes.
4. Run checks:

```bash
npm run typecheck
npm run build
```

5. Commit the changes and open a pull request.

Please avoid committing personal resume files or sensitive user data.

## License

No license has been specified for this repository. All rights are reserved by the repository owner unless an open-source license is explicitly added.
