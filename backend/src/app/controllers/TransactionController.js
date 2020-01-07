import * as Yup from 'yup';
import bcrypt from 'bcrypt';
import Transaction from '../schemas/Transaction';
import Client from '../schemas/Client';

class TransactionController {
  async index(req, res) {
    try {
      const transactions = await Transaction.find({});

      res.json(transactions);
    } catch (err) {
      res.status(500).json('Não foi possível buscar as transações.');
    }
  }

  async show(req, res) {
    const clientName = req.body.name;
    const clients = await Client.find({
      name: new RegExp(clientName, 'i'),
    });

    const clientsEmails = clients.map(client => client.email);

    const transactions = await Transaction.find({
      client_email: clientsEmails,
    });

    return res.json(transactions);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      client_email: Yup.string()
        .email('Email inválido.')
        .required('O email é obrigatório.'),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({
        error:
          'A validação dos dados falhou. Cheque os dados e tente novamente.',
      });
    }

    const client = await Client.findOne({
      email: req.body.client_email,
    });

    if (!client) {
      return res.status(400).json({ error: 'Cliente inexistente.' });
    }
    // eslint-disable-next-line no-underscore-dangle
    const authorization = bcrypt.hashSync(client._id + new Date(), 8);

    const { client_email } = req.body;

    const paymentServices = ['Stripe', 'Paypal', 'Mercado Pago'];

    const payment_service =
      paymentServices[Math.floor(Math.random() * paymentServices.length)];

    const transaction = await Transaction.create({
      client_email,
      authorization,
      payment_service,
    });

    return res.json({
      transaction,
    });
  }
}

export default new TransactionController();
