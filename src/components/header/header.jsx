import React from 'react'
import { Link } from 'react-router-dom'
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import ClassIcon from '@mui/icons-material/Class';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import NotificationsIcon from '@mui/icons-material/Notifications';
import StarIcon from '@mui/icons-material/Star';
import axios from 'axios';
import { Avatar } from '@mui/material';
import "./header.scss"
import gub from "../../img/download.png"
import w from "../../img/w.png"
export const Header = () => {
const [loop,setloop] = React.useState(false)
  const [data,setdata] = React.useState([])
  const [value,setvalue] = React.useState("")
  React.useEffect(()=>{
axios.get("https://api.github.com/users/isoxonGulamov/repos").then((response)=>{
  setdata(response.data)
})
  },[])
  console.log(data);
  const reposFiltered = data.filter((el) => {
    return el.name.toLowerCase().includes(value.toLowerCase())
  })
  const change = (e) => {
    setvalue(e.target.value)

  }
  return (
    <div className='container'>

      <div className='Header__Box'>
        <div>
          <div className='Header_Top-box'>
            <div className='Header-top__box'>
              <Avatar
                style={{marginLeft:"17px"}}
                alt="Remy Sharp"
                src={gub}
                sx={{ width: 40, height: 40 }}
              />
              <input onClick={()=> setloop(true)} style={{color:"#fff"}} onChange={change} placeholder='Search or jump to...' className='input-header' type="text" />
              {loop ?
                <div className='value_Box'>
                     <p onClick={()=> setloop(false)} style={{lineHeight:"0px",cursor:"pointer"}}>X</p>
                {
                reposFiltered?.map((el)=>{
               
                  return  <div className='box_link'><Link className='lou' to={el.html_url}>{el.full_name}</Link></div>
                 })
                }
              </div>
              :
              ""
              }
            </div>
            <ul className='Header-top__list'>
              <li className='Header-top__item'>Pull request</li>
              <li className='Header-top__item'>Issues</li>
              <li className='Header-top__item'>Codespaces</li>
              <li className='Header-top__item'>Marketplace</li>
              <li className='Header-top__item'>Explore</li>
            </ul>
            <div className='little_Box4'>
            <p style={{color:"yellow"}}><NotificationsIcon /></p>
            <div style={{marginLeft:"8px"}} className="dropdown">
              <button className="dropbtn">+</button>
              <div className="dropdown-content">
                <Link className='deft' to={"https://github.com/new"}><p style={{color:"yellow",lineHeight:"1px"}} className='textDrop2'>New Reposit</p></Link>
                <Link className='deft' to={"https://github.com/new/import"}><p style={{color:"yellow",lineHeight:"1px"}} className='textDrop2'>Import repost</p></Link>
                <Link className='deft' to={"https://gist.github.com/"}> <p style={{color:"yellow",lineHeight:"1px"}} className='textDrop2'>New gist</p></Link>
                <Link className='deft' to={"https://github.com/users/isoxonGulamov/projects/3"}><p  style={{color:"yellow",lineHeight:"1px"}}   className='textDrop2'>New project</p></Link>
              </div>
            </div>
            <div style={{marginLeft:"8px"}} className="dropdown">
              <button style={{backgroundColor:"#21262D"}} className="dropbtn"> <Avatar

                alt="Remy Sharp"
                src={w}
                sx={{ width: 30, height: 30 }}
              /></button>
              <div  className="dropdown-content">
                <Link className='deft'  to={"/"}><p style={{color:"yellow",lineHeight:"3px"}} className='textDrop2'>Your Profile</p></Link>
                <Link className='deft' to={"/reposite"}><p style={{color:"yellow",lineHeight:"3px"}}  className='textDrop2'>Your Reposit</p></Link>
                <Link className='deft'  to={"/projects"}><p style={{color:"yellow",lineHeight:"3px"}}  className='textDrop2'>Your Projects</p></Link>
                <Link className='deft'  to={"/stars"}><p style={{color:"yellow",lineHeight:"3px"}}  className='textDrop2'>Your Stars</p></Link>
              </div>
            </div>
          </div>
          </div>
         
        </div>
        <div className='Header__inner'>
          <Link className='link1' to={"/"}><p className='Header__text'><ImportContactsIcon style={{ marginRight: "7px" }} />Oweriew</p></Link>
          <Link className='link1' to={"/reposite"}><p className='Header__text'><ClassIcon style={{ marginRight: "7px" }} />Reposite</p></Link>
          <Link className='link1' to={"/projects"}><p className='Header__text'><CollectionsBookmarkIcon style={{ marginRight: "7px" }} />Projects</p></Link>
          <Link className='link1' to={"/pakges"}><p className='Header__text'><ViewInArIcon style={{ marginRight: "7px" }} />Pakgase</p></Link>
          <Link className='link1' to={"/stars"}><p className='Header__text'><StarIcon style={{ marginRight: "7px" }} />Stars</p></Link>
        </div>

      </div>

    </div>
  )
}
