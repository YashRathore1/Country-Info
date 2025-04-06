import './App.css'
import {createBrowserRouter, NavLink, Route, RouterProvider, createRoutesFromElements} from 'react-router-dom'
import CountryDetail, { countryData } from './features/countries/CountryDetail.jsx';
import FlagsLayout from './layout/flag-layout/FlagsLayoutPage.jsx';
import FlagsOfCountries, { flagData } from './pages/flags/FlagsOfCountriesPage.jsx';
import Quiz from './features/quiz/QuizPage.jsx';
import Layout from './layout/main-layout/LayoutPage.jsx';
import HomePage from './pages/homepage/HomePagePage.jsx';

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
