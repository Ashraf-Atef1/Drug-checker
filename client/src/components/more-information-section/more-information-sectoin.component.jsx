import { useLocation, Link } from 'react-router-dom';
import Button from '../global-components/button/button.component';
import { MoreInformationContainer } from './more-information.style';
import Container from '../global-components/container/container.component';

export default function MoreInformationSection () {
  const { tradeName, genericName, pharmacology, moreInformation, route, company } = useLocation().state || {};
  return (
    <Container>
      <Link to='/'>
        <Button type='back' text='Back' />
      </Link>
      <MoreInformationContainer>
        {tradeName && <h2><span>TradeName: </span>{tradeName}</h2>}
        {genericName && <h3><span>GenericName: </span>{genericName.toLowerCase()}</h3>}
        {pharmacology && <p><span>Pharmacology: </span>{pharmacology.toLowerCase()}</p>}
        {moreInformation && <p><span>Descrption: </span>{moreInformation.toLowerCase()}</p>}
        {route && <p><span>Route: </span>{route.toLowerCase()}</p>}
        {company && <p><span>Company: </span>{company}</p>}
      </MoreInformationContainer>
    </Container>
  );
}
