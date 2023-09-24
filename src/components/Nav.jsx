import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Navigation from './mini_components/navigation';
import Social from './mini_components/social';
function Nav() {
  return (
    <>
    <div className='flex justify-around mt-4'>
        <h1 className="font-['Oswald'] text-2xl">Ved Pahune</h1>
        <Navigation/>
        <Social/>
    </div>
    </>
  )
}

export default Nav