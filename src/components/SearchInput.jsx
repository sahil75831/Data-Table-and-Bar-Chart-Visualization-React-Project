import React from "react";
import css from "../app.module.scss";

const SearchInput = ({ searchTerm, setSearchTerm }) => (
  <input
    type="text"
    placeholder="Search By Name or Email ..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className={css.searchinput}
  />
);

export default SearchInput;
