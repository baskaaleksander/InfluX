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
      review: "InfluX is the ultimate time saver for small business owners like me.",
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