import React from 'react';
import { Link } from 'react-router-dom';
import "./reposite.scss";
import StarBorderIcon from '@mui/icons-material/StarBorder';
export const CartReposite = ({ name, language, id, visibility,updated_at,html_url,setitem,}) => {

  const  [qiymat,setqiymat] = React.useState()
  const  [qiymat2,setqiymat2] = React.useState()
  const [elips,setelips] = React.useState(true)
  let [qiymat3,setqiymat3] = React.useState()
  React.useEffect(()=>{
    if (language == "JavaScript") {
      
      let b = "🟡"
      setqiymat(b)
  }else if (language == "HTML"){
    let d = "🔴"
    setqiymat2(d)
  }else if(language == "CSS"){
    let c = "🔵"
     setqiymat3(c)
  }

  },[])

  if (elips == false) {
    setitem(id)
 }

  return (
    <div className='Cart_Repos-box'>
       <div>
        <Link className='LinkRepos' to={html_url}>{name}</Link>
        <span style={{marginBottom:"10px"}} className='public_Repos'>{visibility}</span> <br />
       <div style={{display:"flex",}}>
       <p style={{color:"#fff",opacity:0.6,fontSize:"13px",marginTop:"15px"}}>{qiymat} {qiymat2} {qiymat3} {language}</p>
       <p style={{marginLeft:"15px",fontSize:"14px"}}>{updated_at}</p>
       </div>
       </div>
       <div>
        {elips ? <button className='btnSet' onClick={()=>setelips(false)}><StarBorderIcon/>Star</button>
        :
        <button className='btnSet' onClick={()=>setelips(true)}>⭐Starred</button>
        }
       </div>
    </div>
  )
}
