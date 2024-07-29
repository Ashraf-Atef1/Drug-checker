import SearchSection from './search-section/search-section.component';
import DrugCard from './drug-card/drug-card.component';
import { SectionBreak, DrugCardContainer } from './home.style';
import { useContext } from 'react';
import { DrugsInformationsContext } from '../../context/drugs-informations.context';
import Button from '../../components/global-components/button/button.component';
import useTutorial from '../../hooks/tutorial.hook';
import Container from '../global-components/container/container.component';

export default function HomeSection () {
  const { drugsInformations } = useContext(DrugsInformationsContext);
  const { activeTutorialMode } = useTutorial();

  return (
    <Container>
      <Button type='blur' text='How to use the app' onClick={activeTutorialMode} />
      <SearchSection />
      <SectionBreak />
      <DrugCardContainer>
        {drugsInformations.map((drugData, index) => <DrugCard key={index} drugData={drugData} />)}
      </DrugCardContainer>
    </Container>
  );
}
