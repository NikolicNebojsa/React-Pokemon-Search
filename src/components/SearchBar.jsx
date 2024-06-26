import React, { useState } from "react";
import "./SearchBar.css";
// ucitavamo search kao prop
const SearchBar = ({ search }) => {
  // inputValue state koji sluzi da izvucemo trenutnu vrednost input fielda
  const [inputValue, setInputValue] = useState("");

  const handleClick = () => {
    search(inputValue);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="pokemon-search">
      <input
        value={inputValue}
        type="text"
        placeholder="Type pokemon name in here"
        onChange={handleChange}
      />
      <button onClick={handleClick}>
        <div className="dot"></div>
      </button>
    </div>
  );
};

export default SearchBar;
