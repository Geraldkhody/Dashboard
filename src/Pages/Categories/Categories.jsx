import React from "react";
import style from "./Categories.module.css";
import SubCategoryItem from "../../Component/SubCategoryItem/SubCategoryItem";
import Sort from "../../Component/Sort/Sort";

const Categories = () => {
  return (
    <div className={style.cate}>
      <div className={style.header}>
        <div className={style.head}>Categories</div>
        <Sort />
      </div>
      <div className={style.body}>
        <SubCategoryItem />
        <SubCategoryItem />
        <SubCategoryItem />
        <SubCategoryItem />
        <SubCategoryItem />
        <SubCategoryItem />
        <SubCategoryItem />
        <SubCategoryItem />
        <SubCategoryItem />
        <SubCategoryItem />
        <SubCategoryItem />
        <SubCategoryItem />
      </div>
    </div>
  );
};

export default Categories;
