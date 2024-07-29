import { createContext, useState } from 'react';

export const InteractionsResultsContext = createContext({
  interactionsResults: null,
  setInteractionsResults: () => {}
});

export default function InteractionsResultsProvider ({ children }) {
  const [interactionsResults, setInteractionsResults] = useState(null);
  return (
    <InteractionsResultsContext.Provider value={{
      interactionsResults,
      setInteractionsResults
    }}
    >
      {children}
    </InteractionsResultsContext.Provider>
  );
}
