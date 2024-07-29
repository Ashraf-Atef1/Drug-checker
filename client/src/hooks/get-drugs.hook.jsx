import { useContext } from 'react';
import { DrugsInformationsContext } from '../context/drugs-informations.context';
import { httpGetDrugsInformations } from './requests';
import { LoadingContext } from '../context/loading.context';

export default function useGetDrugs () {
  const { setDrugsInformations, prevSearch, setPrevSearch, searchValue, setSearchValue, searchType, setSearchType } = useContext(DrugsInformationsContext);
  const { setIsLoading } = useContext(LoadingContext);

  async function getDrugs (searchValue, searchType) {
    if (searchValue.length >= 3 && prevSearch.join() !== [searchValue, searchType].join()) {
      setIsLoading(true);
      const drugsInformations = await httpGetDrugsInformations(searchValue, searchType);
      setDrugsInformations(drugsInformations);
      setPrevSearch([searchValue, searchType]);
      setIsLoading(false);
    } else if (prevSearch.join() !== [searchValue, searchType].join()) {
      alert('Please enter at least 3 characters');
      setDrugsInformations([]);
    }
  }
  function getSimilarDrugs (genericName) {
    getDrugs(genericName, 'genericName');
  }
  function getAlternativeDrugs (pharmacology) {
    getDrugs(pharmacology, 'pharmacology');
  }
  return { getDrugs, getSimilarDrugs, getAlternativeDrugs, searchValue, setSearchValue, searchType, setSearchType };
}
