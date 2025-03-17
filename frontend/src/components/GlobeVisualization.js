import React from 'react';

function GlobeVisualization({ agents }) {
  return (
    <div>
      {agents.length > 0 ? (
        agents.map(agent => (
          <div key={agent.id}>{agent.task}</div>
        ))
      ) : (
        <div>No agents</div>
      )}
    </div>
  );
}

export default GlobeVisualization;