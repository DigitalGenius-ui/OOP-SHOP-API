import data from "../data/data.js";

export const getAllProducts = (req, res) => {
  res.status(200).json(data);
};
