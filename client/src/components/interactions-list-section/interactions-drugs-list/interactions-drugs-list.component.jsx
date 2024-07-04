import { InteractionsDrugsContainer, InteractionsHeaderContainer } from './interactions-drugs-list.style';
import SelectedDrug from '../selected-drug/selected-drug.component';
import Button from '../../global-components/button/button.component';
import useGetInteractions from '../../../hooks/get-interactions.hook';
import useRemoveDrug from '../../../hooks/remove-drug.hook';

export default function InteractionsDrugsList () {
  const { interactionsList, getInteractionResults } = useGetInteractions();
  const handleCheckInteractions = () => getInteractionResults();
  const { removeAllDrugs } = useRemoveDrug();

  return (
    <section>
      <InteractionsHeaderContainer>
        <h2>Drugs list:</h2>
        {interactionsList.length ? <Button type='blur' text='Remove all' onClick={removeAllDrugs} /> : null}
      </InteractionsHeaderContainer>
      <InteractionsDrugsContainer>
        {interactionsList.map(({ tradeName, interactionMapingNames }, index) => <SelectedDrug key={index} tradeName={tradeName} apiMaping={interactionMapingNames} />)}
      </InteractionsDrugsContainer>
      {
                interactionsList.length
                  ? <Button type='w-100' text='Check interactions' onClick={handleCheckInteractions} />
                  : 'Please select drugs to check interactions.'
            }
    </section>
  );
}
