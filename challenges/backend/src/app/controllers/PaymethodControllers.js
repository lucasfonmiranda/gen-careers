import * as Yup from 'yup';

import Paymethod from '../models/Paymethods';
import Client from '../models/Client';

class PaymethodController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Verifique os dados' });
    }

    const notClient = await Client.findOne({
      email: req.body.email,
    });

    if (!notClient) {
      return res.status(400).json({ error: 'Cliente não existe' });
    }

    const { name_client } = req.body;
    const payMethod = ['PicPay', 'MercadoPago', 'PagSeguro', 'PayPal'];
    const payment = payMethod[Math.floor(Math.random() * payMethod.length)];

    const method = await Paymethod.create({
      name_client,
      payment,
    });

    return res.json({
      method,
    });
  }

  async index(req, res) {
    const payment = await Paymethod.find();
    return res.json(payment);
  }
}

export default new PaymethodController();
