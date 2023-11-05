import React from 'react';
import style from "./Aside.module.css";

const Aside = () => {
  return (
    <div className={style.container}>
      <div>
        <div>
          <i className="fa fa-home"></i>
          <span>Dashboard</span>
        </div>
        <div>
          <i className="fa fa-user"></i>
          <span>Categories</span>
        </div>
        <div>
          <i className="fa fa-settings"></i>
          <span>Settings</span>
        </div>
      </div>

      <button className={style.activate}>
        ACTIVATE VOTING
      </button>
    </div>
  )
}

export default Aside
