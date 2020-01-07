import * as Yup from 'yup';
import Client from '../schemas/Client';

class ClientController {
  async index(req, res) {
    try {
      const clients = await Client.find();

      res.json(clients);
    } catch (err) {
      res.status(500).json('Não foi possível buscar os Clientes.');
    }
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required('O nome é obrigatório.'),
      email: Yup.string()
        .email('Email inválido.')
        .required('O email é obrigatório.'),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({
        error:
          'A validação dos dados falhou. Cheque os dados e tente novamente.',
      });
    }

    const clientExists = await Client.findOne({
      email: req.body.email,
    });

    if (clientExists) {
      return res
        .status(400)
        .json({ error: 'Esse cliente já está cadastrado.' });
    }

    const { name, email } = req.body;

    const client = await Client.create({
      name,
      email,
    });

    return res.json({
      client,
    });
  }
}

export default new ClientController();
