import React from "react";
import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.search}>
          <input
            type="text"
            spellCheck="true"
            placeholder="Search for Category..."
          />
          <div className={style['search-button']}>
            <i className={`${style['search-icon']} fa fa-search`}></i>
          </div>
        </div>
        <div className={style.profile}>
          <div className={style.username}>Stanislaus</div>
          <div className={style["profile-pic"]}>
            <img src="images/user-pic.jpg" alt="User-Profile" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
