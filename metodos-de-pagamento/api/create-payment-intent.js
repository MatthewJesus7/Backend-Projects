// api/create-payment-intent.js
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  const { amount, currency } = req.body;
    try {
        const paymentIntent = await stripe.paymentIntents.create({
              amount,
                    currency,
                        });
                            res.status(200).json({ clientSecret: paymentIntent.client_secret });
                              } catch (error) {
                                  res.status(500).json({ error: error.message });
                                    }
                                    }
                                    