import './App.css'
import {createBrowserRouter, NavLink, Route, RouterProvider, createRoutesFromElements} from 'react-router-dom'
import CountryDetail, { countryData } from './Components/CountryDetail/CountryDetail';
import FlagsLayout from './Layouts/FlagsLayout/FlagsLayout.jsx';
import FlagsOfCountries, {flagData} from './Pages/Flags/FlagsOfCountries.jsx';
import HomePage from './Pages/Homepage/HomePage.jsx';
import Quiz from './Pages/Quiz/Quiz.jsx';
import Layout from './Layouts/Root/Layout.jsx';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout /> }>
        <Route index element={<HomePage />} />
        <Route path="/play-quiz" element={<Quiz />}/>
        <Route path='/countries' element={<FlagsLayout />}>
          <Route index element={<FlagsOfCountries />} loader={flagData} />
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
