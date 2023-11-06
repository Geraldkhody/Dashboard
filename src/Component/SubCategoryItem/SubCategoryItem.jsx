import React from "react";
import style from "./SubCategoryItem.module.css"
import SubCategory from "../../Pages/SubCategory/SubCategory";

const SubCategoryItem = ({SubCategoryHandler}) => {
  return (
    <div className={style.container} onClick={SubCategoryHandler}>
      <div className={style.pic}></div>
      <div>
        <div className={style.name}>Category Name</div>
        <div className={style.total}>10 Nominees</div>
      </div>
    </div>
  );
};

export default SubCategoryItem;
