import { useContext } from 'react';
import { TutorialContext } from '../context/tutorial.context';
import { useNavigate } from 'react-router-dom';
import useInitTutorial from './init-tutorial.hook';
import useGetInteractions from './get-interactions.hook';

export default function useTutorial () {
  const { tutorialMode, setTutorialMode, currentTutorialInfo, setCurrentTutorialInfo } = useContext(TutorialContext);
  const navigate = useNavigate();
  const { initTutorial, tutorialSteps } = useInitTutorial();
  const { interactionsList } = useGetInteractions();

  if (tutorialMode) {
    startTutorial();
  }
  async function startTutorial () {
    document.onclick = handleUserProgress;
    await initTutorial();
    if (currentTutorialInfo.title) return;
    if (Object.keys(tutorialSteps).length) {
      sessionStorage.removeItem('tutorialMode');
      document.querySelector('header').id = 'tutorial-start';
      getStepInfo('tutorial-start');
    }
  }
  async function handleCurrentStep () {
    const { querry, nextStep, click, element, setValueFunction, processFunction } = currentTutorialInfo;
    if (click) {
      await element.click();
    }
    if (setValueFunction) {
      await setValueFunction();
    }
    if (processFunction) {
      await processFunction();
    }
    setTimeout(() => {
      document.querySelector(querry).id = nextStep;
      getStepInfo(nextStep);
    }, 0);
  }
  function handleUserProgress (event) {
    if (event.target.id === 'tutorial-guide') {
      const nextButton = document.getElementById('tutorial-next');
      if (nextButton.classList.contains('active')) return;
      nextButton.classList.add('active');
      setTimeout(() => {
        nextButton.classList.remove('active');
      }, 4000);
    }
  }

  function getStepInfo (step) {
    const currentStep = Object.create(tutorialSteps[step]);
    const [currentElement, currentDimensions] = getElementPositionById(step, currentStep);
    currentStep.dimensions = currentDimensions;
    currentStep.element = currentElement;
    setCurrentTutorialInfo(currentStep);
    setTutorialMode(true);
  }

  function activeTutorialMode () {
    navigate('/');
    sessionStorage.setItem('tutorialMode', true);
    window.location.reload();
  }
  function disableTutorialMode () {
    navigate('/');
    window.location.reload();
  }
  return {
    activeTutorialMode,
    disableTutorialMode,
    tutorialMode,
    currentTutorialInfo,
    handleCurrentStep
  };
}

function getElementPositionById (id, stepInfo) {
  const element = document.getElementById(id);
  const { top, left, right, bottom, width, height } = element.getBoundingClientRect();
  const offset = stepInfo.dimensions;
  const dimensions = { top: top + offset.top, left: left + offset.left, right, bottom, width, height };
  return [element, dimensions];
}
