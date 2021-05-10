const express = require('express');
const router = express.Router();
const Stripe = require("stripe");
const stripe = new Stripe("sk_test_51HkZHyL3uqxLO4xh6zBIZYwJuZxX9s2ruyIBsdkbbWtwtd5H3Sw5fGQzj7GBQiwoPiPRbWbnq0wlCVKoH8joChYL00YLVnws8L");

// app.post("/checkout", async (req, res) => {
//     // you can get more data to find in a database, and so on
//     const { id, amount } = req.body;
  
//     try {
//       const payment = await stripe.paymentIntents.create({
//         amount,
//         currency: "USD",
//         description: "Suscripcion",
//         payment_method: id,
//         confirm: true, //confirm the payment at the same time
//       });
  
//       console.log(payment);
  
//       return res.status(200).json({ message: "Successful Payment" });
//     } catch (error) {
//       console.log(error);
//       return res.json({ message: error.raw.message });
//     }
    
// });

router.post('/checkout', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Suscripcion',
              images: ['https://image.freepik.com/vector-gratis/hombre-mujer-aptitud-diseno-grafico-ejemplo-vector-gimnasio_18591-25078.jpg'],
            },
            unit_amount: 9900,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.CLIENT_URL}/success`,
      cancel_url: `${process.env.CLIENT_URL}/canceled`,
    });
    res.json({ id: session.id });
});

module.exports = router;