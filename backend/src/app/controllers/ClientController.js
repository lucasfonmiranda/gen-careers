import Client from '../models/ClientSchema';

class ClientController {
  async store(req, res) {
    const client = await Client.create(req.body);

    return res.json(client);
  }
}

export default new ClientController();
