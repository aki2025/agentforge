const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const authenticate = require('../auth');

router.post('/purchase', authenticate, async (req, res) => {
  const { agentId } = req.body;
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{
      price_data: {
        currency: 'usd',
        product_data: { name: 'Agent Purchase' },
        unit_amount: 1000,
      },
      quantity: 1,
    }],
    mode: 'payment',
    success_url: 'https://agentforge.com/success',
    cancel_url: 'https://agentforge.com/cancel',
  });
  res.json({ sessionId: session.id });
});

module.exports = router; 
