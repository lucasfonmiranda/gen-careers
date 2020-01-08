import * as Yup from 'yup';
import Client from '../models/ClientSchema';

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

    const clientExists = await Client.findOne({
      where: { email: req.body.email },
    });

    if (clientExists) {
      return res.status(400).json({ error: 'Client already exists' });
    }

    const { name, email } = await Client.create(req.body);
    return res.json({ name, email });
  }

  async index(req, res) {
    const name = await Client.find();
    return res.json(name);
  }
}

export default new ClientController();
