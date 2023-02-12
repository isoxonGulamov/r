import React from 'react';
import profileImg from "../../img/w.png";
import axios from 'axios';
import { Button, Stack, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import ApartmentRoundedIcon from '@mui/icons-material/ApartmentRounded';
import InputAdornment from '@mui/material/InputAdornment';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import AddLinkIcon from '@mui/icons-material/AddLink';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import { pink } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addUser } from '../../redux/future/userlist';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const Profile = () => {

  const {UserBio} = useSelector((state)=>state.User)
  const dispatch = useDispatch()
  const { handleSubmit, register, formState: { errors } } = useForm()
  const [name, setname] = React.useState({})
  const [state, setstate] = React.useState(true)
  const [time,settime] = React.useState(false)
 
  React.useEffect(() => {
    axios.get("https://api.github.com/users/isoxonGulamov").then((response) => {
      setname(response.data)
 
    })
  }, [])
  

  localStorage.setItem("User",JSON.stringify(UserBio))
  const submit = (data) => {
    dispatch(addUser(data))
    setstate(true)
  
  }
  let r = JSON.parse(localStorage.getItem("User"))
  return (
    <>
      <div>
        <img className='img' src={profileImg} alt="" />
        <h1 className='User_Name'>{r.name}</h1>
  
        <h2 className='name'>{name.login}</h2>
        <p className='bio'>{r.bio}</p>
        {state ?
          <Stack spacing={2}>
            <Button onClick={() => setstate(false)} variant="contained" color="success">
              Edit profile
              
            </Button>
            <div style={{display:"flex"}}>
              <Link className="linkfolow" to={"/followers"}><PeopleAltIcon/>{name.followers}followers</Link>
              <Link className="linkfolow" to={"/following"}>{name.following} following</Link>
              </div>
            <div>
              <div className='little_box'>
              <ApartmentRoundedIcon sx={{ color: pink[500] }} />
                  <p className='title_User'>{r.company}</p>
              </div>

              <div className='little_box'>
              <AddLocationIcon color="success" />
              <p  className='title_User'>{r.location}</p>
              </div>
              <div className='little_box'>
              <AddLinkIcon color="secondary" />
              <p className='title_User'>{r.website}</p>
              </div>
              <div className='little_box'>
              <AddLinkIcon color="primary" />
              <p className='title_User'>{r.img}</p>
              </div>
              <div className='little_box'>
              <AddLinkIcon color="primary" />
              <p className='title_User'>{r.img2}</p>
              </div>
              <div className='little_box'>
              <AddLinkIcon color="primary" />
              <p className='title_User'>{r.img3}</p>
              </div>
              <div className='little_box'>
              <AddLinkIcon color="primary" />
              <p className='title_User'>{r.img4}</p>
              </div>
            </div>
          </Stack>
          :
          <form style={{ color: "red" }} className='form' onSubmit={handleSubmit(submit)}>
            <Stack gap="20px">

              <TextField
                size='small' defaultValue={r.name} className='input'   {...register("name",)} label="Name" placeholder='Name' />
              <TextField id="filled-multiline-flexible" multiline
                rows={4}
                className='input' defaultValue={r.bio}  {...register("bio",)} label="Bio" placeholder='Add Bio' />
              <span className='textInput'>You can @mention other users and organizations to link to them.</span>
              <TextField defaultValue={r.company} size='small' className='input'  {...register("company",)} label="Company" placeholder='Company' InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <ApartmentRoundedIcon />
                  </InputAdornment>

                ),
              }} />
              <TextField defaultValue={r.location} size='small' className='input'  {...register("location",)} label="Location" placeholder='Location' InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AddLocationIcon />
                  </InputAdornment>

                ),
              }} />

              <TextField defaultValue={r.website} size='small' className='input'  {...register("website",)} label="Website" placeholder='Website' InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AddLinkIcon />
                  </InputAdornment>

                ),
              }} />
            <div className='Box_Time'>
              <AccessTimeFilledIcon style={{height:"20px",width:"20px"}}/>
            <Checkbox
          
            style={{marginLeft:"5px"}}
                {...label}
                defaultChecked
                
                sx={{
                  color: pink[800],
                  '&.Mui-checked': {
                    color: pink[600],
                  },
                }}
              />
              <span style={{marginLeft:"1px"}} className='textInput'>Display current local time</span>
             
            </div>
            <span style={{opacity:1}} className='textInput'>Social accounts</span>
            <TextField defaultValue={r.img} size='small' className='input'  {...register("img",)}  placeholder='link to social profile' InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AddLinkIcon />
                  </InputAdornment>

                ),
              }} />
                 <TextField defaultValue={r.img2} size='small' className='input'  {...register("img2",)}  placeholder='link to social profile' InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AddLinkIcon />
                  </InputAdornment>

                ),
              }} />
                 <TextField defaultValue={r.img3} size='small' className='input'  {...register("img3",)} placeholder='link to social profile' InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AddLinkIcon />
                  </InputAdornment>

                ),
              }} />
               <TextField defaultValue={r.img4} size='small' className='input'  {...register("img4",)} placeholder='link to social profile' InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AddLinkIcon />
                  </InputAdornment>

                ),
              }} />
           
              <Button variant="contained" type='submit'>Save</Button>
            </Stack>
          </form>

        }
      </div>
    </>
  )
}
