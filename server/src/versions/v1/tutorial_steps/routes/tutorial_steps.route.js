const express = require('express');
const tutorialStepsRoute = express.Router();
const getTutorialSteps = require('./tutorial_steps.controller');

tutorialStepsRoute.get('/', getTutorialSteps);

module.exports = tutorialStepsRoute;
