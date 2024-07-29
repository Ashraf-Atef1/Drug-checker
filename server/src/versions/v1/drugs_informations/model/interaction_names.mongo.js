const mongoose = require('mongoose');

const interactionNameSchema = new mongoose.Schema({
  drugName: {
    type: String,
    required: true
  },
  interactionName: String
});
interactionNameSchema.pre(/^find/, function (next) {
  this.select('-__v -_id');
  next();
});
const InteractionDrugNamesCollection = mongoose.model('Interaction_drug_name', interactionNameSchema);

module.exports = InteractionDrugNamesCollection;
