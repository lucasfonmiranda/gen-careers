import Transaction from '../models/Transaction';
import Client from '../models/Client';
import PaymentService from '../models/PaymentService';

class TransactionController {
  async index(req, res) {
    let transaction = Transaction.find({})
      .populate('client', 'name')
      .populate('paymentService', 'name');

    if (req.query.paymentServiceId) {
      transaction = transaction
        .where('paymentService')
        .equals(req.query.paymentServiceId);
    }

    if (req.query.clientId) {
      transaction = transaction.where('client').equals(req.query.clientId);
    }

    return res.status(200).json(await transaction);
  }

  async create(req, res) {
    const client = await Client.findOne({ _id: req.body.clientId });

    const count = await PaymentService.countDocuments();
    const random = Math.floor(Math.random() * count);
    const paymentService = await PaymentService.findOne().skip(random);

    const transaction = await Transaction.create({
      amount: req.body.amount,
      name: req.body.name,
      client: client.id,
      paymentService: paymentService.id,
    });

    paymentService.transactions.push(transaction);
    client.transactions.push(transaction);
    client.save();
    paymentService.save();

    return res.json(transaction);
  }
}

export default new TransactionController();
