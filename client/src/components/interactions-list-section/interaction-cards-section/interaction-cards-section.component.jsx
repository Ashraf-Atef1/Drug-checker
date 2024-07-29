import InteractionCard from '../interaction-card/interaction-card.component';
import { InteractionCardsSectionContainer } from './interaction-cards-section.style';
import Button from '../../global-components/button/button.component';
import AiResponse from '../ai-response/ai-response.component';
import useAskAi from '../../../hooks/ask-ai.hook';

export default function InteractionCardsSection ({ interactions }) {
  const { aiResponse, askAi } = useAskAi();
  const handleAskAi = () => askAi();
  return (
    <InteractionCardsSectionContainer>
      <h2>Interactions list:</h2>
      {interactions.map((interaction, index) => <InteractionCard key={index} interaction={interaction} />)}
      {interactions.length
        ? <Button type='w-50' text='Ask Ai simplify the interactions' onClick={handleAskAi} />
        : 'No interactions found.'}
      {aiResponse && <AiResponse aiResponse={aiResponse} />}
      <br id='ai-response' />
    </InteractionCardsSectionContainer>
  );
}
