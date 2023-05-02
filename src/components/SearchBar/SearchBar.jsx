import { useState } from "react";
import PropTypes from "prop-types";

 const SearchBar = ({submit}) => {

 const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value.toLowerCase())
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "") {
      return;
    }

    submit(name);
  };

    return (
      <header className="searchbar">
        <form className="form" onSubmit={handleSubmit}>
          <button type="submit" className="form-button">
            <span>Search</span>
          </button>

          <input
            value={name}
            className="form-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={handleChange}
          />
        </form>
      </header>
    );
  }

SearchBar.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default SearchBar;