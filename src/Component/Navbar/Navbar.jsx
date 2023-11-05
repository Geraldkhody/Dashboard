import React from "react";
import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.search}>
        <input
          type="text"
          spellCheck="true"
          placeholder="Search for Category..."
        />
        <i className={`${style['search-icon']} fa fa-search`}></i>
      </div>
      <div className={style.profile}>
        <div className={style.username}>Stanislaus</div>
        <div className={style["profile-pic"]}></div>
      </div>
    </div>
  );
};

export default Navbar;
