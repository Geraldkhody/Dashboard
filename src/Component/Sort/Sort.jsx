import React from 'react';
import style from "./Sort.module.css";

const Sort = () => {
  const sortHandler = () => {
    // setShowSort(true)
  };

  return (
    <ul className={style.dropdown}>
      <li className={style.dropbtn} onClick={sortHandler}>Sort</li>
      <ul className={style['dropdown-content']}>
        <li>Name</li>
        <li>Vote</li>
      </ul>
    </ul>
  )
}

export default Sort
