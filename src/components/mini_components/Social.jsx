import React from "react";
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Social() {
  return (
    <ul className='space-x-4 justify-center'>
            <a href="https://github.com/vednp"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/vednp/"><LinkedInIcon/></a> 
            <a href="https://twitter.com/vedpahune"><TwitterIcon/></a> 
        </ul>
  );
}

export default Social;
