import * as Yup from 'yup';

import Transaction from '../models/TransactionSchema';
import Client from '../models/ClientSchema';

class TransactionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email('Invalid Email')
        .required('Email is required'),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({
        error: 'Try again',
      });
    }

    const noClient = await Client.findOne({
      email: req.body.email,
    });

    if (!noClient) {
      return res.status(400).json({ error: 'Client doesn`t exist' });
    }

    const { email_client } = req.body;

    const paymentServices = ['Stripe', 'Paypal', 'Mercado Pago'];

    const payment_service =
      paymentServices[Math.floor(Math.random() * paymentServices.length)];

    const transaction = await Transaction.create({
      email_client,
      payment_service,
    });

    return res.json({
      transaction,
    });
  }
}

export default new TransactionController();
