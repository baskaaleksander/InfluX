import React from 'react'

const TestimonialCard = ({ testimonial }) => (
  <div className='testimonial-card'>

    <h2>{testimonial.name}</h2>
    <p className='testimonial-title'>- {testimonial.title} -</p>
    <p className='review'>{testimonial.review}</p>

  </div>
);

export default TestimonialCard
