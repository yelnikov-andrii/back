import { DataTypes } from "sequelize";
import { sequelize } from "../utils/database.js";
import Stay from "./Stay.js";

const Review = sequelize.define('Review', {
  author: {
    type: DataTypes.STRING,
    allowNull: false
  },
  text: {
    type: DataTypes.STRING,
    allowNull: false
  },
  img: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
});

Stay.hasMany(Review);
Review.belongsTo(Stay);

Review.sync();

export default Review;