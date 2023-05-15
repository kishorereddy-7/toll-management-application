import './searchInput.css'

const SearchInput = (props) => {
  return(
    <input className="search-input" placeholder={props.placeholder} />
  )
}

export default SearchInput