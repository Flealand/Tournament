const db = require('../utils/database'),
    sequelize = db.sequelize,
    Sequelize = db.Sequelize;

const Round = require('../models/round');

const Match = sequelize.define('match', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  playerOneId: {
    type: Sequelize.INTEGER,
    foreignKey: true,
  },
  playerTwoId: {
    type: Sequelize.INTEGER,
    foreignKey: true,
  }
});


Match.belongsTo(Round,{through: Round});
Round.hasMany(Match);

module.exports = Match;