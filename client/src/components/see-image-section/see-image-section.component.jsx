import { SeeImageContainer } from './see-image.style';
import Button from '../global-components/button/button.component';
import { useLocation, Link } from 'react-router-dom';
import Container from '../global-components/container/container.component';

export default function SeeImageSection () {
  const { imageUrl } = useLocation().state || {};

  return (
    <Container>
      <SeeImageContainer>
        <Link to='/image-search'>
          <Button type='back' text='Back' />
        </Link>
        <img src={imageUrl} alt='uploaded' />
      </SeeImageContainer>
    </Container>
  );
}
