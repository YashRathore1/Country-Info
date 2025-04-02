import './App.css'
import Layout from './layouts/Layout'
import {createBrowserRouter, NavLink, Route, RouterProvider, createRoutesFromElements} from 'react-router-dom'
import Flags, { flagData } from './pages/Flags'
import CountryDetail, { countryData } from './components/CountryDetail'
import FlagsLayout from './layouts/FlagsLayout'
import HomePage from './pages/HomePage'
import Quiz from './pages/Quiz/Quiz'


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout /> }>
        <Route index element={<HomePage />} />
        <Route path="/play-quiz" element={<Quiz />}/>
        <Route path='/countries' element={<FlagsLayout />}>
          <Route index element={<Flags />} loader={flagData} />
          <Route path=':id' loader={countryData} element={<CountryDetail  />} />
        </Route>
        <Route path='*'/>
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App


// On line 10, loader has been used as a prop.