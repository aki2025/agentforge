AgentForge - README Notebook
Welcome to AgentForge, a platform for creating autonomous agents to automate tasks across various domains using a modular backend and an interactive frontend. This README serves as a detailed notebook, covering every aspect of the project—from setup to deployment—to help you understand, contribute, or deploy this system effectively.
Table of Contents
Project Overview (#project-overview)
What is AgentForge? (#what-is-agentforge)

Key Features (#key-features)

File Structure (#file-structure)
Root Directory (#root-directory)

Backend Directory (#backend-directory)

Frontend Directory (#frontend-directory)

Prerequisites (#prerequisites)
Software Requirements (#software-requirements)

Environment Variables (#environment-variables)

Local Setup (#local-setup)
Using Docker Compose (#using-docker-compose)

Manual Setup (#manual-setup)

Usage (#usage)
Creating Agents (#creating-agents)

Slack Integration (#slack-integration)

Marketplace (#marketplace)

Deployment (#deployment)
Heroku Deployment (#heroku-deployment)

One-Click Deployment (#one-click-deployment)

Development (#development)
Adding New Features (#adding-new-features)

Testing (#testing)

Logging (#logging)

Troubleshooting (#troubleshooting)
Common Issues (#common-issues)

Git Push Errors (#git-push-errors)

Contributing (#contributing)
How to Contribute (#how-to-contribute)

Code Style (#code-style)

License (#license)

Project Overview
What is AgentForge?
AgentForge is a full-stack application designed to simplify the creation and management of autonomous agents. These agents can perform tasks like sending SMS, scheduling events, or executing custom API calls, all driven by natural language processing (NLP) and a task queue system. The project integrates a Node.js/Express backend with a React frontend, offering a 3D globe visualization and a wizard-based agent creation interface.
Key Features
Agent Creation: Define tasks and follow-up actions via a web wizard or Slack commands.

NLP Task Parsing: Uses Hugging Face Transformers to interpret task intent (e.g., "send text" or "schedule").

API Integrations: Supports Twilio for SMS, Stripe for payments, and Slack for bot interactions.

Visualization: A 3D globe displays agent locations using Three.js.

Marketplace: Purchase pre-built agents with Stripe Checkout.

Scalability: Built with MongoDB, Redis caching, and Docker for robust deployment.

File Structure
Root Directory

/agentforge/
├── docker-compose.yml      # Configures local dev environment (backend, frontend, MongoDB, Redis)
├── Dockerfile             # Docker setup for backend deployment
├── app.json               # Heroku one-click deployment config
├── push_to_git.bat        # Windows script to push to GitHub
├── README.md              # This detailed documentation
└── package.json           # Optional root-level metadata

Backend Directory

/backend/
├── models/                # MongoDB schemas
│   ├── Agent.js          # Agent schema (task, status, coordinates)
│   ├── User.js           # User schema (authentication)
│   └── CustomAPI.js      # Custom API schema (user-defined APIs)
├── routes/                # API endpoints
│   ├── agents.js         # Agent creation and listing
│   ├── auth.js           # User authentication
│   └── marketplace.js    # Agent purchasing
├── auth.js                # JWT authentication middleware
├── server.js              # Main Express server
├── taskQueue.js           # Task processing with NLP and queue
├── slackBot.js            # Slack bot integration
├── package.json           # Backend dependencies
└── .env                   # Environment variables (API keys)

Frontend Directory

/frontend/
├── public/                # Static assets
│   ├── index.html        # HTML entry point
│   └── favicon.ico       # Browser favicon (placeholder)
├── src/                   # React source code
│   ├── components/       # React components
│   │   ├── AgentDashboard.js      # Main dashboard
│   │   ├── GlobeVisualization.js  # 3D globe
│   │   └── CreateAgentWizard.js   # Agent creation wizard
│   ├── App.js            # Root component
│   ├── App.css           # Global styles
│   ├── index.js          # React entry point
│   └── package.json      # Frontend dependencies
└── .env                   # Frontend env vars (API URL)

Prerequisites
Software Requirements
Node.js: v16+ (for backend and frontend)

Docker: For containerized local setup

Git: For version control

MongoDB: Local or cloud instance (e.g., MongoDB Atlas)

Redis: For caching (optional locally)

Environment Variables
Create .env files in backend/ and frontend/ with these variables:
backend/.env

PORT=3000
MONGO_URI=mongodb://localhost:27017/agentforge
JWT_SECRET=your-secret-key
TWILIO_SID=your-twilio-sid
TWILIO_TOKEN=your-twilio-token
TWILIO_NUMBER=your-twilio-number
SLACK_TOKEN=your-slack-token
STRIPE_SECRET_KEY=your-stripe-secret-key

frontend/.env

REACT_APP_API_URL=http://localhost:3000

Obtain API keys from Twilio, Slack, and Stripe.

Local Setup
Using Docker Compose
Clone the Repository:
cmd

git clone https://github.com/aki2025/agentforge.git
cd agentforge

Start Services:
cmd

docker-compose up --build

Backend: http://localhost:3000

Frontend: http://localhost:3001

MongoDB: localhost:27017

Redis: localhost:6379

Stop Services:
cmd

Ctrl+C
docker-compose down

Manual Setup
Backend:
cmd

cd backend
npm install
npm start

Frontend:
cmd

cd frontend
npm install
npm start

Dependencies:
Install MongoDB and Redis locally or use cloud services.

Usage
Creating Agents
Via Web:
Open http://localhost:3001.

Use the "Create Agent" wizard:
Enter a task (e.g., "Send text to +1234567890 with Hello").

Add an optional follow-up task.

Submit to queue the task.

Via Slack:
Use the Slack bot command: /agentforge create "task description".

Slack Integration
Add the bot to your Slack workspace using the SLACK_TOKEN.

Tasks created via Slack are processed and logged in the dashboard.

Marketplace
Access /api/marketplace/purchase to buy pre-built agents with Stripe.

Requires authentication and a valid Stripe key.

Deployment
Heroku Deployment
Install Heroku CLI:
Download from Heroku.

Login:
cmd

heroku login

Create App:
cmd

heroku create aki2025-agentforge

Set Environment Variables:
cmd

heroku config:set MONGO_URI=<your-mongo-uri> JWT_SECRET=<your-secret>

Deploy:
cmd

git push heroku main

Add-ons:
cmd

heroku addons:create mongolab
heroku addons:create heroku-redis

One-Click Deployment
Use the Heroku button in this README:
![Deploy](https://www.herokucdn.com/deploy/button.svg)

Development
Adding New Features
Backend: Add routes in routes/ and models in models/.

Frontend: Create components in src/components/.

Example: Add a new API integration in taskQueue.js.

Testing
Backend:
cmd

cd backend
npm test

Uses Jest for unit and integration tests.

Logging
Winston logs errors and events to error.log and combined.log in backend/.

Troubleshooting
Common Issues
MongoDB Connection: Ensure MONGO_URI is correct.

API Keys: Verify Twilio, Slack, and Stripe keys in .env.

Port Conflicts: Change PORT if 3000/3001 are in use.

Git Push Errors
"Repository not found": Confirm https://github.com/aki2025/agentforge exists and remote is set:
cmd

git remote -v

"Rejected (fetch first)": Pull remote changes:
cmd

git pull origin main --allow-unrelated-histories

Contributing
How to Contribute
Fork the repo: https://github.com/aki2025/agentforge.

Create a branch: git checkout -b feature-name.

Commit changes: git commit -m "Add feature".

Push: git push origin feature-name.

Open a pull request.

Code Style
Use 2-space indentation.

Follow ESLint defaults for JavaScript.

License
This project is licensed under the MIT License. See LICENSE for details (to be added).

