import { InteractionCardContainer } from './interaction-card.style';

export default function InteractionCard ({ interaction }) {
  return (
    <InteractionCardContainer>
      <h4>There is interaction between:</h4>
      <p><span>{interaction.firstInteractionName}</span><b> from </b><span>{interaction.firstDrug}</span></p>
      <p><span>{interaction.secondInteractionName}</span><b> from </b><span>{interaction.secondDrug}</span></p>
      <p><b>Interaction type: </b><span>{interaction.type}</span></p>
      <h4>Interaction description:</h4>
      <p dangerouslySetInnerHTML={{ __html: interaction.description }} />
    </InteractionCardContainer>
  );
}
