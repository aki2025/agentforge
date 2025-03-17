import React from 'react';
import CreateAgentWizard from './components/CreateAgentWizard';
import LanguageSelector from './components/LanguageSelector';
import GlobeVisualization from './components/GlobeVisualization';

function App() {
  const agents = [
    { id: '1', task: 'Send text', coordinates: { lat: 40.7128, lng: -74.0060 } },
    { id: '2', task: 'Schedule meeting', coordinates: { lat: 51.5074, lng: -0.1278 } },
  ];
  return (
    <div>
      <LanguageSelector />
      <CreateAgentWizard />
      <GlobeVisualization agents={agents} />
    </div>
  );
}

export default App;