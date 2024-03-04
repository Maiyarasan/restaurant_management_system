import React from 'react';

const ImportAllImages = (requireContext) => requireContext.keys().map(requireContext);

const FoodImages = ImportAllImages(require.context('../images/FoodImages', false, /\.(jpg|jpeg|png|gif)$/));

const ImageCard = () => {
  return (
    <div className='grid grid-cols-3 gap-4 p-6'>
        {FoodImages.map((image, index) => (
            <div key={index} className="relative w-full h-80 overflow-hidden rounded-lg hover:shadow-lg transition duration-300 ease-in-out">
                <img src={image} alt={`Food ${index}`} className="absolute inset-0 w-full h-full object-cover object-center transform hover:scale-105 transition duration-300 ease-in-out" />
            </div>
        ))}
    </div>
  );
};

export default ImageCard;
