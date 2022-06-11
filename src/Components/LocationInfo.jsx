import React from 'react'

const LocationInfo = ({location}) => {


  return (
    <article className='location_card'>
        <h1 className='location_h1'>{location?.name}</h1>
        <ul className='location_ul'>
            <li><span className='location_span'><b> Type: </b></span>{location?.type}</li>
            <li><span className='location_span'><b> Dimension: </b></span>{location?.dimension}</li>
            <li><span className='location_span'><b> Population: </b></span>{location?.residents.length}</li>
        </ul>
    </article>
  )
}

export default LocationInfo