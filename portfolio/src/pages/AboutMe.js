import React from 'react';
import '../styles/AboutMe.css';
import Avatar from '../Assets/avatar.png';

function AboutMe() {
  return (
    <div className='aboutme'>
      <article class='aboutme-info'>
                <h2>About Me</h2>
                <img className='avatarAbout' src={Avatar} alt='Avatar'/>
                <p>I am Jorge Humberto Cardenas Leon and I was born in Guamuchil, Sinaloa on november 1st, 1996,
                    I have a bachelor degree in Industrial and Systems Engeneering (IIS) by ITESM (2014-2018) and actually 
                    I am a student of coding BootCamp at Tec de Monterrey.
                </p> 
                <p>I like to spend time with my family and friends since is the most valuable I have. I practice some sports like box and gym, and 
                    I would like to learn to play the guitar. 
                </p>
      </article>
    </div>
  )
}

export default AboutMe