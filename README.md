# AgentForge - Autonomous Agent Platform


## 📖 Overview

AgentForge empowers users to create autonomous agents that can perform tasks such as sending SMS, scheduling meetings, and interacting via Slack—all through a user-friendly web interface. With multilingual support (English, Hindi, and more on the way), cultural relevance for global markets (like India 🇮🇳), and a scalable architecture, AgentForge is designed for both developers and non-technical users.

---

## ✨ Features

- **Autonomous Agents** 🤖: Create agents to automate tasks like sending SMS or scheduling events.
- **Multilingual NLP** 🌐: Supports English and Hindi task parsing with `xlm-roberta-large` for intent detection.
- **Global Visualization** 🗺️: Interactive 3D globe to visualize agent locations worldwide.
- **API Integrations** 🔗: Seamless integrations with Twilio (SMS), Slack (bots), Razorpay (payments), and OpenWeatherMap (weather data).
- **Cultural Relevance** 🎉: Tailored for global users, with examples like sending Diwali wishes in India.
- **Performance Optimized** ⚡: Redis caching for faster API responses and compatibility with older browsers.
- **Scalable Architecture** 📈: Built with MongoDB and cloud-ready for global scalability.

## Installation

### Prerequisites
- **Node.js** (v16 or higher) - [Install Node.js](https://nodejs.org/)
- **MongoDB** - [Install MongoDB](https://www.mongodb.com/try/download/community)
- **Git** - [Install Git](https://git-scm.com/downloads)

### Setup Instructions
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/aki2025/agentforge-new.git
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
   Copy the `.env.example` file in `backend/.env` and update it with your API keys:
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

AgentForge can be used in various scenarios:

1. **Event Reminders**:
   Create an agent to send SMS reminders for events like birthdays or Diwali celebrations.
   Example Task: "Send SMS to +1234567890 with Happy Diwali on November 4th."

2. **Weather Updates**:
   Automate daily weather updates for cities like Mumbai.
   Example Task: "Get weather for Mumbai and send to Slack channel #weather."

3. **Business Automation**:
   Schedule meetings and notify participants via Slack.
   Example Task: "Schedule a meeting at 10am tomorrow and notify #team."

4. **E-commerce Notifications**:
   Send payment confirmations via SMS using Razorpay integration.
   Example Task: "Send SMS to +1234567890 with Payment of ₹500 successful."
   
## Software Capabilities

AgentForge is packed with powerful features:
  
1. **Multilingual Support**:
   Supports English and Hindi, with plans for Tamil, Bengali, Spanish, and Mandarin.
   Uses react-i18next for UI translations and xlm-roberta-large for NLP.  

2. **Scalability**:
   Built with MongoDB and cloud-ready for handling global users.
   Redis caching reduces API latency by up to 30%.

3. **Global Reach**:
   Cultural adaptations (e.g., INR currency, Diwali examples) for markets like India.
   3D globe visualization to track agent locations worldwide..
   
4. **Reliability**:
   Unit tests with Jest and React Testing Library ensure 95% accuracy for agent creation.
   Optimized for older browsers and slower internet speeds.

## API

The AgentForge API provides endpoints for creating and managing autonomous agents. Detailed API documentation is available in the project repository.

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Make your changes and commit them: `git add . && git commit -m "Add your feature"`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Open a pull request on GitHub.

For language contributions, add new `translation.json` files in `frontend/public/locales/<lang>/` and update `frontend/src/i18n.js` with the new language.

See `Contributing.md` for more details.

## License

AgentForge is licensed under the MIT License. See `LICENSE` for more information.

## Testing

AgentForge includes unit tests with Jest and React Testing Library to ensure 95% accuracy for agent creation. You can run the tests with the following commands:

```bash
cd backend
npm test

cd ../frontend
npm test
```

## Contact

For questions or feedback:
- Email: aakash.kaushal@example.com
- GitHub Issues: Open an issue
