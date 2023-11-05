import React from "react";
import style from "./SubCategoryItem.module.css"

const SubCategoryItem = () => {
  return (
    <div className={style.container}>
      <div className={style.pic}></div>
      <div>
        <div className={style.name}>Category Name</div>
        <div className={style.total}>10 Nominees</div>
      </div>
    </div>
  );
};

export default SubCategoryItem;
