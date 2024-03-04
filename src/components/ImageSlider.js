import React, { useEffect, useState } from 'react'

const ImportAllImages =(requireContext)=>requireContext.keys().map(requireContext)

const SliderImages=ImportAllImages(require.context('../images/SliderImages',false,/\.(jpg|jpeg|png|gif)$/))

const ImageSlider = () => {
    const [currentIndex , setCurrentIndex]= useState(0);
    
    useEffect(()=>{
        const interval=setInterval(()=>{
            setCurrentIndex(currentIndex=>(currentIndex+1) % SliderImages.length)
        },3000)
        return()=>clearInterval(interval)
    })
  return (
    <div className='overflow-hidden rounded-2xl'>
        {SliderImages.length > 0 &&(
            <img src={SliderImages[currentIndex]} alt={`Slide ${currentIndex}` } 
            className='object-cover h-96 w-full mx-auto flex items-center justify-center place-content-center' />
        )}
    </div>
  )
}

export default ImageSlider