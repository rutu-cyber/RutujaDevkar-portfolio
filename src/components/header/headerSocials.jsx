import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {FiDribbble} from 'react-icons/fi';

const headerSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/rutuja-devkar-1b72b4201/" rel='external'><BsLinkedin/></a>
        <a href="https://github.com/rutu-cyber" rel='external'><FaGithub/></a>
        <a href="https://dribble.com" rel='external'><FiDribbble/></a>
    </div>

  )
}

export default headerSocials