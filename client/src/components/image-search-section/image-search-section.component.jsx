import { Paragraph, ActiveParagraph, ImageUploaderSection, SectionBreak, UploadedImagesSection } from './image-search.style';
import ImageUploader from './image-uploader/image-uploader.component';
import ImageCard from './image-card/image-card.component';
import { imagesContext } from '../../context/images.context';
import { useContext } from 'react';
import Container from '../global-components/container/container.component';

export default function ImageSearchSection () {
  const { images } = useContext(imagesContext);

  return (
    <Container>
      <ImageUploaderSection>
        <div>
          <Paragraph>You can add multiple images for prescriptions or drugs label.</Paragraph>
          <ActiveParagraph>Please add a high quality images to get accurate results.</ActiveParagraph>
        </div>
        <ImageUploader />
      </ImageUploaderSection>
      <SectionBreak />
      <UploadedImagesSection>
        {images.map((image, index) => <ImageCard key={index} imageData={image} />)}
      </UploadedImagesSection>
    </Container>
  );
}
