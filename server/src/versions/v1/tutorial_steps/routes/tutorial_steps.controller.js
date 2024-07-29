const getTutorialStepsDB = require('../model/tutorial_steps.model');

async function getTutorialSteps (req, res) {
  try {
    const tutorialSteps = await getTutorialStepsDB();
    res.status(200).send(tutorialSteps);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
}

module.exports = getTutorialSteps;
