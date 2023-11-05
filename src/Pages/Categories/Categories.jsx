import React from "react";
import style from "./Categories.module.css";
import Navbar from "../../Component/Navbar/Navbar";
import SubCategoryItem from "../../Component/SubCategoryItem/SubCategoryItem";
import Aside from "../../Component/Aside/Aside";

const Categories = () => {
  return (
    <div className={style.cate}>
      <Aside />
      <main className={style.main}>
        <div>
          <Navbar />

          <div className={style.container}>
            <div className={style.head}>Categories</div>
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
        </div>
      </main>
    </div>
  );
};

export default Categories;
