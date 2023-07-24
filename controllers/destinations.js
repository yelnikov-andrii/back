import Destination from "../models/Destination.js";
import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const currentModuleUrl = import.meta.url;
const currentModulePath = fileURLToPath(currentModuleUrl);
const currentDirPath = dirname(currentModulePath);

const getAll = async (req, res) => {
  const destinations = await Destination.findAll();
  res.send(destinations);
};

const create = async (req, res) => {
  const { city, country, reviews, rating } = req.body;
  const { img } = req.files;
  let fileName = uuidv4() + '.jpg';
  const absoluteFilePath = path.resolve(currentDirPath, '..', 'static', fileName);

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
};

export const destinationController = {
  getAll,
  create,
}