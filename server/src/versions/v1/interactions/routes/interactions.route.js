const express = require('express');
const interactionsRoute = express.Router();
const { getInteractions, addInteraction, deleteInteraction, updateInteraction } = require('./interactions.controller');

interactionsRoute.get('/', getInteractions);
interactionsRoute.post('/', addInteraction);
interactionsRoute.delete('/', deleteInteraction);
interactionsRoute.patch('/', updateInteraction);

module.exports = interactionsRoute;
