import { SearchSectionForm, SearchFormTitle, SearchInputContainer, SearchInput, SearchButton, SearchWithSection } from './search-section.style';
import useGetDrugs from '../../../hooks/get-drugs.hook';

export default function SearchSection () {
  const {
    getDrugs,
    searchValue,
    setSearchValue,
    searchType,
    setSearchType
  } = useGetDrugs();
  function handleSearchChange (event) {
    setSearchValue(event.target.value);
  }

  function handleSearchTypeChange (event) {
    setSearchType(event.target.value);
  }
  function handleSearchSubmit (event) {
    event.preventDefault();
    getDrugs(searchValue, searchType);
  }
  return (
    <SearchSectionForm onSubmit={handleSearchSubmit}>
      <SearchFormTitle>Search for drugs:</SearchFormTitle>
      <SearchInputContainer>
        <SearchInput id='search' type='search' placeholder='Enter a drug name...' value={searchValue} onChange={handleSearchChange} />
        <SearchButton type='submit'>Search</SearchButton>
      </SearchInputContainer>
      <SearchWithSection>
        <label htmlFor='search-type'>Search with:</label>
        <select name='search-type' value={searchType} onChange={handleSearchTypeChange}>
          <option value='tradeName-genaricName'>Trade-name & Genaric-name</option>
          <option value='tradeName'>Tradename</option>
          <option value='genericName'>Generic-name</option>
          <option value='pharmacology'>Pharmacology</option>
        </select>
      </SearchWithSection>
    </SearchSectionForm>
  );
}
