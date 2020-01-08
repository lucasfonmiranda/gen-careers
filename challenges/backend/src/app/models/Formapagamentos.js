import Sequelize, { Model } from 'sequelize';

class Formapagamentos extends Model {
  static init(sequelize) {
    super.init(
      {
        forma_pagamento: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

export default Formapagamentos;
