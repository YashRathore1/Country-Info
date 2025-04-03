import { useLoaderData, useParams } from "react-router"
import './CountryDetail.css'


export default function CountryDetail() {
  const { id } = useParams()
  const country = useLoaderData()
  console.log(country)
  if(Array.isArray(country)){
    return (
      <div className="countryDetail">

        <div className="country">
          <h2>{country[0]?.name.common + ' (' + country[0]?.altSpellings[0] + ')'}</h2>
          <img src={country[0]?.flags.png} alt="" className="flag"/>
        </div>

        <div className="about">
          {country[0]?.name.official && <h3>Official Name: {country[0]?.name.official}</h3>}
          {country[0]?.capital && <h4>Capital: {country[0]?.capital}</h4>}
          {country[0]?.flags.alt && <p>About the Flag: {country[0]?.flags.alt}</p>}
          {country[0]?.population && <p>Population: {country[0]?.population}</p>}
          {country[0]?.area && <p>Area: {country[0]?.area + ' sq. km'}</p>}
          {country[0]?.borders && <p>Borders: {country[0]?.borders}</p>}
          {country[0]?.timezones && <p>Timezone: {country[0]?.timezones}</p>}
          {country[0]?.unMember && <p>UN Member: {country[0]?.unMember ? 'True' : 'False'}</p>}
          {country[0]?.maps.googleMaps && <p>Look at the Map: {<a href={country[0]?.maps.googleMaps}>Google Maps</a>}</p>}
          {/* <img src={country[0]?.coatOfArms.png} alt="" /> */}
        </div>  

      </div>
    )
  }
}

export const countryData = async ({params}) => {
  const { id } = params
  const res = await fetch('https://restcountries.com/v3.1/name/' + id)
  const apiData = await res.json()
  if(Array.isArray(apiData)){
    return apiData
  }else{
    console.log('data is not array')
  }
}