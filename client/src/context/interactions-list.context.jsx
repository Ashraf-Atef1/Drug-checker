import { createContext, useState } from 'react';

export const InteractionsListContext = createContext({
  interactionsList: [],
  setInteractionsList: () => {}
});

export default function InteractionsListProvider ({ children }) {
  const [interactionsList, setInteractionsList] = useState([]);
  return (
    <InteractionsListContext.Provider value={{
      interactionsList,
      setInteractionsList
    }}
    >
      {children}
    </InteractionsListContext.Provider>
  );
}
