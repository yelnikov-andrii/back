import { Image } from "../models/Image.js";
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';

const currentModuleUrl = import.meta.url;
const currentModulePath = fileURLToPath(currentModuleUrl);
const currentDirPath = dirname(currentModulePath);

const getAll = async(req, res) => {
  const { stayId } = req.query;
  if (!stayId) {
    const images = await Image.findAll();
    res.send(images);
  } else {
    const images = await Image.findAll({where: {
      StayId: stayId,
    }});
  
    res.send(images);
  }
  
}

const create = async (req, res) => {
  const { stayId } = req.body;
  const { img } = req.files;
  let fileName = uuidv4() + '.jpg';
  const absoluteFilePath = path.resolve(currentDirPath, '..', 'static', fileName);

    img.mv(absoluteFilePath);

  const newImage = {
    url: fileName,
    StayId: stayId,
  };

  await Image.create(newImage);
  res.send(newImage);
};

export const imagesController = {
  getAll,
  create,
}