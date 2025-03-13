import React, { useState } from 'react';
import axios from 'axios';

function CreateAgentWizard({ onAgentCreated }) {
  const [step, setStep] = useState(1);
  const [task, setTask] = useState('');
  const [followUpTask, setFollowUpTask] = useState('');

  const handleSubmit = async () => {
    const token = localStorage.getItem('token');
    await axios.post(
      `${process.env.REACT_APP_API_URL}/api/agents/create`,
      { task, followUpTask },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    onAgentCreated();
    setStep(1);
    setTask('');
    setFollowUpTask('');
  };

  return (
    <div>
      {step === 1 && (
        <>
          <h2>Step 1: Define Task</h2>
          <input value={task} onChange={(e) => setTask(e.target.value)} placeholder="Enter task" />
          <button onClick={() => setStep(2)}>Next</button>
        </>
      )}
      {step === 2 && (
        <>
          <h2>Step 2: Add Follow-Up Task (Optional)</h2>
          <input
            value={followUpTask}
            onChange={(e) => setFollowUpTask(e.target.value)}
            placeholder="Enter follow-up task"
          />
          <button onClick={() => setStep(1)}>Back</button>
          <button onClick={handleSubmit}>Create Agent</button>
        </>
      )}
    </div>
  );
}

export default CreateAgentWizard; 
