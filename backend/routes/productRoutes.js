const express = require('express');
const router = express.Router();
const {getProducts, getProductById} = require('../controllers/productController');

router.get('/category/:categoryName/search/:searchQuery', getProducts); //anything after : is a dynamic value
router.get('/category/:categoryName', getProducts);
router.get('/search/:searchQuery', getProducts);
router.get('/', getProducts);
router.get('/:id', getProductById);

module.exports = router;
