import { useEffect, useRef } from 'react'
import './Login.css'
import ReactDom from 'react-dom/client'
import {Link} from 'react-router-dom'
export default function Login({setLogin, login}) {
    
    const closeLogin = ()=>{
        setLogin(false)
    }
    
    const loginRef = useRef(null);
    useEffect(()=>{
        if(login){
            loginRef.current.focus()
        }
    }, [login])

  return (
    <div className="login-overlay" onClick={closeLogin}>
        <div className="login-form" onClick={(e)=>{e.stopPropagation()}}>
            <button className='close-button' onClick={closeLogin}>
            <span class="material-symbols-outlined">close</span>
            </button>
            <form>
                <h1 className='login-heading'>Sign in</h1>
                <label> 
                  <span className="material-symbols-outlined">mail</span>                    
                  <input ref={loginRef} type="email" placeholder='Enter your email' required />
                </label>

                <label> 
                <span className="material-symbols-outlined">lock</span>
                    <input type="password" placeholder='Password' required />
                </label>
            
                <Link path='' className='forgot-password'>Forgot Password?</Link>
                <button type='submit' className='submit-button'>Login</button>
            </form>
            <p className="create-account">
                Don't have an account?
                <Link path=''> Sign-up</Link>
            </p>
        </div>
    </div>
  )
}
