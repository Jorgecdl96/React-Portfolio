import React from 'react';
import '../styles/Portfolio.css';
import Horiseon from '../Assets/Horiseon.png';
import DayPlanner from '../Assets/05-third-party-apis-homework-demo.gif';
import Weather from '../Assets/Weather dashboard.png';
import PinIt from '../Assets/pinIt.png';
import Wolfinance from '../Assets/Wolfinance.png';
import {IoLogoGithub} from "react-icons/io5";

function Portfolio() {
  return (
    <div className='portfolio'>
                <section class='card'>
                    <a href='https://jorgecdl96.github.io/HoriseonJHCL/' target='_blank' rel='noopener noreferrer'>
                    <img src={Horiseon} alt='Horiseon' class='card-image'/>
                    
                      <div class='card-text'> 
                          <h2 className='title'>Horiseon</h2>
                          <a className='github' href='https://github.com/Jorgecdl96/HoriseonJHCL' target='_blank' rel='noopener noreferrer'><IoLogoGithub/></a>
                      </div> 
                      </a> 
                </section>
                <section class='card'>
                    <a href='https://jorgecdl96.github.io/WorkDayScheduler/' target='_blank' rel='noopener noreferrer'>
                        <img src={DayPlanner} alt='DayPlanner' class='card-image'/>
                    
                    <div class='card-text'> 
                        <h2 className='title'>Day Planner</h2>
                        <a className='github' href='https://github.com/Jorgecdl96/WorkDayScheduler' target='_blank' rel='noopener noreferrer'><IoLogoGithub/></a>
                    </div>
                    </a>
                </section>
                <section class='card'>
                    <a href='https://jorgecdl96.github.io/Weather-Dashboard/' target='_blank' rel='noopener noreferrer'>
                        <img src={Weather} alt='Robotics' class='card-image'/>
                    
                        <div class='card-text'> 
                            <h2 className='title'>Weather Dashboard</h2>
                           
                            <a className='github' href='https://github.com/Jorgecdl96/Weather-Dashboard' target='_blank' rel='noopener noreferrer'><IoLogoGithub/></a>
                        </div>
                    </a>
                </section>
                <section class='card'>
                    <a href='https://pin-it-app-project.herokuapp.com/' target='_blank' rel='noopener noreferrer'>
                        <img src={PinIt} alt='pin-it-app-project' class='card-image'/>
                    
                        <div class='card-text'> 
                            <h2 className='title'>Pin-It</h2>
                       
                            <a className='github' href='https://github.com/AlejandroBahSan/Pin-it' target='_blank' rel='noopener noreferrer'><IoLogoGithub/></a>
                        </div>
                    </a>
                </section>
                <section class='card'>
                    <a href='https://hguevaracf.github.io/proyecto1/' target='_blank' rel='noopener noreferrer'>
                        <img src={Wolfinance} alt='Wolfinance-app-project' class='card-image'/>
                    
                        <div class='card-text'> 
                            <h2 className='title'>Wolfinance</h2>
                            <a className='github' href='https://github.com/Jorgecdl96/Wolfinance' target='_blank' rel='noopener noreferrer'><IoLogoGithub/></a>
                        </div>
                    </a>
                </section>
                <section class='card'>
                    <a href='https://hguevaracf.github.io/proyecto1/' target='_blank' rel='noopener noreferrer'>
                        <img src={Wolfinance} alt='Wolfinance-app-project' class='card-image'/>
                    
                        <div class='card-text'> 
                            <h2 className='title'>Wolfinance</h2>
                            <a className='github' href='https://github.com/Jorgecdl96/Wolfinance' target='_blank' rel='noopener noreferrer'><IoLogoGithub/></a>
                        </div>
                    </a>
                </section>
    </div>
  )
}

export default Portfolio