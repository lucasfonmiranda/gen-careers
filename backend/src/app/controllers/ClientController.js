import * as Yup from 'yup';
import Clients from '../models/ClientSchema';

class ClientController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed' });
    }

    const clientExists = await Clients.findOne({
      where: { email: req.body.email },
    });

    if (clientExists) {
      return res.status(400).json({ error: 'Client already exists' });
    }

    const { name, email } = await Clients.create(req.body);
    return res.json({ name, email });
  }

  async index(req, res) {
    const name = await Clients.find();
    return res.json(name);
  }
}

export default new ClientController();
