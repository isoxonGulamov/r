import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import git from "../../img/download.png"
import { Link } from 'react-router-dom';
import "./footer.scss"
export const Footer = () => {
  return (
<div className='container'>
    <div className='Footer_Box'>
      <span className='line3'></span>
         <ul className='Footer_List'>
                  <li style={{display:"flex",color:"#fff",opacity:0.6,alignItems:'center'}} className='Footer_Item'>
                  <Avatar alt="Remy Sharp" src={git} />
                  © 2023 GitHub, Inc. 
                  </li>
                  <li className='Footer_Item'>
                     <Link style={{color:"blueviolet",textDecoration:"none",fontSize:"14px"}} to={"https://docs.github.com/en/site-policy/github-terms/github-terms-of-service"}>Terms</Link>
                  </li>
                  <li className='Footer_Item'>
                     <Link style={{color:"blueviolet",textDecoration:"none",fontSize:"14px"}}  to={"https://docs.github.com/en/site-policy/github-terms/github-terms-of-service"}>Privacy</Link>
                  </li>
                  <li className='Footer_Item'>
                     <Link style={{color:"blueviolet",textDecoration:"none",fontSize:"14px"}} to={"https://github.com/security"}>Security</Link>
                  </li>
                  <li className='Footer_Item'>
                     <Link style={{color:"blueviolet",textDecoration:"none",fontSize:"14px"}} to={"https://www.githubstatus.com/"}>Status</Link>
                  </li>
                  <li className='Footer_Item'>
                     <Link style={{color:"blueviolet",textDecoration:"none",fontSize:"14px"}} to={"https://docs.github.com/en"}>Docs</Link>
                  </li>
                  <li className='Footer_Item'>
                     <Link style={{color:"blueviolet",textDecoration:"none",fontSize:"14px"}} to={"https://support.github.com/?tags=dotcom-footer"}>Contact Github</Link>
                  </li>
                  <li className='Footer_Item'>
                     <Link style={{color:"blueviolet",textDecoration:"none",fontSize:"14px"}} to={"https://github.com/pricing"}>Pricing</Link>
                  </li>
                  <li className='Footer_Item'>
                     <Link style={{color:"blueviolet",textDecoration:"none",fontSize:"14px"}} to={"https://docs.github.com/en"}>API</Link>
                  </li>
                  <li className='Footer_Item'>
                     <Link style={{color:"blueviolet",textDecoration:"none",fontSize:"14px"}} to={"https://github.com/services/"}>Training</Link>
                  </li>
                  <li className='Footer_Item'>
                     <Link style={{color:"blueviolet",textDecoration:"none",fontSize:"14px"}} to={"https://github.blog/"}>Blog</Link>
                  </li>
                  <li className='Footer_Item'>
                     <Link style={{color:"blueviolet",textDecoration:"none",fontSize:"14px"}} to={"https://github.com/about"}>About</Link>
                  </li>
         </ul>
    </div>
</div>
  )
}
