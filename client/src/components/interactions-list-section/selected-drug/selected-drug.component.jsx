import { SelectedDrugContainer, DrugRemoveButton, ApiMappingContainer } from './selected-drug.style';
import { ReactComponent as RemoveIcon } from '../../../assets/remove.svg';
import useRemoveDrug from '../../../hooks/remove-drug.hook';

export default function SelectedDrug ({ tradeName, apiMaping }) {
  const { removeDrug } = useRemoveDrug();
  const handleRemoveDrug = () => removeDrug(tradeName);
  return (
    <SelectedDrugContainer>
      <ApiMappingContainer>
        <p>{tradeName}</p>
        <ul>
          {apiMaping.map(({ drugName, interactionName }, index) => <li key={index}><p>{drugName}: {interactionName}</p></li>)}
        </ul>
      </ApiMappingContainer>
      <DrugRemoveButton onClick={handleRemoveDrug}><RemoveIcon /></DrugRemoveButton>
    </SelectedDrugContainer>
  );
}
