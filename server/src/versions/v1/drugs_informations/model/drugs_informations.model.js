const DrugsInforamtionsCollection = require('./drugs_informations.mongo');
const escapeRegExp = require('escape-regexp');

async function getDrugsInformationDB (drugName, searchBy) {
  drugName = escapeRegExp(drugName);
  if (searchBy === 'tradeName') {
    const drugsInformation = await DrugsInforamtionsCollection.find({ tradeName: { $regex: drugName, $options: 'i' } });
    return drugsInformation;
  } else if (searchBy === 'genericName') {
    const drugsInformation = await DrugsInforamtionsCollection.find({ genericName: { $regex: drugName, $options: 'i' } });
    return drugsInformation;
  } else if (searchBy === 'pharmacology') {
    const drugsInformation = await DrugsInforamtionsCollection.find({ pharmacology: { $regex: drugName, $options: 'i' } });
    return drugsInformation;
  } else {
    const drugsInformation = await DrugsInforamtionsCollection.find({
      $or: [
        { tradeName: { $regex: drugName, $options: 'i' } },
        { genericName: { $regex: drugName, $options: 'i' } }
      ]
    });
    return drugsInformation;
  }
}

async function addDrugsInformationDB (drugInformation) {
  if (!drugInformation.tradeName) throw new Error('Missing required tradeName field');
  const newDrugInformation = new DrugsInforamtionsCollection(drugInformation);
  const status = await newDrugInformation.save();
  if (!status) throw new Error('Failed to add drug information');
}

async function deleteDrugsInformationDB (tradeName) {
  if (!tradeName) throw new Error('Missing required tradeName field');
  const status = await DrugsInforamtionsCollection.deleteOne({ tradeName });
  if (status.deletedCount === 0) throw new Error('Drug information not found');
}

async function updateDrugsInformationDB (drugInformation) {
  if (!drugInformation.tradeName) throw new Error('Missing required tradeName field');
  const status = await DrugsInforamtionsCollection.updateOne({ tradeName: drugInformation.tradeName }, drugInformation);
  if (status.nModified === 0) throw new Error('Drug information not found');
}

module.exports = { getDrugsInformationDB, addDrugsInformationDB, deleteDrugsInformationDB, updateDrugsInformationDB };
