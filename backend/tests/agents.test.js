const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');
const Agent = require('../models/Agent');
const agentRoutes = require('../routes/agents');

const app = express();
app.use(express.json());
app.use('/api/agents', agentRoutes);

describe('Agent API', () => {
  beforeEach(async () => {
    await Agent.deleteMany({});
  });

  it('should create a new agent', async () => {
    const agentData = {
      task: 'Send text to +1234567890 with Hello',
      status: 'pending',
      coordinates: { lat: 40.7128, lng: -74.0060 },
    };

    const response = await request(app)
      .post('/api/agents')
      .send(agentData)
      .expect(201);

    expect(response.body.task).toBe(agentData.task);
    expect(response.body.status).toBe(agentData.status);
    expect(response.body.coordinates).toEqual(agentData.coordinates);

    const agentInDb = await Agent.findOne({ task: agentData.task });
    expect(agentInDb).not.toBeNull();
  });

  it('should list all agents', async () => {
    const agent1 = new Agent({
      task: 'Send text to +1234567890 with Hello',
      status: 'pending',
      coordinates: { lat: 40.7128, lng: -74.0060 },
    });
    const agent2 = new Agent({
      task: 'Schedule meeting at 10am',
      status: 'completed',
      coordinates: { lat: 51.5074, lng: -0.1278 },
    });
    await agent1.save();
    await agent2.save();

    const response = await request(app)
      .get('/api/agents')
      .expect(200);

    expect(response.body.length).toBe(2);
    expect(response.body[0].task).toBe(agent1.task);
    expect(response.body[1].task).toBe(agent2.task);
  });
});