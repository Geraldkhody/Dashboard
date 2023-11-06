import 'font-awesome/css/font-awesome.min.css';
import style from './App.module.css';
import Categories from "./Pages/Categories/Categories";
import SubCategory from './Pages/SubCategory/SubCategory';
import Aside from './Component/Aside/Aside';
import Navbar from './Component/Navbar/Navbar';
import { useState } from 'react';

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const SubCategoryHandler = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className={style.app}>
      <Aside />
      <div className={style.wrapper}>
          <Navbar />
        <div className={style.container}>
          <>
            {!isOpen && <Categories SubCategoryHandler={SubCategoryHandler} />}
            {isOpen && <SubCategory />}
          </>

        </div>

      </div>
    </div>
  );
}

export default App;