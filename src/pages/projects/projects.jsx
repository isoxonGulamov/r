import React from 'react'
import "./projects.scss"
import TryIcon from '@mui/icons-material/Try';
import BookmarkRemoveIcon from '@mui/icons-material/BookmarkRemove';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
export const Projects = () => {
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
     <div className='Project_Box1'>
           <form className='form'>
             <input placeholder='🔍 Find a repository...' className='inputfilter2' type="text" />
           </form>
           <button className='btnNew'>New Project</button>
   
         </div>
         <div className='Project__Box2'>
           <ul className='Project_List'>
             <li className='Project_Item'>
               <div className='sp7_Box'>
                 <span className='sp7'><TryIcon /> 2 Open</span>
                 <span className='sp7'><BookmarkRemoveIcon />0 Closed</span>
               </div>
               <div className="dropdown">
                 <button className="dropbtn">Sort</button>
                 <div className="dropdown-content">
                   <p className='textDrop'>Newest</p>
                   <p className='textDrop'>Oldest</p>
                   <p className='textDrop'>Name</p>
                   <p className='textDrop'>Least recently</p>
                 </div>
               </div>
             </li>
             <li className='Project_Item2'>
               <div className='sp7_Box'>
                 <Link to={"https://github.com/users/isoxonGulamov/projects/2"}><span className='sp7'><TryIcon /> isoxonGulamov's untitled project</span></Link>
                 <span className='sp8'>Private</span> <br />
                 <p style={{ color: "#fff", opacity: 0.6, fontSize: "13px" }}>#2 updated 1 hour ago</p>
               </div>
   
               <p style={{ color: "#fff" }}> <TrendingUpIcon /></p>
   
             </li>
             <li className='Project_Item2'>
               <div className='sp7_Box'>
                 <Link to={" https://github.com/users/isoxonGulamov/projects/1"}><span className='sp7'><TryIcon /> isoxonGulamov's untitled project</span></Link>
                
                 <span className='sp8'>Private</span>
                 <p style={{ color: "#fff", opacity: 0.6, fontSize: "13px" }}>#1 updated yesterday</p>
               </div>
               <p style={{ color: "#fff" }}> <TrendingUpIcon /></p>
   
             </li>
           </ul>
         </div>
     </>
     }
    </div>
  )
}
