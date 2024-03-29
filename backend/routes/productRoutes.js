const express = require('express');
const router = express.Router();
const {
  getProducts,
  getProductById,
  getBestsellers,
  adminGetProducts,
  adminDeleteProducts,
  adminCreateProducts,
  adminUpdateProduct,
  adminUpload
} = require('../controllers/productController');

router.get('/category/:categoryName/search/:searchQuery', getProducts); //anything after : is a dynamic value
router.get('/category/:categoryName', getProducts);
router.get('/search/:searchQuery', getProducts);
router.get('/', getProducts);
router.get('/bestsellers', getBestsellers);
router.get('/get-one/:id', getProductById);

//admin routes
router.get('/admin', adminGetProducts);
router.delete('/admin/:id', adminDeleteProducts);
router.put("/admin/:id", adminUpdateProduct);
router.post('/admin/upload', adminUpload);
router.post('/admin', adminCreateProducts);

module.exports = router;
