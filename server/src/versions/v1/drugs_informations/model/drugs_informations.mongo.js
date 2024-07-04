const mongoose = require('mongoose');

const drugSchema = new mongoose.Schema({
  tradeName: {
    type: String,
    required: true
  },
  genericName: String,
  price: Number,
  company: String,
  moreInformation: String,
  route: String,
  isReviewed: Boolean,
  interactionName: String
});
drugSchema.pre(/^find/, function (next) {
  this.select('-__v -_id');
  next();
});

const DrugsInforamtionsCollection = mongoose.model('Drugs_information', drugSchema);
module.exports = DrugsInforamtionsCollection;
