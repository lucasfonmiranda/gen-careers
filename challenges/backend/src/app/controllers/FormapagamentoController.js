import Formapagamento from '../models/Formapagamentos';

class FormapagamentoController {
  async store(req, res) {
    const formapagamento = await Formapagamento.create(req.body);

    return res.json(formapagamento);
  }

  async index(req, res) {
    const formapagamento = await Formapagamento.findAll({
      attributes: ['id', 'forma_pagamento'],
      order: ['id'],
    });

    return res.json(formapagamento);
  }
}

export default new FormapagamentoController();
