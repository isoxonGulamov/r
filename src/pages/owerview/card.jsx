import React from 'react'
import { Link } from 'react-router-dom'
import "./owerview.scss"

export const CardOweriev = ({name,id,html_url,visibility,language}) => {
const  [qiymat,setqiymat] = React.useState()
const  [qiymat2,setqiymat2] = React.useState()
React.useEffect(()=>{
  if (language == "JavaScript") {
    
    let b = "🟡"
    setqiymat(b)
}else if (language == "HTML"){
  let d = "🔴"
  setqiymat2(d)
}
},[])

  return (
    <div className='Card_box'>
      <div className='mini_box1'>
      <Link className='name_file' to={`${html_url}`}><p>{name}</p></Link>
      <p className='title_public'>{visibility}</p>
      </div>
      <p className='language'>{qiymat} {qiymat2} {language}</p>
    </div>
  )
}
