const { getInteractionNames, addInteractionName, deleteInteractionName, updateInteractionName } = require('../model/interaction_names.model');

async function getInteractionNamesController (req, res) {
  try {
    const interactionNames = await getInteractionNames(req.query.interactionNames);
    res.status(200).send(interactionNames);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
}

async function addInteractionNameController (req, res) {
  try {
    await addInteractionName(req.body);
    res.status(201).send({ message: 'Interaction name added successfully' });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
}

async function deleteInteractionNameController (req, res) {
  try {
    await deleteInteractionName(req.query.drugName);
    res.status(200).send({ message: 'Interaction name deleted successfully' });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
}

async function updateInteractionNameController (req, res) {
  try {
    await updateInteractionName(req.body);
    res.status(200).send({ message: 'Interaction name updated successfully' });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
}

module.exports = { getInteractionNamesController, addInteractionNameController, deleteInteractionNameController, updateInteractionNameController };
