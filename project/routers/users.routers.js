const router = require('express').Router();
const userServices = require('../services/users.services');

router.get('/users', userServices.getUsers);
router.get('/users/:id', userServices.getUser);
router.post('/users', userServices.addNewUser);

module.exports = router;