const Product = require('../model/productModel');
const mongoose = require('mongoose');

const getProducts = async (req, res) => {

  try {

    const data = await Product.find();

    res.status(200).json({
      success: true,
      products: data
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: 'Server Error'
    });

  }

};

const addProduct = async (req, res) => {

  try {

    const data = req.body;

    const result = await mongoose.connection
      .collection('products')
      .insertOne(data);

    res.status(201).json({
      success: true,
      message: 'Product Added Successfully',
      result
    });

  } catch (error) {

    console.log(error); // IMPORTANT

    res.status(500).json({
      success: false,
      message: 'Server Error'
    });

  }

};

module.exports = {
  getProducts,addProduct
};