import React from "react";
import style from "./SubCategory.module.css";
// import Sort from "../../Component/Sort/Sort";

const SubCategory = () => {
  return (
    <div className={style.subcate}>
        <div className={style.head}>Category Name</div>
  

        <div className={style.container}>
          <div className={style["win-container"]}>
            <div className={style.win}>
              <div className={style.title}>Winning Nominee</div>
              <div className={style["win-info"]}>
                <div className={style["win-profile"]}></div>

                <div>
                  <div className={style.name}>Gerald Khody</div>
                  <div><span className={style['win-vote']}>899</span> votes</div>
                  <div className={style['win-amount']}>GHS 25000</div>
                </div>
              </div>
            </div>
            <div className={style['time-money']}>
                <div className={style.time}>20 : 30: 15 : 20</div>
                <div className={style['total-amount']}>GHS 96000000</div>
            </div>
          </div>

          <table className={style.results}>
            {/* <caption>
              <div>Total: 10 nominees</div>
              <Sort />
            </caption> */}
            <thead>
              <tr>
                  <th>Name</th>
                  <th>Gender</th>
                  <th>Votes</th>
                  <th>Date</th>
                  <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                  <td>Ceados Khody</td>
                  <td>Male</td>
                  <td className={style['each-vote']}>54</td>
                  <td>20-12-23</td>
                  <td className={style.delete}>Delete</td>
              </tr>
              
              <tr>
                  <td>Ceados Khody</td>
                  <td>Male</td>
                  <td className={style['each-vote']}>54</td>
                  <td>20-12-23</td>
                  <td className={style.delete}>Delete</td>
              </tr>
              
              <tr>
                  <td>Ceados Khody</td>
                  <td>Male</td>
                  <td className={style['each-vote']}>54</td>
                  <td>20-12-23</td>
                  <td className={style.delete}>Delete</td>
              </tr>
              
              <tr>
                  <td>Ceados Khody</td>
                  <td>Male</td>
                  <td className={style['each-vote']}>54</td>
                  <td>20-12-23</td>
                  <td className={style.delete}>Delete</td>
              </tr>
              
              <tr>
                  <td>Ceados Khody</td>
                  <td>Male</td>
                  <td className={style['each-vote']}>54</td>
                  <td>20-12-23</td>
                  <td className={style.delete}>Delete</td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>

  );
};

export default SubCategory;
