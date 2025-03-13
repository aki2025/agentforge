import React, { useState, useEffect } from 'react';
import GlobeVisualization from './GlobeVisualization';
import CreateAgentWizard from './CreateAgentWizard';
import axios from 'axios';

function AgentDashboard() {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    const fetchAgents = async () => {
      const token = localStorage.getItem('token');
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/agents`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAgents(res.data);
    };
    fetchAgents();
  }, []);

  return (
    <div>
      <h1>AgentForge Dashboard</h1>
      <GlobeVisualization agents={agents} />
      <CreateAgentWizard onAgentCreated={() => fetchAgents()} />
    </div>
  );
}

export default AgentDashboard;