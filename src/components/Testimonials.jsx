import React from 'react';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
  const testimonialsData = [
    {
      name: "Joe Schmoe",
      title: "CEO Microsoft",
      review: "Everytime I contact with InfluX they responds almost in a second. At first I couldn't believe, but now I know it's true! Best company",
    },
    {
      name: "Andrew Bolt",
      title: "Independent influencer",
      review: "Very good company, always serves ontime. I can definately recommend it to you!",
    },
    {
      name: "Alex Summer",
      title: "VP Amazon",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },  
  ]

  const testimonialsCards = testimonialsData.map((testimonial) => {
    return <TestimonialCard key={testimonial.title} testimonial={testimonial} />
  })

  return (

    <section id="Testimonials" className='testimonials-outer'>
      <h2 className='testimonials-title'>Testimonials</h2>
      <div className='testimonials'>
        {testimonialsCards}
      </div>    
    </section>
  );
}

export default Testimonials;