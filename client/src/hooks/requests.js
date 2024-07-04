const DRUG_API_URL = 'http://54.160.113.163/api/v1';
const IMAGE_API_URL = 'http://54.160.113.163/img';

export async function httpGetDrugsInformations (searchValue, searchType = '') {
  const encodedSearchValue = encodeURIComponent(searchValue);
  const encodedSearchType = encodeURIComponent(searchType);
  const fetchPath = `${DRUG_API_URL}/drugs-information/${encodedSearchValue}?searchBy=${encodedSearchType}`;
  try {
    const DrugsInformations = await fetch(fetchPath);
    if (!DrugsInformations.ok) {
      alert('Error: Drugs information server is not responding.');
      return [];
    }
    return DrugsInformations.json();
  } catch (error) {
    alert('Error: Drugs information server is not responding.');
    return [];
  }
}

export async function httpGetInteractionNamesList (interactionName = '') {
  interactionName = encodeURIComponent(interactionName);
  const fetchPath = `${DRUG_API_URL}/interaction-names/${interactionName}`;
  try {
    const interactionNamesList = await fetch(fetchPath);
    if (!interactionNamesList.ok) {
      // alert("Error: This drug didn't have a genaric name so can not be added into the interaction-list plaese choose another drug with a genaric name.");
      return null;
    }
    return interactionNamesList.json();
  } catch (error) {
    alert('Error: Interaction names list server is not responding.');
    return null;
  }
}

export async function httpGetInteractionResults (drugsList) {
  const requestDrugs = encodeURIComponent([...new Set(drugsList)].join('+'));
  const fetchPath = `${DRUG_API_URL}/interactions/${requestDrugs}`;
  try {
    const interactionsResults = await fetch(fetchPath);
    if (!interactionsResults.ok) {
      alert('Error: Please add drugs with 2 or more diffrent active ingredients.');
      return null;
    }
    return interactionsResults.json();
  } catch (error) {
    alert('Error: Interactions results server is not responding.');
    return null;
  }
}

export async function httpGetImageData (imageData) {
  const fetchPath = `${IMAGE_API_URL}/upload`;
  try {
    const response = await fetch(fetchPath, {
      method: 'POST',
      body: imageData
    });
    if (!response.ok) {
      alert('Error: There is a problem in your uploaded images.');
      return null;
    }
    return response.json();
  } catch (error) {
    alert('Error: Image server is not responding.');
    return null;
  }
}

export async function httpAskAi (prompt) {
  const fetchPath = `${IMAGE_API_URL}/ask`;
  try {
    const response = await fetch(fetchPath, {
      method: 'POST',
      body: JSON.stringify({ prompt }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (!response.ok) {
      alert('Error: Ai server is not responding.');
      return {};
    }
    prompt = await response.json();
    return prompt;
  } catch (error) {
    alert('Error: Ai server is not responding.');
    return {};
  }
}

export async function httpGetTutorialSteps () {
  const fetchPath = `${DRUG_API_URL}/tutorial-steps`;
  try {
    const tutorialSteps = await fetch(fetchPath);
    if (!tutorialSteps.ok) {
      alert('Error: Tutorial steps server is not responding.');
      return null;
    }
    return tutorialSteps.json();
  } catch (error) {
    alert('Error: Tutorial steps server is not responding.');
    return null;
  }
}
