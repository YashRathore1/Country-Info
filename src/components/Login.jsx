import './Login.css'
import ReactDom from 'react-dom/client'
import {Link} from 'react-router-dom'
export default function Login({setLogin}) {
    
    const closeLogin = ()=>{
        setLogin(false)
    }

  return (
    <div className="login-overlay">
        <div className="login-form">
            <button className='close-button' onClick={closeLogin}>
            <span class="material-symbols-outlined">close</span>
            </button>
            <form>
                <h1 className='login-heading'>Sign in</h1>
                <label> 
                  <span className="material-symbols-outlined">mail</span>                    
                  <input type="email" placeholder='Enter your email' required />
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
