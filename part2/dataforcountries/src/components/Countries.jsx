const Countries = ({ countries, ready, handleShowInfo }) => {
  if (!ready) {
    return <div> Loading... </div>
  }

  if (countries.length == 0) {
    return <div> No matches </div>
  }

  if (countries.length > 10) {
    return <div> Too many matches, specify another filter </div>
  }

  return (
    <ul>
      {countries.map(country => 
        <li key={country.name.common}> 
          {country.name.common} 
          <button onClick={() => handleShowInfo(country)} > show </button>
        </li>
      )}
    </ul>
  )
}

export default Countries