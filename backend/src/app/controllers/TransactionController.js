import * as Yup from 'yup';

import Transaction from '../models/TransactionSchema';
import Client from '../schemas/Client';

class TransactionController {
  async index(req, res) {
    const { name } = req.query;
    const { service } = req.query;

    res.json({ name, service });
  }

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

    return res.json({ email });
  }
}

export default new TransactionController();
