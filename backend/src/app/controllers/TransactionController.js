import * as Yup from 'yup';
import bcrypt from 'bcrypt';
import Transaction from '../schemas/Transaction';
import Client from '../schemas/Client';

class TransactionController {
  async index(req, res) {
    const clientName = req.query.name;
    const payment_service = req.query.ps;
    const { page } = req.query || 1;
    const { perPage } = req.query || 10;

    const clients = await Client.find({
      name: new RegExp(clientName, 'i'),
    });

    const clientsEmails = clients.map(client => client.email);

    const transactions = await Transaction.find({
      client_email: clientsEmails,
      payment_service: payment_service || { $type: 'string' },
    })
      .limit(Number(perPage))
      .skip(perPage * page - perPage)
      .sort({
        createdAt: 'desc',
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
