const TaskQueue = require('../taskQueue');

describe('Task Queue', () => {
  it('should process a task and extract intent', async () => {
    const task = 'Send text to +1234567890 with Hello';
    const result = await TaskQueue.processTask(task);

    expect(result).toBe('send_text');
  });

  it('should fail for an invalid task', async () => {
    const task = 'Invalid task description';
    await expect(TaskQueue.processTask(task)).rejects.toThrow('Invalid task format');
  });
});