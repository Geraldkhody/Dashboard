import React from 'react';
import style from "./SubCategory.module.css";
import Aside from '../../Component/Aside/Aside';
import Navbar from '../../Component/Navbar/Navbar';

const SubCategory = () => {
  return (
    <div className={style.subcate}>
      {/* <Aside /> */}
      <main className={style.main}>
        <div>
            <Navbar />

            <div className={style.container}>
                <div className={style.head}>Category Name</div>
                <div className={style.body}>
                    <div className={style['win-container']}>
                        <div className={style.win}>
                            <div>Winning Nominee</div>
                            <div className={style['win-info']}>
                                <div className={style['win-profile']}>profile</div>
                                <div>
                                    <div>Gerald Khody</div>
                                    <div>899 votes</div>
                                    <div>GHS 25000</div>
                                </div>
                            </div>
                        </div>
                        <div>time-totalMoney</div>
                    </div>
                    <div className={style.results}>Table</div>
                </div>
            </div>
        </div>
      </main>
    </div>
  )
}

export default SubCategory
