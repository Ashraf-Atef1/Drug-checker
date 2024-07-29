import { createContext, useState } from 'react';

export const TutorialStepsContext = createContext({
  tutorialSteps: {},
  setTutorialSteps: () => {}
});

export default function TutorialStepsContextProvider ({ children }) {
  const [tutorialSteps, setTutorialSteps] = useState({});
  return (
    <TutorialStepsContext.Provider value={{ tutorialSteps, setTutorialSteps }}>
      {children}
    </TutorialStepsContext.Provider>
  );
}
