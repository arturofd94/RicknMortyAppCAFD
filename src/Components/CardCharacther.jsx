import React from 'react'
import useCharacterApi from '../hooks/useCharacterApi'

const CardCharacther = ({resident}) => {

  const character = useCharacterApi(resident)

  return (
    <article className='card_article'>
      <div className='card_img'>
        <img src={character?.image} alt="" />
        <div className='card_status'><span><b>Status: </b>{character?.status} </span>
        </div>
      </div>
      <h2>{character?.name}</h2>
      <ul className='card_ul'>
        
        <li><span><b>Origin: </b></span>{character?.origin.name}</li>
        <li><span><b>Episodes where appears: </b></span>{character?.episode.length}</li>
      </ul>
    </article>
  )
}

export default CardCharacther