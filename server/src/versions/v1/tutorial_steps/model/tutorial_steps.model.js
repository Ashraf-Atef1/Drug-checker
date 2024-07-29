const TutorialStepsCollection = require('./tutorial_steps.mongo');

async function getTutorialStepsDB () {
  const tutorialSteps = await TutorialStepsCollection.findOne();
  if (tutorialSteps) { return tutorialSteps.tutorial_steps; } else { return tutorialSteps; }
}

module.exports = getTutorialStepsDB;
