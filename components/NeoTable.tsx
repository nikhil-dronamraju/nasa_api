import React from 'react'
import { NearEarthObject } from '../types/types'

type Props = {
    internalList: [NearEarthObject],
    day: String
}



const NeoTable = (props: Props) => {
    
    const NeoTableReturn = props.internalList.map(
        (item, index) => {
            return (
                <div key = {`${props.day} data ${index}`} className = 'table w-full'>
                    <div className='table-header-group border'>
                        <div className='table-row justify-evenly'>
                            <div className='table-cell text-left w-1/3 underline'>Name</div>
                            <div className='table-cell text-left w-1/3 underline'>Diameter</div>
                            <div className='table-cell text-left w-1/3 underline'>Absolute Magnitude</div>
                        </div>
                    </div>
                    <div className="table-row-group">
                        <div className='table-row'>
                            {//@ts-ignore
                            <div className='table-cell'>{item.name.match(/\((.*)\)/).pop()}</div>
                            }
                            <div className='table-cell'>{Math.floor(item.estimated_diameter.feet.estimated_diameter_min + item.estimated_diameter.feet.estimated_diameter_max)/2} ft</div>
                            <div className='table-cell'>{Math.floor(item.absolute_magnitude_h)}</div>
                        </div>
                    </div>
                    <br />
                </div>

            )
        }
    )

  return (
    <div>
        {NeoTableReturn}
    </div>
  )
}

export default NeoTable