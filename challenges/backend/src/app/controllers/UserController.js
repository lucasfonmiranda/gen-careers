import User from '../models/User';
import Pagamento from '../models/Pagamento';

class UserController {
  async store(req, res) {
    const user = await User.create(req.body);

    return res.json(user);
  }

  async index(req, res) {
    const { user_id } = req.params;

    // const user = await User.findByPk(user_id);

    const pagamentos = await Pagamento.findAll({ where: { user_id } });

    return res.json(pagamentos);
  }
}

export default new UserController();
