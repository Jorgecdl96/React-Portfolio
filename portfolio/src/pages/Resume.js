import React from 'react';
import '../styles/Resume.css';

function Resume() {

  const frontArr = ['ReactJS', 'HTML', 'CSS','JavaScript', 'jQuery', 'responsive design', 'BootStrap', 'PWA'];
  const backArr = ['NodeJS', 'ExpressJS', 'MongoDB, Mongoose', 'MySQL, Sequelize', 'REST', 'ApolloServer, GraphQL', 'APIs'];

  return (
    <div className='resume'>
        <h1>Resume</h1>
        <p>Download my <a href='https://resume.io/r/hW6mleitj' className='download' target='_blank' rel='noopener noreferrer'>Resume</a></p>
        <h2>Front-End</h2>
        <ul>
          {frontArr.map((content) => {
            return (
              <li>{content}</li>
            )
          })}
        </ul>
          
          <h2>Back-End</h2>
        <ul>
        {backArr.map((content) => {
            return (
              <li>{content}</li>
            )
          })}
        </ul>
    </div>
  )
}

export default Resume