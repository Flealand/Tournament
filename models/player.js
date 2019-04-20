const db = require('../utils/database'),
    sequelize = db.sequelize,
    Sequelize = db.Sequelize;

const Tournament = require('../models/tournament');
const Match = require('../models/match');

const Player = sequelize.define('player', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING(500),
  },
  tournamentId: {
    type: Sequelize.INTEGER,
    foreignKey: true
  }
});

Player.belongsTo(Tournament);
Tournament.hasMany(Player);


module.exports = Player;