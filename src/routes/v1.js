const express = require('express');
const router = express.Router();

const passport = require('passport');
const path = require('path');

// require controller
const UserController 	= require('../controllers/user.controller');
const CompanyController = require('../controllers/company.controller');
const HomeController 	= require('../controllers/home.controller');

router.get('/', function(req, res, next) {
    res.json({status:"success", message:"Parcel Pending API", data:{"version_number":"v1.0.0"}})
});

// /companies
router.get('/companies', CompanyController.getAll);// R


router.get('/dash', HomeController.Dashboard)

module.exports = router;