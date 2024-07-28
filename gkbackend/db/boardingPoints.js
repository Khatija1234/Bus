// const { DataTypes } = require('sequelize');
// const { sequelize } = require('./dbConnectionsModel');

// const BoardingPoints = sequelize.define('BoardingPoints', {
//   id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true
//   },
//   city: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     index: true  // Add index to the 'city' column
//   },
//   boardingPoints: {
//     type: DataTypes.ARRAY(DataTypes.STRING),
//     allowNull: false,
//     index: true  // Add index to the 'boardingPoints' column
//   }
// }, {
//   indexes: [
//     {
//       unique: false,
//       fields: ['city']
//     },
//     {
//       unique: false,
//       fields: ['boardingPoints']
//     }
//   ]
// });

// BoardingPoints.sync()
//   .then(() => console.log('seatselected table synced'))
//   .catch(err => console.error('Failed to sync seatselected table:', err));

// module.exports = { BoardingPoints };

const { DataTypes } = require('sequelize');
const { sequelize } = require('./dbConnectionsModel');

const BoardingPoints = sequelize.define('BoardingPoints', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
    index: true  // Add index to the 'city' column
  },
  boardingPoints: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
    index: true  // Add index to the 'boardingPoints' column
  }
}, {
  indexes: [
    {
      unique: false,
      fields: ['city']
    },
    {
      unique: false,
      fields: ['boardingPoints']
    }
  ]
});

// Sync the model with the database
sequelize.sync({ force: true, logging: console.log })  // Enable logging to see SQL statements
  .then(() => {
    console.log('BoardingPoints table synced');
  })
  .catch(err => {
    console.error('Failed to sync BoardingPoints table:', err);
  });

module.exports = { BoardingPoints };
