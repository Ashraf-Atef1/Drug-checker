import { createContext, useState } from 'react';

export const DrugsInformationsContext = createContext({
  drugsInformations: [],
  setDrugsInformations: () => {},
  searchValue: '',
  setSearchValue: () => {},
  searchType: '',
  setSearchType: () => {},
  prevSearch: [],
  setPrevSearch: () => {}
});

export default function DrugsInformationsProvider ({ children }) {
  const [drugsInformations, setDrugsInformations] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [searchType, setSearchType] = useState('tradename-genaricname');
  const [prevSearch, setPrevSearch] = useState([]);
  return (
    <DrugsInformationsContext.Provider value={{
      drugsInformations,
      setDrugsInformations,
      searchValue,
      setSearchValue,
      searchType,
      setSearchType,
      prevSearch,
      setPrevSearch
    }}
    >
      {children}
    </DrugsInformationsContext.Provider>
  );
}
