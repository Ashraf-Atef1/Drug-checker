const { getDrugsInformation, addDrugsInformation, deleteDrugsInformation, updateDrugsInformation } = require('./drugs_informations.controller');
const express = require('express');
const drugsInformationRoute = express.Router();

drugsInformationRoute.get('/:drugName', getDrugsInformation);
drugsInformationRoute.post('/', addDrugsInformation);
drugsInformationRoute.delete('/:tradeName', deleteDrugsInformation);
drugsInformationRoute.patch('/', updateDrugsInformation);

module.exports = drugsInformationRoute;
