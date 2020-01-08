import Pagamento from '../models/Pagamento';

class FormapagamentoController {
  async store(req, res) {
    const pagamento = await Pagamento.create(req.body);

    return res.json(pagamento);
  }

  async index(req, res) {
    const pagamentos = await Pagamento.findAll({
      attributes: ['user_id', 'forma_pagamento_id'],
      order: ['user_id'],
    });

    return res.json(pagamentos);
  }
}

export default new FormapagamentoController();
