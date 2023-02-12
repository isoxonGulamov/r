import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import "../folowers/flowers.scss"
import { Link } from 'react-router-dom';
export const CartFollowing = ({ name, login, html_url, id, avatar_url,location }) => {
  const [qiymat,setqiymat] = React.useState(true)
  return (
<>
    <div className='CartFlower__Box'>
          
          <div className='Box_1'>
          <Avatar
            alt="Remy Sharp"
            src={avatar_url}
            sx={{ width: 56, height: 56 }}
          />
            <Link className='link5' to={html_url}><p className='Folers_Name'>{login}</p></Link>
          </div>
          <div>
           {qiymat ?
            <button className='unfollow' onClick={()=>setqiymat(false)} >Unfollow</button>
            :
            <button className='follow' onClick={()=>setqiymat(true)}>follow</button>
           }
          </div>
        </div>
       
  </>
  )
}
