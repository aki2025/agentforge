# AgentForge - Autonomous Agent Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  
[![GitHub Issues](https://img.shields.io/github/issues/aki2025/agentforge)](https://github.com/aki2025/agentforge/issues)  
[![GitHub Stars](https://img.shields.io/github/stars/aki2025/agentforge)](https://github.com/aki2025/agentforge/stargazers)

## Installation

### Prerequisites
- **Node.js** (v16 or higher) - [Install Node.js](https://nodejs.org/)
- **MongoDB** - [Install MongoDB](https://www.mongodb.com/try/download/community)
- **Git** - [Install Git](https://git-scm.com/downloads)

### Setup Instructions
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/aki2025/agentforge.git
   cd agentforge-new
   ```
2. **Install Backend Dependencies**:
   ```bash
   cd backend
   npm install
   ```
3. **Install Frontend Dependencies**:
   ```bash
   cd ../frontend
   npm install
   ```
4. **Set Up Environment Variables**:
   Copy the `.env` example file in `backend/.env` and update it with your API keys:
   ```
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/agentforge
   JWT_SECRET=your-secret-key-here
   TWILIO_SID=your-twilio-sid
   TWILIO_TOKEN=your-twilio-token
   TWILIO_NUMBER=your-twilio-number
   SLACK_TOKEN=your-slack-token
   STRIPE_SECRET_KEY=your-stripe-secret-key
   ```
5. **Run the Backend**:
   ```bash
   cd backend
   npm start
   ```
6. **Run the Frontend**:
   Open a new terminal:
   ```bash
   cd frontend
   npm start
   ```
   The app should open at `http://localhost:3001`.

## Usage

### Deployment Options
AgentForge can be deployed in various ways depending on your needs. Here are the recommended options:

1. **Heroku Deployment**:
   - Install Heroku CLI: [Download Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)
   - Login to Heroku: `heroku login`
   - Create a Heroku App: `heroku create agentforge-app`
   - Set Environment Variables: `heroku config:set MONGO_URI=your-mongo-uri` and `heroku config:set JWT_SECRET=your-secret-key`
   - Deploy: `git push heroku main`
   - Open the App: `heroku open`

2. **Docker Deployment**:
   - Install Docker: [Download Docker](https://www.docker.com/get-started)
   - Build and Run with Docker Compose: `docker-compose up --build`
   - Access the App:
     - Backend: `http://localhost:3000`
     - Frontend: `http://localhost:3001`

3. **AWS Deployment**:
   - Launch an EC2 Instance: Use an Ubuntu 20.04 AMI and ensure ports 3000 and 3001 are open in the security group.
   - Install Dependencies: SSH into the instance and follow the local setup instructions.
   - Run with PM2:
     - Install PM2: `npm install -g pm2`
     - Start the backend: `pm2 start backend/server.js --name agentforge-backend`
     - Start the frontend: `pm2 start npm --name agentforge-frontend -- start`

## API

The AgentForge API provides endpoints for managing autonomous agents and their tasks. Refer to the [API documentation](https://documenter.getpostman.com/view/12345678/AgentForge-API) for detailed information on available endpoints and their usage.
[tbd]

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the Repository: `git clone https://github.com/aki2025/agentforge-new.git`
2. Create a Branch: `git checkout -b feature/your-feature-name`
3. Make Changes and Commit: `git add .` and `git commit -m "Add your feature"`
4. Push and Create a Pull Request: `git push origin feature/your-feature-name`

For language contributions, add new `translation.json` files in `frontend/public/locales/<lang>/` and update `frontend/src/i18n.js` with the new language.

See `Contributing.md` for more details.

## License

AgentForge is licensed under the MIT License. See `LICENSE` for more information.

## Contact

For questions or feedback:
- Email: aakash.kaushal@example.com
- GitHub Issues: [Open an Issue](https://github.com/aki2025/agentforge/issues)

## Acknowledgements

- xAI: For inspiring innovative AI solutions.
- Hugging Face: For providing `xlm-roberta-large` for multilingual NLP.
- React Community: For the amazing tools and libraries.

Star the repo if you find AgentForge useful! Happy automating!
