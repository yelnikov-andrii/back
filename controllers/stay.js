import Stay from "../models/Stay.js";

const getAll = async (req, res) => {
  const { limit, page } = req.query;

  if (limit && page) {
    const stays = await Stay.findAll();
    const firstElement = page * limit - limit;
    const lastElement = page * limit;
    res.send({ data: stays.slice(firstElement, lastElement), countOfElements: stays.length, currentPage: page });
    return;
  }
  const stays = await Stay.findAll();
  res.send(stays);
};

const getOne = async (req, res) => {
  const { stayId } = req.params;
  const stay = await Stay.findOne({ where: {
    id: stayId,
  }});
  res.send(stay);
};

const create = async (req, res) => {
  try {
    const { DestinationId, name, rating, street, propertyType, about, price, accuracy, value, cleanliness, checkIn, communication, amenities, location, onMap } = req.body;
    
    const newStay = await Stay.create({
      DestinationId,
      name: name,
      rating: rating,
      street: street,
      propertyType: propertyType,
      about: about,
      price: price,
      accuracy: accuracy,
      value: value,
      cleanliness: cleanliness,
      checkIn: checkIn,
      communication: communication,
      amenities: amenities,
      location: location,
      onMap: onMap
    });

    res.status(201).json(newStay);
  } catch (error) {
    console.error('Error creating Stay:', error);
    res.status(500).json({ error: 'Failed to create Stay' });
  }
};

export const stayController = {
  getAll,
  getOne,
  create
}