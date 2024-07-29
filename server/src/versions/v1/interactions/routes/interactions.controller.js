const { getInteractionsDB, addInteractionDB, deleteInteractionDB, updateInteractionDB } = require('../model/interactions.model');

async function getInteractions (req, res) {
  try {
    const interactions = await getInteractionsDB(req.query.drugs);
    res.status(200).send(interactions);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
}

async function addInteraction (req, res) {
  try {
    await addInteractionDB(req.body);
    res.status(201).send({ message: 'Interaction added successfully' });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
}

async function deleteInteraction (req, res) {
  try {
    await deleteInteractionDB(req.query.name);
    res.status(200).send({ message: 'Interaction deleted successfully' });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
}

async function updateInteraction (req, res) {
  try {
    await updateInteractionDB(req.body);
    res.status(200).send({ message: 'Interaction updated successfully' });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
}

module.exports = { getInteractions, addInteraction, deleteInteraction, updateInteraction };
