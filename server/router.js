// const express = require('express');
// const router = express.Router();
const controller = require('./controller.js') //accessing methods in controller
const router= require('express').Router(); // can be found in documentation. now we have our router

//use it and set path
router
.route('/')
.get(controller.get) //get the data from the controller
.post(controller.post);

router.route('/:index')
.delete(controller.delete)
//.update(controller.update)

module.exports = router;