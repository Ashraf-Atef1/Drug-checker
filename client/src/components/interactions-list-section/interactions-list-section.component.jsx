import InteractionsDrugsList from './interactions-drugs-list/interactions-drugs-list.component';
import InteractionCardsSection from './interaction-cards-section/interaction-cards-section.component';
import { useContext } from 'react';
import { InteractionsResultsContext } from '../../context/interactions-results.context';
import Container from '../global-components/container/container.component';

export default function InteractionsListSection () {
  const { interactionsResults } = useContext(InteractionsResultsContext);
  return (
    <Container>
      <InteractionsDrugsList />
      {interactionsResults != null ? <InteractionCardsSection interactions={interactionsResults} /> : ''}
    </Container>
  );
}
