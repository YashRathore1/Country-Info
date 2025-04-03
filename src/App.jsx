import './App.css'
import {createBrowserRouter, NavLink, Route, RouterProvider, createRoutesFromElements} from 'react-router-dom'
import Layout from './Layouts/Layout/Layout';
import Flags, { flagData } from './Pages/Flags/Flags';
import CountryDetail, { countryData } from './Components/CountryDetail/CountryDetail';
import FlagsLayout from './Layouts/FlagsLayout/FlagsLayout';
import HomePage from './Pages/Homepage/HomePage';
import Quiz from './Pages/Quiz/Quiz';



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