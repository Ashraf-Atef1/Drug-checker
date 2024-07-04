import { createContext, useState } from 'react';

export const imagesContext = createContext({
  images: [],
  setImages: () => {}
});

export default function ImagesProvider ({ children }) {
  const [images, setImages] = useState([]);
  return (
    <imagesContext.Provider value={{
      images,
      setImages
    }}
    >
      {children}
    </imagesContext.Provider>
  );
}
