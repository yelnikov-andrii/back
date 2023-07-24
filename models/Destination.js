import { DataTypes } from "sequelize";
import { sequelize } from "../utils/database.js";

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

Destination.sync({force: false});

export default Destination;