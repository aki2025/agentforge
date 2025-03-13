const express = require('express');
const router = express.Router();
const Agent = require('../models/Agent');
const authenticate = require('../auth');
const { addTaskToQueue } = require('../taskQueue');

router.post('/create', authenticate, async (req, res) => {
  const { task, followUpTask } = req.body;
  const agent = new Agent({
    task,
    followUpTask,
    userId: req.user.id,
    x: Math.random() * 10 - 5,
    y: Math.random() * 10 - 5,
    z: Math.random() * 10 - 5,
  });
  await agent.save();
  await addTaskToQueue(agent._id, task);
  res.status(201).json(agent);
});

router.get('/', authenticate, async (req, res) => {
  const agents = await Agent.find({ userId: req.user.id });
  res.json(agents);
});

module.exports = router; 
