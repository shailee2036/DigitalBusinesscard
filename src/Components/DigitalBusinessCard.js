import React from 'react'
import './BusineessCard.css'

function DigitalBusinessCard() {
  return (
    <div className='container'>
        <div className='main-content'>
            <img src="img/shailee.jpeg" alt='client' className='clientpic'/>
            <h1 className='name'>Shailee Shah</h1>
            <p className='description'>Frontend Developer</p>
            <p className='website'>shailee.com</p>
            <button className='email'>E-mail</button>
            <button className='linkedin'>LinkedIn</button>
            <h4>About</h4>
            <section className='about'>
                <p>
                I am a frontend developer with a particular interest in making things simple and automating daily tasks. 
                I try to keep up with security and best practices, and am always looking for new things to learn.
                </p>
            </section>
            <h4>Interests</h4>
            <section className='interests'>
                <p>
                Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek.
                 Pop culture ninja. Coffee fanatic.
                 </p>
            </section>

          
           
        </div>

    </div>
  )
}

export default DigitalBusinessCard
