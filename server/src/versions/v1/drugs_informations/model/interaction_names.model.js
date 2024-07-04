const InteractionDrugNamesCollection = require('./interaction_names.mongo');

async function getInteractionNames (interactionNames) {
  const interactionNamesArray = interactionNames.split('+').sort();
  const newInteractionNames = await InteractionDrugNamesCollection.find({ drugName: { $in: interactionNamesArray } });
  console.log(newInteractionNames);
  return newInteractionNames;
}

async function addInteractionName ({ drugName, interactionName }) {
  if (!drugName || !interactionName) throw new Error('Missing required fields');
  const newInteractionName = new InteractionDrugNamesCollection({ drugName, interactionName });
  const status = await newInteractionName.save();
  if (!status) throw new Error('Failed to add interaction name');
}

async function deleteInteractionName (drugName) {
  if (!drugName) throw new Error('Missing required fields');
  const status = await InteractionDrugNamesCollection.deleteOne({ drugName });
  if (status.deletedCount === 0) throw new Error('Interaction name not found');
}

async function updateInteractionName ({ drugName, interactionName }) {
  if (!drugName || !interactionName) throw new Error('Missing required fields');
  const status = await InteractionDrugNamesCollection.updateOne({ drugName }, { interactionName });
  if (status.nModified === 0) throw new Error('Interaction name not found');
}
module.exports = { getInteractionNames, addInteractionName, deleteInteractionName, updateInteractionName };
