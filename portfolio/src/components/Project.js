import React from 'react';
import Horiseon from '../Assets/Horiseon.png';
import DayPlanner from '../Assets/05-third-party-apis-homework-demo.gif';
import Weather from '../Assets/Weather dashboard.png';
import PinIt from '../Assets/pinIt.png';
import Wolfinance from '../Assets/Wolfinance.png';
import passwordGen from '../Assets/passwordGen.png';
import {IoLogoGithub} from "react-icons/io5";

function Project() {

    const cardAttributes = [
        {website: 'https://jorgecdl96.github.io/HoriseonJHCL/', img: Horiseon, alt: 'Horiseon', repo: 'https://github.com/Jorgecdl96/HoriseonJHCL'},
        {website: 'https://jorgecdl96.github.io/WorkDayScheduler/', img: DayPlanner, alt: 'DayPlanner', repo: 'https://github.com/Jorgecdl96/WorkDayScheduler'},
        {website: 'https://jorgecdl96.github.io/Weather-Dashboard/', img: Weather , alt: 'Weather', repo: 'https://github.com/Jorgecdl96/Weather-Dashboard'},
        {website: 'https://pin-it-app-project.herokuapp.com/', img: PinIt, alt: 'PinIt', repo: 'https://github.com/AlejandroBahSan/Pin-it'},
        {website: 'https://hguevaracf.github.io/proyecto1/', img: Wolfinance, alt: 'Wolfinance', repo: 'https://github.com/Jorgecdl96/Wolfinance'},
        {website: 'https://github.com/Jorgecdl96/passwordGenerator', img: passwordGen, alt: 'password generator', repo: 'https://jorgecdl96.github.io/passwordGenerator/'}
    ];

  return (
    <div className='portfolio'>
    {
    cardAttributes.map((content, index) => {
    return (
    <section class='card' key={index}>
        <a href={content.website} target='_blank' rel='noopener noreferrer'>
         <img src={content.img} alt={content.alt} class='card-image'/>
           <div class='card-text'> 
                   <h2 className='title'>Horiseon</h2>
               <a className='github' href={content.repo} target='_blank' rel='noopener noreferrer'><IoLogoGithub/></a>
           </div> 
        </a> 
    </section>
    )
    })
    }
    </div>
    
  )
}

export default Project