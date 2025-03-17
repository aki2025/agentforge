const express = require('express');
const redis = require('redis');
const { processTask } = require('./taskQueue');
const agentRoutes = require('./routes/agents');

const app = express();
const redisClient = redis.createClient();

app.use(express.json());
app.use('/api/agents', agentRoutes);

app.get('/agents', async (req, res) => {
  const cacheKey = 'agent_list';
  const cached = await redisClient.get(cacheKey);
  if (cached) {
    return res.json(JSON.parse(cached));
  }
  const agents = [{ id: 1, name: 'Agent 1' }]; // Example data
  await redisClient.setEx(cacheKey, 3600, JSON.stringify(agents));
  res.json(agents);
});

app.post('/feedback', (req, res) => {
  console.log(req.body); // Log feedback; store in DB if needed
  res.send('Feedback received');
});

app.listen(process.env.PORT || 3000, () => console.log('Server running on port 3000'));