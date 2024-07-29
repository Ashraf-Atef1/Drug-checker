const { getDrugsInformationDB, addDrugsInformationDB, deleteDrugsInformationDB, updateDrugsInformationDB } = require('../model/drugs_informations.model');

async function getDrugsInformation (req, res) {
  try {
    const drugsInformation = await getDrugsInformationDB(req.query.drugName, req.query.searchBy);
    res.status(200).send(drugsInformation);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
}

async function addDrugsInformation (req, res) {
  try {
    await addDrugsInformationDB(req.body);
    res.status(201).send({ message: 'Drug information added successfully' });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
}

async function deleteDrugsInformation (req, res) {
  try {
    await deleteDrugsInformationDB(req.query.tradeName);
    res.status(200).send({ message: 'Drug information deleted successfully' });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
}

async function updateDrugsInformation (req, res) {
  try {
    await updateDrugsInformationDB(req.body);
    res.status(200).send({ message: 'Drug information updated successfully' });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
}

module.exports = { getDrugsInformation, addDrugsInformation, deleteDrugsInformation, updateDrugsInformation };
