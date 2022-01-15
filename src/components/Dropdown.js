import { useState } from 'react'

/*
============
Write out the component itself
============
*/

const countries =[
    { name: 'Usa',  cities: ["New York", "San Francisco", "Austin", "Dallas"]},
    { name: 'France', cities: ["Paris", "Marseille", "Lille", "Lyon"]},
    { name: 'England', cities: ["London", "Liverpool", "Leicester", "Birmingham"]}
  ];  

const Dropdown = () => {
    const [country, setCountry] = useState("⬇️ Select a country ⬇️")
  
    let handleCountryChange = (e) => {
        setCountry(e.target.value)
      }

    return (
        <div>
            <h1>Hello. Election deadline for {country} </h1>
            <select onChange={handleCountryChange}>Add
                <option value="⬇️ Select a country ⬇️"> -- Select a country
                </option>
                {countries.map((country) => 
                <option key={country.name} value={country.name}>{country.name}
                </option>)}
            </select>
        </div>
    )
}

/*
============
Write out default Props in case something fails
============
*/

/*
============
Write out specific styles in case of dynamic styling
============
*/
const classStyles = {
    color: 'red'
}

export default Dropdown
