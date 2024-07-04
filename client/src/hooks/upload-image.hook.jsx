import { useContext } from 'react';
import { imagesContext } from '../context/images.context';
import { InteractionsListContext } from '../context/interactions-list.context';
import { httpGetImageData, httpGetDrugsInformations, httpGetInteractionNamesList } from './requests';
import { LoadingContext } from '../context/loading.context';

export default function useUploadImage () {
  const { images, setImages } = useContext(imagesContext);
  const { interactionsList, setInteractionsList } = useContext(InteractionsListContext);
  const { setIsLoading } = useContext(LoadingContext);

  async function addImage (file) {
    setIsLoading(true);
    const formData = new FormData();
    formData.append('file', file);
    const imageData = await httpGetImageData(formData);
    if (imageData) {
      images.push(imageData);
      setImages([...images]);
      for (let i = 0; i < imageData.drugs.length; i++) {
        const currentDrug = imageData.drugs[i];
        const drugsInformations = await httpGetDrugsInformations(currentDrug);
        const tradeName = drugsInformations[0].tradeName;
        const isDrugExsist = interactionsList.find(interaction => interaction.tradeName === tradeName);
        if (!isDrugExsist) {
          const interactionMapingNames = await httpGetInteractionNamesList(drugsInformations[0].interactionName);
          interactionsList.push({ tradeName, interactionMapingNames });
        }
      }
      setInteractionsList([...interactionsList]);
    }
    setIsLoading(false);
  }
  function onDrop (acceptedFiles) {
    acceptedFiles.forEach(file => {
      addImage(file);
    });
  }
  function openCamera () {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.capture = 'environment';
    input.onchange = async (event) => {
      const file = event.target.files[0];
      file && addImage(file);
    };
    input.click();
  }
  return { onDrop, openCamera, addImage };
}
