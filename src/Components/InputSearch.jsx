import React from 'react'
import RnM from '../Assets/img/RnM.png'

const InputSearch = ({setSearchLocation}) => {

    const searchLocation = e => {
        e.preventDefault()
        setSearchLocation(e.target.children[0].value)
    }


  return (
    <header className='input_header'>
      <section className='input_div'>
          <img className='input_img' src={RnM} alt="" />
          <form className='input_form' onSubmit={searchLocation}>
          <input className='input_input' type="text" autoComplete='1' placeholder='Search between 1 and 126' />
          <button className='input_btn'>Search</button>
        </form>
      </section>
      </header>
  )
}

export default InputSearch