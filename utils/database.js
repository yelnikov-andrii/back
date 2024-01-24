import { Sequelize } from 'sequelize';

// export const sequelize = new Sequelize('mydatabase_72zt', 'mydatabase_72zt_user', 'fGLaWaqj0QKb8dBGVl8L41rUMzYiFveJ', {
//   // host: 'dpg-cj1ce115rnuhn3luqang-a.oregon-postgres.render.com',
//   host: 'dpg-cj1ce115rnuhn3luqang-a',
//   dialectOptions: {
//     ssl: {
//       require: true,
//       rejectUnauthorized: false,
//     }
//   },
//   dialect: 'postgres',
//   logging: false,
// });

export const sequelize = new Sequelize('database_24_01', 'database_24_01_user', '7jMDla7q6hWKQP3CrIb4aA5UBFQOgPgB', {
  host: 'dpg-cmone5un7f5s73d8ummg-a.oregon-postgres.render.com',
  // host: 'dpg-cmone5un7f5s73d8ummg-a',
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

