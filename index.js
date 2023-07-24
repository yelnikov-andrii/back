import express from 'express';
import expressFileupload from 'express-fileupload';
import path from 'path';
import cors from 'cors';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { destinationsRouter } from './routes/destinations.js';
import { amenityRouter } from './routes/amenity.js';
import { imagesRouter } from './routes/images.js';
import { stayRouter } from './routes/stay.js';
import { reviewRouter } from './routes/review.js';

const currentModuleUrl = import.meta.url;
const currentModulePath = fileURLToPath(currentModuleUrl);
const currentDirPath = dirname(currentModulePath);

const app = express();
app.use(express.json());
app.use(expressFileupload({}));
app.use(cors());
app.use(express.static(path.join(currentDirPath, 'static')));

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use(destinationsRouter);
app.use(amenityRouter);
app.use(imagesRouter);
app.use(stayRouter);
app.use(reviewRouter);

const port = 5000;

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
