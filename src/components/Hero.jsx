import React from 'react'
import img from '../assets/hero.svg'

const Hero = () => {
  return (
    <div className='hero'>
        <section className='hero-text'>
            <h1>
                Take your career to the success path
            </h1>
            <h2>
                Our agency manage various influencers all around the world. We have +3M insights and a lot of happy clients. So why wouldn't you start your co-op with us?
            </h2>
            <a href="#Services"><button className='offer-btn'>Show me offer!</button></a>
        </section>
      <img src={img} />
    </div>
  )
}

export default Hero
