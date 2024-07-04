import { ReactComponent as RemoveIcon } from '../../../assets/remove.svg';
import { ImageCardDrugContainer, DrugRemoveButton } from './image-card-drug.style';
import useRemoveDrug from '../../../hooks/remove-drug.hook';

export default function ImageCardDrug ({ drugName, imageUrl }) {
  const { removeImageDrug } = useRemoveDrug();
  function handleRemoveDrug () {
    removeImageDrug({ drugName, imageUrl });
  }
  return (
    <ImageCardDrugContainer>
      <p>{drugName}</p>
      <DrugRemoveButton onClick={handleRemoveDrug}><RemoveIcon /></DrugRemoveButton>
    </ImageCardDrugContainer>
  );
}
