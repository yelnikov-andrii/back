import { DataTypes } from "sequelize";
import { sequelize } from "../utils/database.js";

const Amenity = sequelize.define('Amenity', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  img: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
});

Amenity.sync({force: false});

export default Amenity;