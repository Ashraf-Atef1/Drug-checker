import React from 'react';
import { useDropzone } from 'react-dropzone';
import { ImageUploaderContainer, ImageUploaderButton, UploaderButtonsContainer } from './image-uploader.style';
import { ReactComponent as CameraIcon } from '../../../assets/camera.svg';
import { ReactComponent as ImageFile } from '../../../assets/file-image.svg';
import useUploadImage from '../../../hooks/upload-image.hook';

const ImageUploader = () => {
  const { onDrop, openCamera } = useUploadImage();
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div>
      <ImageUploaderContainer className={isDragActive ? 'active' : ''} {...getRootProps()}>
        <input {...getInputProps()} />
        {
          isDragActive
            ? <p>Drop the files here ...</p>
            : <>
                <UploaderButtonsContainer>
                  <ImageUploaderButton><ImageFile />Select Image</ImageUploaderButton>
                  <ImageUploaderButton onClick={openCamera}><CameraIcon />Take Photo</ImageUploaderButton>
                </UploaderButtonsContainer>
                <p>Drag & drop some files here</p>
              </>
        }
      </ImageUploaderContainer>
    </div>
  );
};

export default ImageUploader;
