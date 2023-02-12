import React from 'react'
import "./owerview.scss"
import axios from 'axios'
import { CardOweriev } from './card'
import SellIcon from '@mui/icons-material/Sell';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';
import gif from "../../img/erg.gif"

import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import SquareIcon from '@mui/icons-material/Square';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Checkbox from '@mui/material/Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import FormControlLabel from '@mui/material/FormControlLabel';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import HeightIcon from '@mui/icons-material/Height';
import { Link } from 'react-router-dom';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  bgcolor: '#0D1117',
  color: "#fff",
  border: '2px solid #000',
};

const Owerview = () => {
const [bg,setbg] = React.useState(true)
const [lop,setlop] = React.useState(true)
  const [qiymat, setqiymat] = React.useState([])
  const [load, setload] = React.useState(true)

  const [open, setOpen] = React.useState(false);
  const [btn, setbtn] = React.useState(false)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [addshow,setaddshow] = React.useState(false)
  const [select, setselect] = React.useState(true)
////////////////////////
const [value,setvalue]  = React.useState('')

  React.useEffect(() => {
    axios.get("https://api.github.com/users/isoxonGulamov/repos").then((response) => {
      setqiymat(response.data)
      setTimeout(() => {
        setload(false)
      }, 2000);
    })
  }, [])
  let popular = qiymat.slice(8, 14)
  let h = qiymat.slice(1, 4)
  let g = qiymat.slice(1, 3)
  let l = qiymat.slice(8,15)
  let y = qiymat
  console.log(h);
  const reposFiltered = y.filter((el)=> {
    return el.name.toLowerCase().includes(value.toLowerCase())
  })

  const NewRepos = ()=>{
    handleClose()

  }
const change = (e)=>{
setvalue(e.target.value)
}
  return (
    <div className='Owerview_Box'>
      <div className='About__Box'>
        <p className='ReadME'>isoxonGulamov</p>
        <div className="typing-slider">
          <p>I'm a Fronted Developer</p>
          <p>I'm like Java Script</p>
          <p>I'm like React.</p>
        </div>
        <ul className='Abuot_List'>
          <li style={{ color: "#fff", marginTop: "15px" }}> - 🌱 I’m currently learning everything about web development</li>
          <li style={{ color: "#fff", marginTop: "15px" }}>- ⚡ Fun fact: I love sports and play guitar</li>
          <li style={{ color: "#fff", marginTop: "15px" }}>- 🥅 2023 Goals: Learn more about ReactJS , NextJs and JavaScript</li>
        </ul>
      </div>
      <div className='Title_box'>
        <h2 className='popluar'>Popular repositories</h2>
        <p onClick={handleOpen} className='pins_text'><img style={{width:"30px",height:"30px"}} src={gif} alt="r" /><SellIcon />Customize your pins </p>
      </div>

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
              <div className="wef">
              <p className='editName' style={{ backgroundColor: "#161B22" }}> Edit pinned items</p>
              <p  className='poy' onClick={NewRepos}>X</p>
              </div>
              <p className='loremModal'>Select up to six public repositories or gists you'd like to show to anyone.</p>
              <input onChange={change} name='newArr' placeholder='🔍 Filter repositories' className='inputModal' type="text" />
          
                <div className='Modal_text'>
                  {reposFiltered?.map((el) => {
                    return <div key={el.id}>
                      <FormControlLabel
                      
                        value="end"
                        control={<Checkbox style={{ border: "1px solid red" }} />}
                        label={<div className="Modal_btn-box">
                          <LibraryBooksIcon />

                          <div className='Jes'>
                            <p className='BooKName' key={el.id}>{el.name}</p>
                            <p className='btnStar'><StarBorderIcon /></p>
                          </div>

                        </div>}
                        labelPlacement="end"
                      />
                       
                    </div>

                  })}
                </div>
                <div style={{display:"flex",aliginItems:"center",padding:"15px"}}>
                <p style={{color:"#fff",opacity:0.6}}>6 remaining</p>
                <button onClick={ NewRepos} style={{backgroundColor:"green",padding:"5px 18px",color:"#fff",borderRadius:"15px",marginLeft:"200px",cursor:"pointer"}}>Save Pins</button> 
                </div>
            </Box>
          </Fade>
        </Modal>
      </div>
      <div className='Cards_box'>
     
        {load ? <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
          :

          popular?.map((el) => {
            return <CardOweriev key={el.id} {...el} />
          })
        }
      </div>
      <div className='Title2__box'>
        <p className='text2'>138 contributions in the last year</p>
        <p className='textSelect' onClick={() => setselect((!select))}>Contribution settings<ExpandMoreIcon /></p>

      </div>
      {!select ?
        <div className='BoxSelect'>
          <div className='h'>
            <h5 className='SelectTitle'>Private contributions</h5>
            <p className='SelectText'>Turning on private contributions will show anonymized
              private activity on your profile.</p>
          </div>

          <div className='h'>
            <h5 className='SelectTitle'>Activity overview</h5>
            <p className='SelectText'>Turning on the activity overview will show an overview of your activity
              across organizations and repositories.</p>
          </div>
        </div>
        : ""
      }
      <div className='Calendar_Table'>
        <ul className='CalendarList'>
          <li className='CalendarItem'>
            Feb
          </li>
          <li className='CalendarItem'>
            Mar
          </li>
          <li className='CalendarItem'>
            Apr
          </li>
          <li className='CalendarItem'>
            May
          </li>
          <li className='CalendarItem'>
            Jun
          </li>
          <li className='CalendarItem'>
            Jul
          </li>
          <li className='CalendarItem'>
            Aug
          </li>
          <li className='CalendarItem'>
            Sep
          </li>
          <li className='CalendarItem'>
            Oct
          </li>
          <li className='CalendarItem'>
            Nov
          </li>
          <li className='CalendarItem'>
            Dec
          </li>
          <li className='CalendarItem'>
            Jan
          </li>
        </ul>
        <div className='Megic_Cubic'>
          <div className='gur'>
            <p className='CalendarItem'>Mon</p>
            <p className='CalendarItem'>Wed</p>
            <p className='CalendarItem'>Fri</p>
          </div>
          <div className='cubic'>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "yellow" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "yellow" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>

            <div style={{ color: "green" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "green" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>

            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "yellow" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "green" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "green" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "green" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "green" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "green" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "yellow" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "green" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "green" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "green" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "yellow" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "green" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "yellow" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "green" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "green" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "yellow" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#green" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "green" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "green" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "yellow" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "green" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "yellow" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "yellow" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
          </div>

        </div>
        <div className='u' style={{ display: "flex", aliginItems: "center" }}>
          <p style={{ color: "#fff", opacity: 0.6 }}>Learn how we count contributions</p>
          <div style={{ display: "flex", aliginItems: "center" }}>
            <span style={{ color: "#fff", opacity: 0.5 }}>Less</span>
            <div style={{ color: "#21262D" }}><SquareIcon /></div>
            <div style={{ color: "black" }}><SquareIcon /></div>
            <div style={{ color: "blue" }}><SquareIcon /></div>
            <div style={{ color: "yellow" }}><SquareIcon /></div>
            <div style={{ color: "green" }}><SquareIcon /></div>
            <span style={{ color: "#fff", opacity: 0.5 }}>More</span>
          </div>
        </div>
      </div>
      <div className='Show_Box'>
        <div>
          <p className='Show_title'>Contribution activity</p>
        <div style={{display:"flex",aliginItems:"center"}}>
        <div className='BoxToggle'>
            <div className='d'>
              <p style={{ color: "#fff", marginLeft: "10px" }}>February 2023</p> <span className='line'></span>
            </div>
            <div>
              <Accordion style={{ backgroundColor: "#0D1117", color: "#fff" }}>
                <AccordionSummary
                  expandIcon={<HeightIcon style={{ backgroundColor: "red", borderRadius: "50%" }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <div className="set" style={{ display: "flex", aliginItems: "center" }}>
                    <CollectionsBookmarkIcon />Created 2
                    commits in
                    2
                    repositories
                  </div>
                </AccordionSummary>
                <AccordionDetails>

                  <div className='typo'>
                    <div className='Name_Boz'>
                      {g?.map((el) => {
                        return <Link style={{ color: "blueviolet", marginTop: "10px" }} to={el.html_url} key={el.node_id}>isoxonGulamov/{el.name}</Link>
                      })}
                    </div>
                    <div>

                      <div className='line1'>
                      </div>
                      <div className='line1'>
                      </div>
                    </div>
                  </div>

                </AccordionDetails>
              </Accordion>
              <Accordion style={{ backgroundColor: "#0D1117", color: "#fff" }}>
                <AccordionSummary
                  expandIcon={<HeightIcon style={{ backgroundColor: "red", borderRadius: "50%" }} />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <div style={{ display: "flex", aliginItems: "center" }} className="set"><CollectionsBookmarkIcon />Created 3 repositories</div>
                </AccordionSummary>
                <AccordionDetails>



                  <div className='Boxf'>
                    <div className='Name_Boz'>
                      {h?.map((el) => {
                        return <Link style={{ color: "blueviolet", marginTop: "10px" }} to={el.html_url} key={el.node_id}>isoxonGulamov/{el.name}</Link>
                      })}
                    </div>
                    <div>
                      <p>🟡JavaScript</p>
                      <p>🟣CSS</p>
                      <p>🔴HTML</p>
                    </div>


                    <div>
                      <p style={{ opacity: 0.6 }}>Feb 9</p>
                      <p style={{ opacity: 0.6 }}>Feb 4</p>
                      <p style={{ opacity: 0.6 }}>Feb 4</p>
                    </div>
                  </div>


                </AccordionDetails>
              </Accordion>
              {addshow ?
                <div>
                  <Accordion style={{ backgroundColor: "#0D1117", color: "#fff" }}>
                <AccordionSummary
                  expandIcon={<HeightIcon style={{ backgroundColor: "red", borderRadius: "50%" }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <div className="set" style={{ display: "flex", aliginItems: "center" }}>
                    <CollectionsBookmarkIcon />Created 13
                    commits in
                    7
                    repositories
                  </div>
                </AccordionSummary>
                <AccordionDetails>

                  <div className='typo'>
                    <div className='Name_Boz'>
                      {l?.map((el) => {
                        return <Link style={{ color: "blueviolet", marginTop: "10px" }} to={el.html_url} key={el.node_id}>isoxonGulamov/{el.name}</Link>
                      })}
                    </div>
                    <div>

                      <div className='line1'>
                      </div>
                      <div className='line1'>
                      </div>
                      <div className='line1'>
                      </div>
                      <div className='line1'>
                      </div>
                      <div className='line1'>
                      </div>
                      <div className='line1'>
                      </div>
                      <div className='line1'>
                      </div>
                      <div className='line1'>
                      </div>
                    </div>
                  </div>

                </AccordionDetails>
              </Accordion>
              <Accordion style={{ backgroundColor: "#0D1117", color: "#fff" }}>
                <AccordionSummary
                  expandIcon={<HeightIcon style={{ backgroundColor: "red", borderRadius: "50%" }} />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <div style={{ display: "flex", aliginItems: "center" }} className="set"><CollectionsBookmarkIcon />Created 7 repositories</div>
                </AccordionSummary>
                <AccordionDetails>



                  <div className='Boxf'>
                    <div className='Name_Boz'>
                      {l?.map((el) => {
                        return <Link style={{ color: "blueviolet", marginTop: "10px" }} to={el.html_url} key={el.node_id}>isoxonGulamov/{el.name}</Link>
                      })}
                    </div>
                    <div>
                      <p style={{lineHeight:"15px"}}>🟣CSS</p>
                      <p style={{lineHeight:"15px"}}>🔴HTML</p>
                      <p style={{lineHeight:"15px"}}>🟡JavaScript</p>
                      <p style={{lineHeight:"15px"}}>🔴HTML</p>
                      <p style={{lineHeight:"15px"}}>🟡JavaScript</p>
                      <p style={{lineHeight:"15px"}}>🟣CSS</p>
                      <p style={{lineHeight:"15px"}}>🟡JavaScript</p>
                      
                    </div>


                    <div>
                      <p style={{ opacity: 0.6 }}>Feb 9</p>
                      <p style={{ opacity: 0.6 }}>Feb 4</p>
                      <p style={{ opacity: 0.6 }}>Jun 27</p>
                      <p style={{ opacity: 0.6 }}>Jun 24</p>
                      <p style={{ opacity: 0.6 }}>Jun  20</p>
                      <p style={{ opacity: 0.6 }}>Jun  10</p>
                      <p style={{ opacity: 0.6 }}>Dec  29</p>
                    </div>
                  </div>


                </AccordionDetails>
              </Accordion>
             
                </div>
                 :
                 ""
              }
            </div>
          </div>
          <div className='btn_der'>
             {bg ?
             <button onClick={()=> setbg(false)} className='huy'>2022</button>
             :
             <button onClick={()=>setbg(true)} className='luy'>2022</button>
             }
             {lop ?
               <button onClick={()=>setlop(false)} className='luy'>2023</button>
             
             :
             <button onClick={()=> setlop(true)} className='huy'>2023</button>
             }
          </div>
        </div>
        </div>
        <button onClick={()=>setaddshow(true)} className='btnShow'>Show more activity</button>

        <div className='link_Box'>
          <p style={{color:"#fff",opacity:0.5}}>Seeing something unexpected? Take a look at the </p><Link style={{textDecoration:"none",marginLeft:"13px"}} to={"https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile"}> GitHub profile guide.</Link>
        </div>
      </div>
    
    </div>

  )
  // 
}

export default Owerview
