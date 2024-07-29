const InteractionsCollection = require('./interactions.mongo');

function getInteractionsNames (drugNames) {
  const drugsArray = drugNames.split('+').sort();
  const InteractionNamesArray = [];

  if (drugsArray.length <= 1) throw new Error('You must provide at least two drugs to check for interactions in format: drug1+drug2+drug3...');
  for (let i = 0; i < drugsArray.length - 1; i++) {
    for (let j = i + 1; j < drugsArray.length; j++) { InteractionNamesArray.push(new RegExp(`${drugsArray[i]}\\+${drugsArray[j]}`, 'i')); }
  }
  return InteractionNamesArray;
}

async function getInteractionsDB (drugNames) {
  const InteractionsRegexList = getInteractionsNames(drugNames);
  const interactionsFromDB = await InteractionsCollection.find({ name: { $in: InteractionsRegexList } });

  return interactionsFromDB;
}

async function addInteractionDB ({ name, interaction, type }) {
  if (!name || !interaction || !type) throw new Error('Missing required fields');
  if (!/.+[+].+/.test(name)) throw new Error('Invalid drug name');
  const newInteraction = new InteractionsCollection({ name, interaction, type });
  const status = await newInteraction.save();
  if (!status) throw new Error('Failed to add interaction');
}

async function deleteInteractionDB (name) {
  if (!name) throw new Error('Missing required fields');
  const status = await InteractionsCollection.deleteOne({ name });
  if (status.deletedCount === 0) throw new Error('Interaction not found');
}

async function updateInteractionDB ({ name, interaction, type }) {
  if (!name || !interaction || !type) throw new Error('Missing required fields');
  const status = await InteractionsCollection.updateOne({ name }, { interaction, type });
  if (status.nModified === 0) throw new Error('Interaction not found');
}

module.exports = { getInteractionsDB, addInteractionDB, deleteInteractionDB, updateInteractionDB };
