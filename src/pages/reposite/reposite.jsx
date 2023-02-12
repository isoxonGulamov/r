import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./reposite.scss"
import Box from '@mui/material/Box';
import gif from "../../img/erg.gif"
import Button from '@mui/material/Button';
import BookIcon from '@mui/icons-material/Book';
import axios from 'axios';
import { CartReposite } from './cartReposite';
import { Link } from 'react-router-dom';
export const Reposite = () => {
  const [data, setdata] = React.useState([])
  const [load, setloading] = React.useState(true)
  const [data2, setdata2] = React.useState([])
  const [value, setvalue] = React.useState("")
  const [state,setstate] = React.useState(true)
  React.useEffect(() => {
    axios.get("https://api.github.com/users/isoxonGulamov/repos").then((response) => {
      setdata(response.data)
      setdata2(response.data)
      setTimeout(() => {
        setloading(false)
      }, 2000);
    })
  }, [])

  const setitem = (id) => {
    for (let i of data) {
      if (i.id == id) {
        let arr = JSON.parse(localStorage.getItem("Products")) || []
        ///
        if (!arr.find(el => el.id == id)) {

          arr.push(i)


        } else {
       console.log("d");
      
        }
        localStorage.setItem("Products", JSON.stringify(arr))

      }
    }
  }

  const reposFiltered = data.filter((el) => {
    return el.name.toLowerCase().includes(value.toLowerCase())
  })
  const change = (e) => {
    setvalue(e.target.value)
  }
  const det = () => {
    reposFiltered.reverse()
    setdata(reposFiltered)
  }
  let g = []
  const html = () => {
    for (let i of data2) {
      if (i.language == "HTML") {
        g.push(i)
        setdata(g)
      }
    }
  }
  let k = []
  const java = () => {
    for (let i of data2) {
      if (i.language == "JavaScript") {
        k.push(i)
        setdata(k)
      }
    }
  }
  let y = []
  const css = () => {
    for (let i of data2) {
      if (i.language == "CSS") {
        y.push(i)
        setdata(y)
      }
    }
  }
  const all = () => {
    setdata(data2)
  }

  const nm = ()=>{

      let g = JSON.parse(localStorage.getItem("Products"))
if (g !== null) {
  setdata(g)
  
}    
  }
  const ner = ()=>{
    let b  = reposFiltered.reverse()
    setdata(b)
  }
  const wej = ()=>{
    setstate(false)
    setdata([{name:"",languages:""}])
  }
  return (
    <div className='container'>
      <>
        <div className='Repos_Header'>

          <form className='form'>
            <input onChange={change} placeholder='Find a repository...' className='inputfilter' type="text" />
          </form>

          <div className="dropdown">
            <button className="dropbtn">Type</button>
            <div className="dropdown-content">
              <p onClick={wej} className='textDrop'>All</p>
              <p onClick={wej} className='textDrop'>Public</p>
              <p onClick={wej} className='textDrop'>Privite</p>
              <p onClick={wej} className='textDrop'>Cources</p>
              <p onClick={wej} className='textDrop'>Forks</p>
              <p onClick={wej} className='textDrop'>Archived</p>
              <p onClick={wej} className='textDrop'>Mirros</p>
              <p onClick={wej} className='textDrop'>Temlates</p>
            </div>
          </div>
          <div className="dropdown">
          <img style={{width:"30px",height:"30px",position:"relative",top:"9px",right:"7px"}} src={gif} alt="r" />   <button className="dropbtn">Language</button>
            <div className="dropdown-content">
              <p onClick={all} className='textDrop'>All</p>
              <p onClick={html} className='textDrop'>HTML</p>
              <p onClick={java} className='textDrop'>JavaScript</p>
              <p onClick={css} className='textDrop'>CSS</p>
            </div>
          </div>
          <div className="dropdown">
          <img style={{width:"30px",height:"30px",position:"relative",top:"9px",right:"7px"}} src={gif} alt="r" />    <button className="dropbtn">Sort</button>
            <div className="dropdown-content">
              <p onClick={det} className='textDrop'>Reverse</p>
              <p onClick={ner} className='textDrop'>Name</p>
              <p onClick={nm} className='textDrop'>Stars</p>
            </div>
          </div>
          <div>
            <Button variant="outlined" color='success' startIcon={<BookIcon />}>
              <Link style={{color:"#fff",textDecoration:"none"}} to={"https://github.com/new"}>New</Link> 
            </Button>
          </div>
        </div>
        <div className='Cards__repos'>
          {load ? <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            :
            reposFiltered?.map((el) => {
              return <CartReposite key={el.id} setitem={setitem} {...el} />
            })

          }
          {!state ? <h1 className='tef' style={{color:"#fff"}}>isoxonGulamov doesn’t have any repositories that match.</h1> : ""}
        </div>
      </>
    </div>

  )
}
