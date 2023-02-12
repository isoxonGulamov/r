import React from 'react'
import rd from "../../img/u.avif"
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import "./pakge.scss"
export const Pakgaje = () => {

  const [load,setloading] = React.useState(true)

React.useEffect(()=>{
setTimeout(() => {
  setloading(false)
}, 2000);
},[])
  return (
    <div className='container'>
        {load ? <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            :
        <>
         <div className='Box_Pakge'>
        <Avatar
          className='l'
          alt="Remy Sharp"
          src={rd}
          sx={{ width: 56, height: 56 }}
        />
        <h1 style={{ color: "#fff" }} className='Pakge__title'>Get started with GitHub Packages</h1>
        <p style={{ color: "#fff", opacity: 0.6 }} className='Pakge__text'>Safely publish packages, store your packages alongside your code, and share your packages privately with your team.</p>
      </div>
      <div className='Pakge__Cart'>
        <h1 className='nut'>Choose a registry</h1>
        <ul className='Pakge__List'>
          <li className='Pakge__Item'>
            <div style={{display:"flex",alignItems:"center"}}>
              <Avatar
          
                alt="Remy Sharp"
                src={rd}
                sx={{ width: 30, height: 30 }}
              />
              <h4 className='Cart__title'> Docker</h4>

            </div>
            <p className='Cart_Text'>
              A software platform used for building applications based on containers — small and lightweight execution environments.
            </p>
            <button className='btnMore'>Learn More</button>
          </li>
          <li className='Pakge__Item'>
            <div style={{display:"flex",alignItems:"center"}}>
              <Avatar
          
                alt="Remy Sharp"
                src={rd}
                sx={{ width: 30, height: 30 }}
              />
              <h4 className='Cart__title'>Apache Maven</h4>

            </div>
            <p className='Cart_Text'>
              A software platform used for building applications based on containers — small and lightweight execution environments.
            </p>
            <button className='btnMore'>Learn More</button>
            
          </li>
          <li className='Pakge__Item'>
            <div style={{display:"flex",alignItems:"center"}}>
              <Avatar
          
                alt="Remy Sharp"
                src={rd}
                sx={{ width: 30, height: 30 }}
              />
              <h4 className='Cart__title'>NuGet</h4>

            </div>
            <p className='Cart_Text'>
              A software platform used for building applications based on containers — small and lightweight execution environments.
            </p>
            <button className='btnMore'>Learn More</button>
          </li>
          <li className='Pakge__Item'>
            <div style={{display:"flex",alignItems:"center"}}>
              <Avatar
          
                alt="Remy Sharp"
                src={rd}
                sx={{ width: 30, height: 30 }}
              />
              <h4 className='Cart__title'> RubyGems</h4>

            </div>
            <p className='Cart_Text'>
              A software platform used for building applications based on containers — small and lightweight execution environments.
            </p>
            <button className='btnMore'>Learn More</button>
          </li>
          <li className='Pakge__Item'>
            <div style={{display:"flex",alignItems:"center"}}>
              <Avatar
          
                alt="Remy Sharp"
                src={rd}
                sx={{ width: 30, height: 30 }}
              />
              <h4 className='Cart__title'> npm</h4>

            </div>
            <p className='Cart_Text'>
              A software platform used for building applications based on containers — small and lightweight execution environments.
            </p>
            <button className='btnMore'>Learn More</button>
          </li>
          <li className='Pakge__Item'>
            <div style={{display:"flex",alignItems:"center"}}>
              <Avatar
          
                alt="Remy Sharp"
                src={rd}
                sx={{ width: 30, height: 30 }}
              />
              <h4 className='Cart__title'> Containers</h4>

            </div>
            <p className='Cart_Text'>
              A software platform used for building applications based on containers — small and lightweight execution environments.
            </p>
            <button className='btnMore'>Learn More</button>
          </li>
        </ul>

      </div>
        </>
  }
     
    </div>
  )
}
