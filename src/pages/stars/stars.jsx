import React from 'react'
import "./stars.scss"
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CartStar } from './CartStar';
import { addPins } from '../../redux/future/userlist';
import { Dispatch } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#0D1117',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
export const Stars = () => {
  const dispatch = useDispatch()
  const {UserPin} = useSelector((state)=>state.User)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [value, setvalue] = React.useState({ name: "", text: "",})
  const [uef,setuef] = React.useState([])
  const change = (e) => {
    setvalue((state) => {
      return { ...state, [e.target.name]: e.target.value }
    })

  }
  let arr4 = []
  let addfavor = JSON.parse(localStorage.getItem("Products"))
  const submit = (e) => {
    handleClose()
    e.preventDefault()
     dispatch(addPins(value))
     
  }
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
    <div className='Stars__Box'>
    <div className="Header__stars">
      <h3 className='edr'>Lists (4)</h3>
      <div>
        <div className="dropdown">
          <button className="dropbtn">Sort</button>
          <div className="dropdown-content">
            <p className='textDrop'>Newest</p>
            <p className='textDrop'>Oldest</p>
            <p className='textDrop'>Name</p>
            <p className='textDrop'>Least recently</p>
          </div>
        </div>
        <button onClick={handleOpen} className='btnCreate'>Create List</button>
        <div>

          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition

          >
            <Fade in={open}>
              <Box sx={style}>
                <div className='uy' style={{ display: "flex", alignItems: "center" }}>
                  <p>Created List</p>
                  <p onClick={handleClose} style={{ cursor: "pointer" }}>X</p>
                </div>
                <p style={{ color: "#fff", opacity: 0.6 }}>Create a list to organize your starred repositories</p>
                <form onSubmit={submit} className='fur'>
                  <input name='name' onChange={change} placeholder='⭐ Name this list' className='input6' type="text" />
                  <input name='text' onChange={change} placeholder='Write description' className='input7' type="text" />
                  <button  type='submit' className='btnCreate2'>Create</button>
                </form>
              </Box>
            </Fade>
          </Modal>
        </div>
      </div>
    </div>
    <div>
      {UserPin?.map((el)=>{
        return    <div key={el.name.length} className='Menu_Star-box'>
        <p className='Star__text-per'>{el.name}</p>
      </div>
      })}
      <div className='Menu_Star-box'>
        <p className='Star__text-per'>✨Inspration</p>
      </div>
      <div className='Menu_Star-box'>
        <p className='Star__text-per'>🚀My Stack</p>
      </div>
      <div className='Menu_Star-box'>
        <p className='Star__text-per'>🪐Future ideas</p>
      </div>
    </div>
    <p style={{color:"#fff",opacity:0.6}}>ists are currently in beta.
      Share feedback and report bugs.</p>
    <div style={{ marginTop: "200px" }} className='Repos_Header'>

      <form className='form'>
        <input onChange={change} placeholder='🔍 Find a repository...' className='inputfilter' type="text" />
      </form>

      <div className="dropdown">
        <button className="dropbtn">Type</button>
        <div className="dropdown-content">
          <p className='textDrop'>Public</p>
          <p className='textDrop'>All</p>
          <p className='textDrop'>Privite</p>
          <p className='textDrop'>Cources</p>
          <p className='textDrop'>Forks</p>
          <p className='textDrop'>Archived</p>
          <p className='textDrop'>Mirros</p>
          <p className='textDrop'>Temlates</p>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">Language</button>
        <div className="dropdown-content">
          <p className='textDrop'>All</p>
          <p className='textDrop'>HTML</p>
          <p className='textDrop'>JavaScript</p>
          <p className='textDrop'>CSS</p>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">Sort</button>
        <div className="dropdown-content">
          <p className='textDrop'>Reverse</p>
          <p className='textDrop'>Name</p>
          <p className='textDrop'>Stars</p>
        </div>
      </div>

    </div>
    <div className='AddStars'>
      {addfavor?.map((el) => {
        return <CartStar key={el.name} {...el} />
      })}
    </div>
  </div>
    
  }
    </div>
  )
}
