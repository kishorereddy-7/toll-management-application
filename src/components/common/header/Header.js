import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import SearchInput from "../searchInput/searchInput";
import "./Header.css";

const Header = (props) => {
  return (
    <header className="col-md-6 col-lg-7">
      <h3 className="header-wrapper mt-2">Toll entries/Vehicle entries</h3>
      {props.isTollgateList ? (
        ""
      ) : (
        <FontAwesomeIcon className="mt-2" icon={faFilter} />
      )}
      <SearchInput
        placeholder={props.isTollgateList ? "Search a toll" : "Search vehicle"}
      />
    </header>
  );
};

export default Header;
