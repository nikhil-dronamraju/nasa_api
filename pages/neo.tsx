import React from 'react'
import { GetStaticProps } from 'next'
import { NearEarthObject } from '../types/types'
import NeoList from '../components/NeoList'

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



const neo = (props: Props) => {
const days = Object.keys(props.nearEarthObjects).sort()
console.log(props.nearEarthObjects)
//Renders li tags for each day. Nested list contains data for each asteroid for that day
const NeoListRender = days.map(
    (day) => {
        return (
            <li key = {`${day}`}>
                <h3 className='text-3xl underline'>
                    {day}
                </h3>
                    <NeoList internalList = {props.nearEarthObjects[day as keyof typeof props.nearEarthObjects] as [NearEarthObject]} day = {day}/>
                <br />
            </li>
        )
    }
)
return (
    <div>
        <ul>
            {NeoListRender}
        </ul>
    </div>
  )
}

export default neo
export const getStaticProps: GetStaticProps = async () => {
    
    //This server side fetch returns information about all potentially hazardous asteroids from the past week. 
    const data = await fetch ("https://api.nasa.gov/neo/rest/v1/feed?start_date=2022-12-16&api_key=JpPWSEIssK0P1d0COv2HlTnHrsWNpqH2twYvVA1C")
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