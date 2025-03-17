const twilio = require('twilio');
jest.mock('twilio');

describe('Twilio Integration', () => {
  it('should send an SMS via Twilio', async () => {
    const mockClient = {
      messages: {
        create: jest.fn().mockResolvedValue({ sid: 'SM123' }),
      },
    };
    twilio.mockReturnValue(mockClient);

    const phone = '+1234567890';
    const message = 'Hello';
    const result = await mockClient.messages.create({
      body: message,
      to: phone,
      from: process.env.TWILIO_NUMBER,
    });

    expect(result.sid).toBe('SM123');
    expect(mockClient.messages.create).toHaveBeenCalledWith({
      body: 'Hello',
      to: '+1234567890',
      from: process.env.TWILIO_NUMBER,
    });
  });
});