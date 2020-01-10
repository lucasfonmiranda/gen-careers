import * as Yup from 'yup';
import Client from '../models/Client';

class ClientController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Erro ao validar os dados' });
    }

    const clientExists = await Client.findOne({
      where: { email: req.body.email },
    });

    if (clientExists) {
      return res.status(400).json({ error: 'Cliente já cadastrado' });
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
