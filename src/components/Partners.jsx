import React from 'react'
import amazon from '../assets/amazon.png'
import netflix from '../assets/netflix.png'
import microsoft from '../assets/microsoft.png'
import google from '../assets/google.png'

const Partners = () => {
  return (
    <div className='partners'>
      <img src={google} alt='partners logo.' />
      <img src={amazon} alt='partners logo.' />
      <img src={netflix} alt='partners logo.' />
      <img src={microsoft} alt='partners logo.' />
    </div>
  )
}

export default Partners
