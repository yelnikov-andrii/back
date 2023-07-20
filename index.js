import express from 'express';
import { DataTypes, Sequelize } from 'sequelize';
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';
import expressFileupload from 'express-fileupload';
import path from 'path';
import cors from 'cors';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const currentModuleUrl = import.meta.url;
const currentModulePath = fileURLToPath(currentModuleUrl);

const currentDirPath = dirname(currentModulePath);

// const sequelize = new Sequelize('postgres', 'postgres', 'kozak1488', {
//   host: 'localhost',
//   dialect: "postgres",
//   logging: false,
// });

export const sequelize = new Sequelize('test1_z267', 'test1_z267_user', 'qrg9dYQEhY2ERzNuigfXKFeBLl9GVu54', {
  // host: 'dpg-ch5v5p5gk4qc132r5vhg-a.oregon-postgres.render.com',
  host: 'dpg-ch5v5p5gk4qc132r5vhg-a',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    }
  },
  dialect: 'postgres',
  logging: false,
})

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

const Destination = sequelize.define('Destination', {
  city: {
    type: DataTypes.STRING,
    allowNull: false
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  reviews: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  img: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
});

Destination.sync();

const app = express();
app.use(express.json());
app.use(expressFileupload({}));
app.use(cors());
app.use(express.static(path.join(currentDirPath, 'static')));

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const port = 5000;

app.post('/destinations', async (req, res) => {
  const { city, country, reviews, rating } = req.body;
  const { img } = req.files;
  let fileName = uuidv4() + '.jpg';
  const absoluteFilePath = path.resolve(currentDirPath, 'static', fileName);

    img.mv(absoluteFilePath);

  const newDestination = {
    city,
    country,
    reviews,
    rating,
    img: fileName,
  };

  await Destination.create(newDestination);
  res.send(newDestination);

});

app.get('/destinations', async (req, res) => {
  const destinations = await Destination.findAll();
  res.send(destinations);
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
