import "./searchInput.css";

const SearchInput = (props) => {
  return (
    <input className="search-input mt-2" placeholder={props.placeholder} />
  );
};

export default SearchInput;
