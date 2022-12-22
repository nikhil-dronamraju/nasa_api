import React, { Component } from 'react'
import Image from 'next/image'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'




type Props = {
    nasaImages: [
        {
          date:String,
          explanation:String,
          hdurl:String,
          media_type:String,
          service_version:String,
          title:String,
          url:String,
          copyright:String
        }
      ],
}



const HomePage  = (props: Props) => {
  const sliderImages = props.nasaImages.map((image, index) => {
    console.log(image.copyright)
    return (
      <div className='keen-slider__slide' key = {`image ${index}`}>
          <h1 className = 'flex border justify-center text-5xl underline'>{image.title}</h1>
        <>
          <div className='flex justify-center border border-black'>
              <div className='flex border-black justify-center w-96 h-96'>
              {// eslint-disable-next-line @next/next/no-img-element
                <img /*className='object-cover'*/ src={String(image.hdurl)} alt = {String(image.title)}/>
              }
              </div>
          </div>
        </>
        <>
            <p>{image.explanation}</p>
        </>
        <>
              {image.copyright && (
                <span>By: {image.copyright}</span>
              )}
              <br/>
              <>{image.date}</>
        </>
      </div>
    )
  })
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slideChanged() {
        console.log('slide changed')
      },
    },
    [
      // add plugins here
    ]
  )
  return (
    <div ref = {sliderRef} className = 'keen-slider'>
        {sliderImages}
    </div>
  )
}

export default HomePage

