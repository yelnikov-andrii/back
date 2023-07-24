import Review from "../models/Review.js";
import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { where } from "sequelize";

const currentModuleUrl = import.meta.url;
const currentModulePath = fileURLToPath(currentModuleUrl);
const currentDirPath = dirname(currentModulePath);

const create = async (req, res) => {
  const { author, text } = req.body;
  const { stayId } = req.body;
  const { img } = req.files;
  let fileName = uuidv4() + '.png';
  const absoluteFilePath = path.resolve(currentDirPath, '..', 'static', fileName);

    img.mv(absoluteFilePath);

  const newPost = {
    author,
    text,
    img: fileName,
    StayId: stayId,
  }

  await Review.create(newPost);
};

const getAll = async (req, res) => {
  const { stayId } = req.query;
  if (stayId) {
    const reviews = await Review.findAll({where: {
      StayId: stayId
    }});
    
    res.send(reviews);
  }

  const reviews = await Review.findAll();
  res.send(reviews);
}

export const reviewController = {
  create,
  getAll,
}