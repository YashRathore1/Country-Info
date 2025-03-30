import { NavLink, Outlet } from 'react-router'
import './Layout.css'
import { useEffect, useRef, useState } from 'react'
import Login from '../components/Login'

export default function Layout() {
  const [login, setLogin] = useState(false);

  const showLogin = () => {
    setLogin(true)
  }

  return (
    <>
      <header>
        <div className="header-content">
          <div className="heading">
            <div className="brand-name">
              <img src='/public/Untitled design.png' alt="" className='logo'/>
              <h1>Country Info</h1>
            </div>
          </div>
          <div className="navigation">
            <NavLink className='navLink' to='/'>Home</NavLink>
            <NavLink className='navLink' to='/play-quiz'>Quiz</NavLink>
            <NavLink className='navLink' to='/countries'>Countries</NavLink>
            <button onClick={showLogin} className='login'>Login</button>
          </div>
        </div>
      </header>

      <main>  
        <div className="content">
          <Outlet />
        </div>
        {login && <Login setLogin={setLogin}/>}
      </main>
    </>
  )
}
