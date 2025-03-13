import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function GlobeVisualization({ agents }) {
  return (
    <Canvas style={{ height: '400px' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <mesh>
        <sphereGeometry args={[5, 32, 32]} />
        <meshStandardMaterial color="blue" />
      </mesh>
      {agents.map((agent, index) => (
        <mesh key={index} position={[agent.x, agent.y, agent.z]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color={agent.status === 'Completed' ? 'green' : 'red'} />
        </mesh>
      ))}
      <OrbitControls />
    </Canvas>
  );
}

export default GlobeVisualization; 
