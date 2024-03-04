const SearchField = ({ searchFilter, handleFilterChange }) => {
  //
  return (
    <div>
      <p>esto es el campo de busqueda</p>
      <input value={searchFilter} onChange={handleFilterChange} />
    </div>
  )
}

export default SearchField