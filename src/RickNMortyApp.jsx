import React, { useState } from 'react'
import CardCharacther from './Components/CardCharacther'
import LocationInfo from './Components/LocationInfo'
import useRnMapi from './hooks/useRnMapi'
import './App.css'
import InputSearch from './Components/InputSearch'

const RickNMortyApp = () => {

    const [searchLocation, setSearchLocation] = useState()

    const location = useRnMapi(searchLocation)

  return (
    <div>
        <InputSearch setSearchLocation={setSearchLocation}/>
        <LocationInfo location={location}/>
        <div className='card_container'>
            {
                location?.residents.map(resident => (
                   <CardCharacther key={resident} resident={resident} />
                 ) )
            }
        </div>

    </div>
  )
}

export default RickNMortyApp