import React from 'react'
import Slider from "react-slick";




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




const DailyImageSlider  = (props: Props) => {
  const sliderImages = props.nasaImages.map(
    (image, index) => {
      return (
        <div className='text text-white' key = {`image ${index}`}>
            <h1 className = 'flex justify-center text-5xl underline mb-4'>{image.title}</h1>
            <div className='flex justify-center'>
                <div className='flex w-96 h-96'>
                {// eslint-disable-next-line @next/next/no-img-element
                  <img /*className='object-cover'*/ src={String(image.hdurl)} alt = {String(image.title)}/>
                }
                </div>
            </div>
                <p className='mt-12'>{image.explanation}</p>
                {image.copyright && (
                  <span>By: {image.copyright}</span>
                )}
                <br/>
                <span>Posted on: {image.date}</span>
          </div>
      )
  })

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };


  return (
      <Slider {...settings}>
        {sliderImages}
      </Slider>
  )
}

export default DailyImageSlider

