import { DataTypes } from "sequelize";
import { sequelize } from "../utils/database.js";
import Stay from "./Stay.js";

export const Image = sequelize.define('Image', {
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Stay.hasMany(Image);
Image.belongsTo(Stay);

Image.sync();