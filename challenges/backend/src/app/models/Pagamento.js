import Sequelize, { Model } from 'sequelize';

class Pagamentos extends Model {
  static init(sequelize) {
    super.init(
      {
        user_id: Sequelize.INTEGER,
        forma_pagamento_id: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'users',
    });
    this.belongsTo(models.Formapagamentos, {
      foreignKey: 'forma_pagamento_id',
      as: 'formapagamentos',
    });
  }
}

export default Pagamentos;
