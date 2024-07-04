import { httpGetInteractionNamesList } from './requests';
import { useContext } from 'react';
import { InteractionsListContext } from '../context/interactions-list.context';
import { LoadingContext } from '../context/loading.context';
export default function useAddToInteractionsList ({ tradeName, interactionName }) {
  const { interactionsList, setInteractionsList } = useContext(InteractionsListContext);
  const { setIsLoading } = useContext(LoadingContext);
  async function addToInteractionsList (checkDrugs = true) {
    const isDrugExsist = interactionsList.find(interaction => interaction.tradeName === tradeName);
    if (isDrugExsist) return checkDrugs && alert('This drug is already in the list');
    setIsLoading(true);
    const interactionMapingNames = await httpGetInteractionNamesList(interactionName);
    if (interactionMapingNames) {
      setInteractionsList([...interactionsList, { tradeName, interactionMapingNames }]);
    }
    setIsLoading(false);
  }
  return { addToInteractionsList };
}
