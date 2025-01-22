import { Sequelize } from 'sequelize';

// export const sequelize = new Sequelize('database_24_01', 'database_24_01_user', '7jMDla7q6hWKQP3CrIb4aA5UBFQOgPgB', {
//   host: 'dpg-cmone5un7f5s73d8ummg-a.oregon-postgres.render.com',
//   // host: 'dpg-cmone5un7f5s73d8ummg-a',
//   dialectOptions: {
//     ssl: {
//       require: true,
//       rejectUnauthorized: false,
//     }
//   },
//   dialect: 'postgres',
//   logging: false,
// });

// try {
//   await sequelize.authenticate();
//   console.log('Connection has been established successfully.');
// } catch (error) {
//   console.error('Unable to connect to the database:', error);
// }

export const sequelize = new Sequelize('january_0m9c', 'january_0m9c_user', '82oAXwf0O4iyNvor4DPpYo6qrPpPlG9p', {
  host: 'dpg-cu8efj52ng1s73ejpsi0-a.oregon-postgres.render.com',
  // host: 'dpg-cu8efj52ng1s73ejpsi0-a',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    }
  },
  dialect: 'postgres',
  logging: false,
});

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

