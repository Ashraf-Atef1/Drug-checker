import { createContext, useState } from 'react';

export const LoadingContext = createContext();

export default function LoadingContextProvider ({ children }) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}
