const CountryInfo = ({ country }) => {
  if (country === null) return null

  const name = country.name.common
  const capital = country.capital ?
    country.capital.map((current, index, arr) => current + (index==arr.length-1 ? "" : ", ")) : "None"
  const area = country.area
  const languages = country.languages ? Object.values(country.languages).map(lang => <li key={lang}>{lang}</li>) : "None"

  return (
    <div>
      <h2> {name} </h2>
      <div> Capital: {capital} </div>
      <div> Area: {area} </div>
      <h3> languages: </h3>
      <ul> {languages} </ul>
      <img src={country.flags.png} alt={country.flags.alt} height={150} />
    </div>
  )
}

export default CountryInfo