import Sequelize from 'sequelize';

import User from '../app/models/User';
import Formapagamento from '../app/models/Formapagamentos';
import Pagamento from '../app/models/Pagamento';

import databaseConfig from '../config/database';

const models = [User, Formapagamento, Pagamento];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

export default new Database();
