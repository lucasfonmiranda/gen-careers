import User from '../models/User';

class UserController {
  async store(req, res) {
    const user = await User.create(req.body);

    return res.json(user);
  }

  async index(req, res) {
    const users = await User.findAll({
      attributes: ['id', 'name'],
      order: ['id'],
    });

    return res.json(users);
  }
}

export default new UserController();
