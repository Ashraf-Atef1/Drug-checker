import { useContext } from 'react';
import { httpGetTutorialSteps } from './requests';
import { TutorialStepsContext } from '../context/tutorial-steps.context';
import useGetDrugs from './get-drugs.hook';
import useGetInteractions from './get-interactions.hook';
import useUploadImage from './upload-image.hook';

async function fetchImageAsFile (imageUrl) {
  try {
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    const file = new File([blob], 'uploaded_image.jpg', { type: blob.type });
    return file;
  } catch (error) {
    console.error('Error fetching image:', error);
    throw error;
  }
}
export default function useInitTutorial () {
  const { tutorialSteps, setTutorialSteps } = useContext(TutorialStepsContext);
  const { getDrugs, setSearchType, setSearchValue } = useGetDrugs();
  const { getInteractionResults } = useGetInteractions();
  const { addImage } = useUploadImage();

  async function initTutorial () {
    if (!Object.keys(tutorialSteps).length) {
      const tutorialSteps = await httpGetTutorialSteps();
      tutorialSteps['search-type'].setValueFunction = () => setSearchType('tradeName');
      tutorialSteps.search.setValueFunction = setSearchValue.bind(null, 'napro');
      tutorialSteps.search.processFunction = getDrugs.bind(null, 'napro', 'tradeName');
      tutorialSteps['similar-drugs'].processFunction = getDrugs.bind(null, 'NAPROXEN', 'genericName');
      tutorialSteps['alternative-drugs'].processFunction = getDrugs.bind(null, 'NSAID.PROPIONIC ACID DERIVATIVES', 'pharmacology');
      tutorialSteps['second-search'].setValueFunction = setSearchValue.bind(null, 'marev');
      tutorialSteps['second-search'].processFunction = getDrugs.bind(null, 'marev', 'tradeName');
      tutorialSteps['end-tutorial'].setValueFunction = () => document.querySelector('.theme-mode').click();
      setTutorialSteps(tutorialSteps);
      return;
    }
    tutorialSteps['check-interactions'].processFunction = getInteractionResults;
    tutorialSteps['image-upload'].processFunction = async () => {
      const file = await fetchImageAsFile('http://54.160.113.163/img/uploads/932_1.jpg');
      await addImage(file);
    };
  }
  return { initTutorial, tutorialSteps };
}
