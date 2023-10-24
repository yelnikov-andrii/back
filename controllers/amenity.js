import Amenity from "../models/Amenity.js";
import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { ApiError } from "../exceptions/ApiError.js";

const currentModuleUrl = import.meta.url;
const currentModulePath = fileURLToPath(currentModuleUrl);
const currentDirPath = dirname(currentModulePath);

const getAll = async (req, res) => {
    const amenitites = await Amenity.findAll();
    res.send(amenitites);
};

const create = async (req, res) => {
  const { name } = req.body;
  const { img } = req.files;
  let fileName = uuidv4() + '.svg';
  const absoluteFilePath = path.resolve(currentDirPath, '..', 'static', fileName);

    img.mv(absoluteFilePath);

  const newAmenity = {
    name,
    img: fileName,
  };

  await Amenity.create(newAmenity);
  res.send(newAmenity);
};

export const amenityController = {
  getAll,
  create,
}