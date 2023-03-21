const { verifyId } = require('../middlewares/verifyId');
const { productsModel } = require('../models');
 
const findAll = async () => {
  const products = await productsModel.findAll(); 

  return { type: null, message: products };
};

const findById = async (id) => {
  const error = verifyId(id);
  if (error.type) return error;

  const product = await productsModel.findById(id);
  if (!product) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };

  return { type: null, message: product };
};

module.exports = {
  findAll,
  findById,
};