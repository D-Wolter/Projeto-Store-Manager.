const { productsService } = require('../services');

const getAllProducts = async (_req, res) => {
  const { message } = await productsService.findAll();
  res.status(200).json(message);
};

const getByIdProduct = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.findById(id);
  if (type) return res.status(404).json({ message });
  return res.status(200).json(message);
};

const addProduct = async (req, res) => {
  const { name } = req.body;
  const { message } = await productsService.insert(name);
  return res.status(201).json(message);
};

module.exports = {
  getAllProducts,
  getByIdProduct,
  addProduct,
};
