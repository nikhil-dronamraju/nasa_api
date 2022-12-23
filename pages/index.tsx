/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import HomePage from '../components/DailyImageSlider'
import { GetStaticProps } from 'next'
import Navbar from '../components/Navbar'


type Props = {  nasaImages: [
  {
    date:String,
    explanation:String,
    hdurl:String,
    media_type:String,
    service_version:String,
    title:String,
    url:String,
    copyright: String
  }
],}

const index = (props: Props) => {
  return (
    <div className='flex justify-center'>
      <div className = 'w-4/5'>
        <Navbar/>
        <HomePage nasaImages={props.nasaImages}/>
      </div>
    </div>
  )
}

export default index

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetch (`https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}&start_date=2022-12-17`)
  const res = await data.json()
  return {props:{
      nasaImages: res 
      }
  }
}