const { getInteractionNamesController, addInteractionNameController, deleteInteractionNameController, updateInteractionNameController } = require('./interaction_names.controller');
const express = require('express');
const interactionNamesRoute = express.Router();

interactionNamesRoute.get('/', getInteractionNamesController);
interactionNamesRoute.post('/', addInteractionNameController);
interactionNamesRoute.delete('/', deleteInteractionNameController);
interactionNamesRoute.patch('/', updateInteractionNameController);

module.exports = interactionNamesRoute;
