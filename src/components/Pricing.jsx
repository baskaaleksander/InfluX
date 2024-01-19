import React from 'react'
import pricingimg from '../assets/pricing-img.svg'

const Pricing = () => {
  return (
    <section id="Pricing" className='price-cont'>
        <h2 className='title'>Pricing</h2>
        <div className='pricing'>
            <div className='pricing-left'>
                <h3>
                    Every our plan is tailored to you!
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu,</p>
            </div>
            <img src={pricingimg} alt="Pricing image." />
        </div>
    </section>
  )
}

export default Pricing
