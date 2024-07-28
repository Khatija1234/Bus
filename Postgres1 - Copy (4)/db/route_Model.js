const { DataTypes } = require('sequelize');
const { sequelize } = require('./dbConnectionsModel');
const { Bus } = require('./bus');

const Route = sequelize.define('Route', {
  routeId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  from: {
    type: DataTypes.STRING,
    allowNull: false
  },
  to: {
    type: DataTypes.STRING,
    allowNull: false
  },
  busRoute: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false
  },
  busRouteTimes: {
    type: DataTypes.ARRAY(DataTypes.DATE),
    allowNull: false
  },
  busRouteFares: {
    type: DataTypes.ARRAY(DataTypes.FLOAT),
    allowNull: false
  },
  runsOnDays: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false
  },
  // departure: {
  //   type: DataTypes.DATE,
  //   allowNull: false
  // },
  // arrival: {
  //   type: DataTypes.DATE,
  //   allowNull: false
  // }
  departure: {
    type: DataTypes.STRING,
    allowNull: false
  },
  arrival: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

Route.belongsTo(Bus, { foreignKey: 'busId' });
Bus.hasOne(Route, { foreignKey: 'busId' });

// Route.sync()
//   .then(() => console.log('seatselected table synced'))
//   .catch(err => console.error('Failed to sync seatselected table:', err));

// Define relationships
Route.belongsTo(Bus, { foreignKey: 'busId' });
Bus.hasOne(Route, { foreignKey: 'busId' });

// Sync all models
sequelize.sync({ logging: console.log })  // Enable logging to see SQL statements
  .then(() => {
    console.log('All tables synced');
  })
  .catch(err => {
    console.error('Failed to sync tables:', err);
  });

module.exports = { Route };
