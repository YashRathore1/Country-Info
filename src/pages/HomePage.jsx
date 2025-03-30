import './HomePage.css'
import { NavLink } from 'react-router'

export default function HomePage() {
  return (
    <div className='homepage'>
        <div className="homepage-content">
            <h1 className='homepage-heading1'>Explore the World Like Never Before</h1>
            <h2 className='homepage-heading2'>Find detailed information about countries, test your knowledge with fun quizzes, and discover amazing facts!</h2>
            <div className="explore-buttons">
                <button>
                  <NavLink to='/countries'>
                    Discover Countries
                  </NavLink>
                </button>
                <button>
                  <NavLink to='/play-quiz'>
                    Play a Quiz
                  </NavLink>
                </button>
            </div>
        </div>
    </div>
  )
}
