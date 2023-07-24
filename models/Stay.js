import { DataTypes } from "sequelize";
import { sequelize } from "../utils/database.js";
import Destination from "./Destination.js";

const Stay = sequelize.define('Stay', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  street: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  propertyType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  about: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  accuracy: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  value: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  location: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  cleanliness: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  checkIn: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  communication: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  amenities: {
    type: DataTypes.ARRAY(DataTypes.INTEGER),
    allowNull: false,
  },
  onMap: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

Stay.belongsTo(Destination);
Destination.hasMany(Stay);

Stay.sync();

export default Stay;