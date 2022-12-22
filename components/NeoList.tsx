import React from 'react'
import { NearEarthObject } from '../types/types'

type Props = {
    internalList: [NearEarthObject],
    day: String
}

const NeoList = (props: Props) => {
    const NeoListReturn = props.internalList.map(
        (item, index) => {
            return (
                <li key = {`${props.day} data ${index}`}>
                    {//@ts-ignore
                        <h4 className='text-2xl italic'>{item.name.match(/\((.*)\)/).pop()}</h4>
                    }         
                        <>Absolute Magnitude: {item.absolute_magnitude_h}</>
                        <br />
                        <>Estimated Diameter: {(item.estimated_diameter.feet.estimated_diameter_min + item.estimated_diameter.feet.estimated_diameter_max)/2}</>
                </li>
            )
        }
    )
    return (
        <ol>
            {NeoListReturn}
        </ol>
    )
}

export default NeoList