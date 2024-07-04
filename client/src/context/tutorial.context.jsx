import { createContext, useState } from 'react';

export const TutorialContext = createContext({
  tutorialMode: false,
  currentTutorialStep: {},
  setTutorialMode: () => {},
  setCurrentTutorialStep: () => {}
});

export default function TutorialContextProvider ({ children }) {
  const [tutorialMode, setTutorialMode] = useState(sessionStorage.getItem('tutorialMode'));
  const [currentTutorialInfo, setCurrentTutorialInfo] = useState({
    title: '',
    description: '',
    dimensions: { top: 0, left: 0, right: 0, bottom: 0, width: 0, height: 0 }
  });

  return (
    <TutorialContext.Provider value={{
      tutorialMode,
      setTutorialMode,
      currentTutorialInfo,
      setCurrentTutorialInfo
    }}
    >
      {children}
    </TutorialContext.Provider>
  );
}
