import React, { useState } from 'react';
import style from "./Aside.module.css";

const Aside = () => {
  const [voteIsActive, setVoteIsActive] = useState(false);

  const toggleHandler = (e) => {
    setVoteIsActive(!voteIsActive);
  }

  const activateClasses = voteIsActive ? `${style.activate} ${style.isActive}` : `${style.activate}`;

  return (
    <div className={style.wrapper}>
      <div className={style['logo-profile']}>
        <span className={style['logo-icon']}></span>
        <span className={style['logo-name']}>Voting</span>
      </div>

      <div className={style.container}>
        <div>
          <div className={style['side-links']}>
            <span className={style.icon}>
              <i className="fa fa-house"></i>
            </span>
            <span className={style['link-name']}>Dashboard</span>
          </div>
          <div className={style['side-links']}>
            <span className={style.icon}>
              <i className="fa-regular fa-user"></i>
            </span>
            <span className={style['link-name']}>Categories</span>
          </div>
          <div className={style['side-links']}>
            <span className={style.icon}>
              <i className="fa fa-gear"></i>
            </span>
            <span className={style['link-name']}>Settings</span>
          </div>
        </div>

        <button className={activateClasses} onClick={toggleHandler}>
          {!voteIsActive && "ACTIVATE"} {voteIsActive && "DEACTIVATE"} <br /> VOTING
        </button>

      </div>
    </div>
  )
}

export default Aside
