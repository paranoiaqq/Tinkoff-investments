import React from "react";
import styles from "./Search.module.scss";
// import search from "../../../assets/search.svg";

function Search() {
  return (
    <>
      <input
        className={styles.search}
        type="text"
        placeholder="Название или тикер"
      />
    </>
  );
}

export default Search;
