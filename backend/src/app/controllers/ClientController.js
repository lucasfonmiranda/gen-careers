import Client from '../models/Client';

class ClientController {
  async index(req, res) {
    let clients = [];
    if (req.query.name) {
      clients = await Client.find({
        name: { $regex: new RegExp(req.query.name, 'ig') },
      });
    } else {
      clients = await Client.find({});
    }

    return res.json(clients);
  }

  async create(req, res) {
    const clientExist = await Client.findOne({
      where: { email: req.query.email },
    });

    if (clientExist) {
      return res.status(401).json({ error: 'E-mail ja em uso' });
    }

    const { id, name, email } = await Client.create(req.body);

    return res.json({ id, name, email });
  }
}

export default new ClientController();
