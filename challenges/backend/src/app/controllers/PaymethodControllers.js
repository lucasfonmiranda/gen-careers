import * as Yup from 'yup';

import Paymethod from '../models/Paymethods';
import Client from '../models/Client';

class PaymethodController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
    });

    if (!(await schema.inValid(req.body))) {
      return res.status(400).json({ error: 'Verifique os dados' });
    }

    const notClient = await Client.findOne({
      name: req.body.name,
    });

    if (!notClient) {
      return res.status(400).json({ error: 'Cliente não existe' });
    }

    const { name_client } = req.body;
    const payMethod = ['PicPay', 'MercadoPago', 'PagSeguro', 'PayPal'];
    const pay_method = payMethod[Math.floor(Math.random() * payMethod.length)];

    const payment = await Paymethod.create({
      name_client,
      pay_method,
    });

    return res.json({
      payment,
    });
  }

  async index(req, res) {
    const payment = await Paymethod.find();
    return res.json(payment);
  }
}

export default new PaymethodController();
