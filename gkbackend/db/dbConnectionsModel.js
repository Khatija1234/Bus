// const { Sequelize } = require('sequelize');
// const dotenv = require('dotenv');

// dotenv.config();

// const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
//   host: process.env.DATABASE_HOST,
//   port: process.env.DATABASE_PORT,
//   dialect: 'postgres',
//   dialectOptions: {
//     ssl: false // Disable SSL
//   }
// });

// module.exports = { sequelize };
// const { Sequelize } = require('sequelize');
// require('dotenv').config();

// console.log('DATABASE_NAME:', process.env.DATABASE_NAME);
// console.log('DATABASE_USER:', process.env.DATABASE_USER);
// console.log('DATABASE_PASSWORD:', process.env.DATABASE_PASSWORD);
// console.log('DATABASE_HOST:', process.env.DATABASE_HOST);
// console.log('DATABASE_PORT:', process.env.DATABASE_PORT);

// const sequelize = new Sequelize(
//   process.env.DATABASE_NAME,
//   process.env.DATABASE_USER,
//   process.env.DATABASE_PASSWORD,
//   {
//     host: process.env.DATABASE_HOST,
//     port: process.env.DATABASE_PORT,
//     dialect: 'postgres',
//   }
// );
// module.exports = { sequelize };

const { Sequelize } = require('sequelize');
require('dotenv').config();

const {
  DATABASE_NAME,
  DATABASE_USER,
  DATABASE_PASSWORD,
  DATABASE_HOST,
  DATABASE_PORT,
  DB_SSL,
} = process.env;

// Validate that required environment variables are set
if (!DATABASE_NAME || !DATABASE_USER || !DATABASE_PASSWORD || !DATABASE_HOST || !DATABASE_PORT) {
  console.error('Missing required environment variables');
  process.exit(1);
}

console.log('DATABASE_NAME:', DATABASE_NAME);
console.log('DATABASE_USER:', DATABASE_USER);
console.log('DATABASE_PASSWORD:', DATABASE_PASSWORD);
console.log('DATABASE_HOST:', DATABASE_HOST);
console.log('DATABASE_PORT:', DATABASE_PORT);
console.log('DB_SSL:', DB_SSL);

const sequelize = new Sequelize(
  DATABASE_NAME,
  DATABASE_USER,
  DATABASE_PASSWORD,
  {
    host: DATABASE_HOST,
    port: parseInt(DATABASE_PORT, 10),
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: DB_SSL === 'true'
      }
    }
  }
);

// Test the connection
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = { sequelize };
