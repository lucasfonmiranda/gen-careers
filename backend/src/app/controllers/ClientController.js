import Client from '../models/ClientSchema';

class ClientController {
  async index(req, res) {
    const name = await Client.find();
    return res.json(name);
  }

  async store(req, res) {
    const client = await Client.create(req.body);

    return res.json(client);
  }
}

export default new ClientController();
