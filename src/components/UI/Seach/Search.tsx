import React from "react";
import "./Search.module.scss";
import search from "../../../assets/search.svg";

function Search() {
  return (
    <>
      <input className="search" type="text" placeholder="Название или тикер" />
    </>
  );
}

export default Search;
