const { getDrugsInformation, addDrugsInformation, deleteDrugsInformation, updateDrugsInformation } = require('./drugs_informations.controller');
const express = require('express');
const drugsInformationRoute = express.Router();

drugsInformationRoute.get('/', getDrugsInformation);
drugsInformationRoute.post('/', addDrugsInformation);
drugsInformationRoute.delete('/', deleteDrugsInformation);
drugsInformationRoute.patch('/', updateDrugsInformation);

module.exports = drugsInformationRoute;
