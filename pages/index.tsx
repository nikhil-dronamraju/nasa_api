/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import HomePage from '../components/DailyImageSlider'
import { GetStaticProps } from 'next'


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
        <HomePage nasaImages={props.nasaImages}/>
      </div>
    </div>
  )
}

export default index

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetch ("https://api.nasa.gov/planetary/apod?api_key=JpPWSEIssK0P1d0COv2HlTnHrsWNpqH2twYvVA1C&start_date=2022-12-17")
  const res = await data.json()
  //console.log(res.copyright)
  return {props:{
      nasaImages: res 
      }
  }
}