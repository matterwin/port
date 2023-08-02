import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

import './Nav.css'

const Nav = () => {
  return (
    <div className='nav-container'>
        <div className='nav-flex-box'>

        <div className='center'>
              <p>Matthew Erwin</p>
            </div>

            <div className='left'>
              <p>Portfolio</p>
              <p>About</p>
              <p>Resume</p>
            </div>

            <div className='right'>
              <GitHubIcon />
              <LinkedInIcon />
              <YouTubeIcon />
            </div>

        </div>

    </div>
  )
}

export default Nav