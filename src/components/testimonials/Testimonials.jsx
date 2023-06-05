import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
            </div>
            <h5 className='client__name'> Mark Louise</h5>
            <small className='client__review'>
            I appreciate your hard work.
You are the best at what you do.
You have a talent for attention to detail, and it shows in your work.
You continue to amaze us with your talent and dedication.
            </small>
        </article>

        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR2} alt="Avatar Two" />
            </div>
            <h5 className='client__name'> Robert Rigo</h5>
            <small className='client__review'>
            You have a talent for attention to detail, and it shows in your work.
You continue to amaze us with your talent and dedication.
Thank you for being an amazing coworker.
I can always count on you.
            </small>
        </article>

        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR3} alt="Avatar Three" />
            </div>
            <h5 className='client__name'> Zidane Mitof</h5>
            <small className='client__review'>
            I appreciate your hard work.
You are the best at what you do.
You have a talent for attention to detail, and it shows in your work.
You continue to amaze us with your talent and dedication.
            </small>
        </article>

        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR4} alt="Avatar Four" />
            </div>
            <h5 className='client__name'> Elizabeth keen</h5>
            <small className='client__review'>
            Great work. Your problem-solving skills are second to none. 

 Your skills and abilities are perfect for your job, and you really make a difference.

 Thank you for always being dependable. It’s great to know I can count on you.

You are definitely in a different league. It’s fun to work with you because you have new ideas.
            </small>
        </article>
      </div>
    </section>
  )
}

export default Testimonials