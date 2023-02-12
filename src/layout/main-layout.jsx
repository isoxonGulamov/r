import React from 'react'
import { Header } from '../components/header/header'
import { Footer } from '../components/footer/footer'
import { Outlet } from 'react-router-dom'
import { Profile } from '../components/profile/profile'

export const MainLayout = () => {
  const [state,usestate] = React.useState("")
  return (
     <>
     <header>
      <Header/>
     </header>
     <main>
       <div className='container'>
      <div className='Section__Box'>
        <div className='Proofile__box'>
            <Profile/>
        </div>
      <Outlet/>
      </div>
       </div>
     </main>
     <footer>
      <Footer/>
     </footer>
     </>
  )
}
