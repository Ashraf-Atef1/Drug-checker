import { ImageCardContainer, ImageCardImage, InsideImageContainer, DrugTitlesContainer } from './image-card.style';
import Button from '../../global-components/button/button.component';
import ImageCardDrug from '../image-card-drug/image-card-drug.component';
import { Link } from 'react-router-dom';
import useRemoveDrug from '../../../hooks/remove-drug.hook';

export default function ImageCard ({ imageData }) {
  const { removeImage } = useRemoveDrug();
  const handleRemoveImage = () => removeImage(imageData);
  return (
    <ImageCardContainer>
      <InsideImageContainer>
        <Link state={{ imageUrl: imageData.url }} to='/see-image'>
          <ImageCardImage src={imageData.url} />
        </Link>
        <Button text='Remove' onClick={handleRemoveImage} />
      </InsideImageContainer>
      <DrugTitlesContainer>
        {imageData.drugs.map((drugName, index) => <ImageCardDrug key={index} drugName={drugName} imageUrl={imageData.url} />)}
      </DrugTitlesContainer>
    </ImageCardContainer>
  );
}
