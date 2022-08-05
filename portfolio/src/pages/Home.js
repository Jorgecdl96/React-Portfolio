import React from 'react'
import { IoLogoLinkedin, IoLogoGithub, IoMail  } from "react-icons/io5";

function Home() {
  return (
    <div className='home'>
      <div>
        <h2>Hello, My name is Jorge</h2>
        <div>
          <p>A JavaScript Web Developer.</p>
          <IoLogoGithub/>
          <IoLogoLinkedin/>
          <IoMail/>
        </div>
      </div>
    </div>
  )
}

export default Home