const router = require('express').Router();
const { Category, Product } = require('../../models');


// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try{
    const catergoryData = await Category.findAll({
      include: [
        {model: Product, attributes:['id', 'product_name', 'price', 'stock', 'category_id']}
      ],
    });
    res.status(200).json(catergoryData);
  } catch(err){
    res.status(500).json(err);
  }
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try{
    const oneCatData = await Category.findByPk(req.params.id,{
      include: [
        {model: Product, attributes:['id', 'product_name', 'price', 'stock', 'category_id']}
      ],
    });
    res.status(200).json(oneCatData);
  } catch(err){
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new category
  try{
    const catergoryData = await Category.findByPk(req.params.id,{
      include: [
        {model: Product, attributes:['id', 'product_name', 'price', 'stock', 'category_id']}
      ],
    });
    res.status(200).json(oneCatData);
  } catch(err){
    res.status(500).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;