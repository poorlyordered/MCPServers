import { fetchImagesFromUnsplash } from '../../../Cline/MCP/unsplash-server/src/utils/fetchImages'; // Updated import path

/**
 * Fetch gaming-related images from Unsplash based on the specified guidelines.
 */
export const fetchGamingImages = async () => {
  const gamingCollectionId = '317099';
  const abstractBackgroundCollectionId = '4474589';
  const technologyThemeCollectionId = '8687142';

  try {
    const gamingImages = await fetchImagesFromUnsplash(gamingCollectionId, 10);
    const abstractBackgrounds = await fetchImagesFromUnsplash(abstractBackgroundCollectionId, 10);
    const technologyImages = await fetchImagesFromUnsplash(technologyThemeCollectionId, 10);

    return {
      gamingImages,
      abstractBackgrounds,
      technologyImages,
    };
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
};
