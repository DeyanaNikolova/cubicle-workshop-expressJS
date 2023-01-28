const router = require('express').Router();
const { restart } = require('nodemon');
const Accessory = require('../models/Accessory');

// URL : '/accessory/create'
router.get('/create', (req, res) => {
    res.render('accessory/create');
});

router.post('/create', async (req, res) => {
    const { name, description, imageUrl } = req.body;

  const accessoryDb =  await Accessory.create({ name, description, imageUrl });

  console.log(accessoryDb._id);

  res.redirect('/');
});

module.exports = router;