import React from 'react'
import "../folowers/flowers.scss"
import axios from 'axios'
import { CartFollowing } from './cartfollowing'
export const Folowing = () => {
  const [data,setdata] = React.useState([])
  const [load,setloading] = React.useState(true)
  React.useEffect(()=>{
     axios.get("https://api.github.com/users/isoxonGulamov/following").then((response)=>{
      setdata(response.data)
    setTimeout(() => {
      setloading(false)
    }, 1500);
     })
  },[])
  console.log(data);
  return (
 <div className='flowers_Box'>
        {load ? <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        :
        data?.map((el)=>{
          return <CartFollowing key={el.id} {...el}/>
        })}
 </div>
  )
}
