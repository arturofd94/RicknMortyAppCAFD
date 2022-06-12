import React from 'react'

const InputSearch = ({setSearchLocation}) => {

    const searchLocation = e => {
        e.preventDefault()
        setSearchLocation(e.target.children[0].value)
    }


  return (
    <header className='input_header'>
      <img className='input_img' src='https://media.cdn.adultswim.com/uploads/20210628/thumbnails/2_21628714375-RickMorty_Inside502.png' alt="" />
        <form className='input_form' onSubmit={searchLocation}>
          <input className='input_input' type="text" autoComplete='1' placeholder='Search between 1 and 126' />
          <button className='input_btn'>Search</button>
        </form>
      </header>
  )
}

export default InputSearch