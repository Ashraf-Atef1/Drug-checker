const mongoose = require('mongoose');

const interactionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  interaction: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  }
});
interactionSchema.pre(/^find/, function (next) {
  this.select('-__v -_id');
  next();
});
const InteractionsCollection = mongoose.model('Interaction', interactionSchema);

module.exports = InteractionsCollection;
