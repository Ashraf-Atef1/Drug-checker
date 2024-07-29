import { useContext } from 'react';
import { InteractionsListContext } from '../context/interactions-list.context';
import { InteractionsResultsContext } from '../context/interactions-results.context';
import { imagesContext } from '../context/images.context';

export default function useRemoveDrug () {
  const { interactionsList, setInteractionsList } = useContext(InteractionsListContext);
  const { setInteractionsResults } = useContext(InteractionsResultsContext);
  const { images, setImages } = useContext(imagesContext);
  function removeDrug (tradeName) {
    const newInteractionsList = interactionsList.filter(({ tradeName: selectedTradeName }) => selectedTradeName !== tradeName);
    setInteractionsList(newInteractionsList);
    setInteractionsResults(null);
  }
  function removeAllDrugs () {
    setInteractionsList([]);
    setInteractionsResults(null);
  }
  function removeImage (imageData) {
    const newInteractionsList = interactionsList.filter(({ tradeName }) => !imageData.drugs.includes(tradeName));
    setInteractionsList(newInteractionsList);
    setInteractionsResults(null);
    setImages(images.filter(image => image.url !== imageData.url));
  }
  function removeImageDrug ({ drugName, imageUrl }) {
    const newImages = images.map(image => {
      if (image.url === imageUrl) {
        return {
          url: imageUrl,
          drugs: image.drugs.filter(drug => drug !== drugName)
        };
      }
      return image;
    });
    setImages(newImages);
    removeDrug(drugName);
  }
  return { removeDrug, removeAllDrugs, removeImage, removeImageDrug };
}
