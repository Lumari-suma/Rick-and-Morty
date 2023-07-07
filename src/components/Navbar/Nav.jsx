import React from "react";
import SearchBar from "./SearchBar/SearchBar.jsx";
import style from "./Nav.module.css";
import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <div className={style.container}>
      <Link to="/home">Home</Link>
      <Link to="/favorites">Favs ❤️</Link>
      <Link to="/about">About</Link>
      {/* <Link to="/create">ADD CHARACTER!</Link> */}
      <SearchBar onSearch={props.onSearch} />      
      <button className={style.btn} onClick={props.out}>LOGOUT</button>
    </div>
  );
}
