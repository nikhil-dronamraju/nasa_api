import React from 'react'
import { NearEarthObject } from '../types/neoTypes'
import NeoList from '../components/NeoList'
import { GetStaticProps } from 'next'
import NeoTable from '../components/NeoTable'
import Navbar from '../components/Navbar'

type Props = {
    nearEarthObjects: {
     (date: String) : [NearEarthObject],
     (date: String) : [NearEarthObject],
     (date: String) : [NearEarthObject],
     (date: String) : [NearEarthObject],
     (date: String) : [NearEarthObject],
     (date: String) : [NearEarthObject],
     (date: String) : [NearEarthObject],
     (date: String) : [NearEarthObject],
 }
}

const Neo = (props: Props) => {
    const days = Object.keys(props.nearEarthObjects).sort()
    const NeoTableRender = days.map(
        (day) => {
            return (
                <div key = {`${day}`} className = 'text-white ml-8'>
                    <h1 className='text-4xl underline text-white'>{day}</h1>
                        {props.nearEarthObjects[day as keyof typeof props.nearEarthObjects][0] as [NearEarthObject] && <NeoTable internalList = {props.nearEarthObjects[day as keyof typeof props.nearEarthObjects] as [NearEarthObject]} day = {day}/>}
                        {!props.nearEarthObjects[day as keyof typeof props.nearEarthObjects][0]  && <div>Looks like the Earth is safe today, folks! <br /></div>}
                </div>
            )
        }
    )
    const NeoListRender = days.map(
        (day) => {
            return (
                <div key = {`${day}`} className = 'text-white ml-8'>
                    <h1 className='text-4xl underline text-white'>{day}</h1>
                        {props.nearEarthObjects[day as keyof typeof props.nearEarthObjects][0] as [NearEarthObject] && <NeoList internalList = {props.nearEarthObjects[day as keyof typeof props.nearEarthObjects] as [NearEarthObject]} day = {day}/>}
                        {!props.nearEarthObjects[day as keyof typeof props.nearEarthObjects][0]  && <div><li>Looks like the Earth is safe today, folks!</li> <br /></div>}
                </div>
            )
        }
    )
  return (
    <div>
        <Navbar/>
        <h1 className='text-5xl underline text-white flex justify-center'>Potentially Dangerous Objects Near the Earth</h1>
        <div className='inline-flex w-full'>
            <div className='border mt-4 w-1/2 h-fit'>
                <br />
                {NeoTableRender}
                <br />
            </div>
            <div className='flex-column w-1/2 pl-16'>
                {NeoListRender}
            </div>
        </div>
    </div>
  )
}

export default Neo

export const getStaticProps: GetStaticProps = async () => {
    
    //This server side fetch returns information about all potentially hazardous asteroids from the past week. 
    const data = await fetch (`https://api.nasa.gov/neo/rest/v1/feed?start_date=2022-12-16&api_key=${process.env.NASA_API_KEY}`)
    const res = (await data.json()).near_earth_objects

    //Filter res to where it only returns potentially hazardous asteroids
    const days = Object.keys(res)
    days.forEach((day) => {
        res[day] = res[day].filter((dayData : NearEarthObject) => dayData.is_potentially_hazardous_asteroid == true)
    })


    
    return {
        props:{
          nearEarthObjects : res  
        }
    }
  }