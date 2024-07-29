import Button from '../../button/button.component';
import { DrugCardContainer, ButtonsContainer, DrugCardTitle, DrugCardDescription } from './drug-card.style';
import { Link } from 'react-router-dom';
import useGetDrugs from '../../../hooks/get-drugs.hook';
import useAddToInteractionsList from '../../../hooks/add-to-interactions-list.hook';

export default function DrugCard ({ drugData }) {
  const { tradeName, genericName, pharmacology } = drugData;
  const { getSimilarDrugs, getAlternativeDrugs } = useGetDrugs();
  const { addToInteractionsList } = useAddToInteractionsList(drugData);
  return (
    <DrugCardContainer>
      <div className='drug-card-info'>
        {tradeName && <DrugCardTitle><span>Trade Name:</span> {tradeName}</DrugCardTitle>}
        {genericName && <DrugCardDescription><span>Generic Name:</span> {genericName.toLowerCase()}</DrugCardDescription>}
        {pharmacology && <DrugCardDescription><span>Pharmacology:</span> {pharmacology.toLowerCase()}</DrugCardDescription>}
      </div>
      <ButtonsContainer>
        <Button text='Similar drugs' onClick={() => getSimilarDrugs(genericName)} />
        <Button text='Alternative drugs' onClick={() => getAlternativeDrugs(pharmacology)} />
        <Link state={drugData} to='more-information'><Button text='More information' /></Link>
        <Button text='Add to interactions-check list' onClick={addToInteractionsList} />
      </ButtonsContainer>
    </DrugCardContainer>
  );
}
