const SearchField = ({ searchFilter, handleFilterChange }) => {
  return (
    <div>
      find countries <input value={searchFilter} onChange={handleFilterChange} />
    </div>
  )
}

export default SearchField