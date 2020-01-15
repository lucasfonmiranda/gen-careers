import PaymentService from '../models/PaymentService';

class PaymentServiceController {
  async index(req, res) {
    const paymentServices = await PaymentService.find({});

    return res.json(paymentServices);
  }

  async create(req, res) {
    const PaymentServiceExist = await PaymentService.findOne({
      where: { name: req.body.name },
    });

    if (PaymentServiceExist) {
      return res.status(401).json({ error: 'Nome ja em uso' });
    }

    const { id, name } = await PaymentService.create(req.body);

    return res.json({ id, name });
  }
}

export default new PaymentServiceController();
