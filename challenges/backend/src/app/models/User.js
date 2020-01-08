import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        price: Sequelize.FLOAT,
      },
      {
        sequelize,
      }
    );
  }
}

export default User;
