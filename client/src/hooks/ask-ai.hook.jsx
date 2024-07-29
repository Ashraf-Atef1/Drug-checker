import { useState, useContext } from 'react';
import { httpAskAi } from './requests';
import { LoadingContext } from '../context/loading.context';
import { InteractionsResultsContext } from '../context/interactions-results.context';

export default function useAskAi () {
  const [aiResponse, setAiResponse] = useState(null);
  const { setIsLoading } = useContext(LoadingContext);
  const { interactionsResults } = useContext(InteractionsResultsContext);

  async function askAi () {
    setIsLoading(true);
    let requestText = 'Simlify these interactions informations in a simple english to end-user and only give the response.\n';
    for (let i = 0; i < interactionsResults.length; i++) {
      const { firstDrug, firstInteractionName, secondDrug, secondInteractionName, description, type } = interactionsResults[i];
      const interactionText = `${i + 1}: There is interaction between:
            ${firstInteractionName} from ${firstDrug}
            ${secondInteractionName} from ${secondDrug}
            Interaction type: ${type}
            Interaction description:
            ${description}
            `;
      requestText += interactionText.replace(/ +/g, ' ');
    }
    const response = await httpAskAi(requestText);
    setAiResponse(response.response);
    setIsLoading(false);
  }
  return { aiResponse, askAi };
}
