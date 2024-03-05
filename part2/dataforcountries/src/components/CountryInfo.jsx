const CountryInfo = ({ country }) => {
  if (country === null) return null

  return (
    <div>
      <h2> {country.name.common} </h2>
      <div> Capital: {country.capital.map((current, index, arr) => current + (index==arr.length-1 ? "" : ", "))} </div>
      <div> Area: {country.area} </div>
      <h3> languages: </h3>
      <ul>
        {Object.values(country.languages).map(language =>
          <li key={language}>
            {language}
          </li>
        )}
      </ul>
      <img src={country.flags.png} alt={country.flags.alt} height={150} />
    </div>
  )
}

export default CountryInfo