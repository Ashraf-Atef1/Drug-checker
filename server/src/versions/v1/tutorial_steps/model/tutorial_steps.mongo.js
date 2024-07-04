const mongoose = require('mongoose');

const tutorialStepsSchema = new mongoose.Schema({
  tutorial_steps: {
    type: Object,
    required: true
  }
});
tutorialStepsSchema.pre(/^find/, function (next) {
  this.select('-__v -_id');
  next();
});
const TutorialStepsCollection = mongoose.model('tutorial_step', tutorialStepsSchema);

module.exports = TutorialStepsCollection;
