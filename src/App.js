import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import Categories from "./Pages/Categories/Categories";
import SubCategory from './Pages/SubCategory/SubCategory';
import Aside from './Component/Aside/Aside';

function App() {
  return (
    <div className='app'>
      <Aside />
      <div>
        {/* <Categories /> */}
        <SubCategory />

      </div>
    </div>
  );
}

export default App;
