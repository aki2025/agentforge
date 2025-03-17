const express = require('express');
const Agent = require('../models/Agent');
const router = express.Router();

router.post('/', async (req, res) => {
  const { task, coordinates } = req.body;
  const agent = new Agent({ task, coordinates });
  await agent.save();
  res.status(201).json(agent);
});

router.get('/', async (req, res) => {
  const agents = await Agent.find();
  res.json(agents);
});

module.exports = router;