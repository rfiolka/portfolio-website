import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import EmailIcon from '@material-ui/icons/Email'
import GithubIcon from '@material-ui/icons/GitHub'
import "../styles/Home.css"


function Home() {
  return (
    <div className="home"> 
    <div className="about">
      <h2>Hi, my name is Roksana</h2>
      <div className='prompt'> <p>Recent university graduate with B.S in Computer Science with a passion for personal growth and for software development</p>
    <LinkedInIcon />
    <EmailIcon />
    <GithubIcon />
    </div>
    </div>
    <div className='skills'>
      <h1>Skills</h1>
      <ol className='list'>
        <li className='item'> 
        <h2>Front-End</h2>
        <span>ReactJS, HTML, CSS, NPM</span>
        </li>
        <li className='item'> 
        <h2>Languages</h2>
        <span>JavaScript, TypeScript</span>
        </li>
      </ol>
    </div>
    </div>
  )
}

export default Home