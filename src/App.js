import 'font-awesome/css/font-awesome.min.css';
import style from './App.module.css';
import Categories from "./Pages/Categories/Categories";
import SubCategory from './Pages/SubCategory/SubCategory';
import Aside from './Component/Aside/Aside';
import Navbar from './Component/Navbar/Navbar';

function App() {
  return (
    <div className={style.app}>
      <Aside />
      <div className={style.container}>
        <Navbar />
        {/* <Categories /> */}
        <SubCategory />

      </div>
    </div>
  );
}

export default App;
