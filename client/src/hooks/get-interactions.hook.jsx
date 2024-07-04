import { httpGetInteractionResults } from './requests';
import { useContext } from 'react';
import { InteractionsResultsContext } from '../context/interactions-results.context';
import { InteractionsListContext } from '../context/interactions-list.context';
import { LoadingContext } from '../context/loading.context';

export default function useGetInteractions () {
  const { interactionsResults, setInteractionsResults } = useContext(InteractionsResultsContext);
  const { interactionsList } = useContext(InteractionsListContext);
  const { setIsLoading } = useContext(LoadingContext);

  async function getInteractionResults () {
    const drugsList = interactionsList.map(drug => ({
      tradeName: drug.tradeName,
      interactionNames: drug.interactionMapingNames.map(interaction => interaction.interactionName)
    }));
    const interactionNames = drugsList.flatMap(drug => drug.interactionNames);
    if (interactionNames.length) {
      setIsLoading(true);
      const interactionsResponse = await httpGetInteractionResults(interactionNames);
      if (interactionsResponse) {
        const interactionsResults = createResultsObject(interactionsResponse, drugsList);
        setInteractionsResults(interactionsResults);
      } else {
        setInteractionsResults(null);
      }
      setIsLoading(false);
    } else {
      setInteractionsResults([]);
    }
  }
  return { interactionsList, interactionsResults, getInteractionResults };
}
function getDrugTradeName (interactionDrugName, drugsList) {
  for (const drug of drugsList) {
    for (const interaction of drug.interactionNames) {
      if (interactionDrugName.includes(interaction)) {
        return drug.tradeName;
      }
    }
  }
  return null;
}
function createResultsObject (interactionsResponse, drugsList) {
  const interactionsResults = interactionsResponse.map(interaction => {
    const [firstInteractionName, secondInteractionName] = interaction.name.split('+');
    const description = interaction.interaction;
    const type = interaction.type;
    const firstDrug = getDrugTradeName(firstInteractionName, drugsList);
    const secondDrug = getDrugTradeName(secondInteractionName, drugsList);
    return {
      firstDrug,
      firstInteractionName,
      secondDrug,
      secondInteractionName,
      description,
      type
    };
  });
  return interactionsResults;
}
