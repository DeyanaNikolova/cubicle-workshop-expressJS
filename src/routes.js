const router = require('express').Router();

const cubeController = require('./controllers/cubeController');
const homeController = require('./controllers/homeController');
const accessoryController = require('./controllers/accessoryController');


router.get('/', homeController.getHomePage);
router.get('/about', homeController.getAboutPage);
router.get('/404', homeController.getErrorPage);

router.get('/create', cubeController.getCreateCube);
router.post('/create', cubeController.postCreateCube);
router.get('/cubes/details/:cubeId', cubeController.getDetails);

router.get('/cubes/attach/:cubeId', cubeController.getAttacheAccessory);
router.post('/cubes/attach/:cubeId', cubeController.postAttachAccessory);
router.use('/accessory', accessoryController);


module.exports = router;