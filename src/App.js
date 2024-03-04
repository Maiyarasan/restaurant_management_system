import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import FoodMenu from './pages/FoodMenu';
import HomePage from './pages/HomePage';
import ReviewPage from './pages/ReviewPage';
import NotFoundPage from './pages/NotFoundPage';
import CartPage from './pages/CartPage';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route index element={<HomePage/>} />
    <Route path='/about' element={<AboutPage/>}/>
    <Route path='/menu' element={<FoodMenu/>} />
    <Route path='/reviews' element={<ReviewPage />}/>
    <Route path='/cart' element={<CartPage />} />
    <Route path='/*' element={<NotFoundPage />} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
