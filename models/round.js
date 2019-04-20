const db = require('../utils/database'),
    sequelize = db.sequelize,
    Sequelize = db.Sequelize;

const Tournament = require('../models/tournament');

const Round = sequelize.define('round', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  roundNumber:  {
    type: Sequelize.INTEGER,
  },

});


Round.belongsTo(Tournament, {through: Tournament});
Tournament.hasMany(Round);

module.exports = Round;