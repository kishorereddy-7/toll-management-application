import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import SearchInput from "../searchInput/searchInput";
import './Header.css'

const Header = (props) => {
  return (
    <header>
      <h3 className="header-wrapper">Toll entries/Vehicle entries</h3>
      {props.isTollgateList ? "" : <FontAwesomeIcon icon={faFilter} />}
      <SearchInput placeholder={props.isTollgateList ? "Search a toll" : "Search vehicle"} />
    </header>
  );
}

export default Header