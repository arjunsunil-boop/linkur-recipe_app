import logo from './logo.svg';
import './App.css';
import Addrecipe from './components/Addrecipe';
import Searchrecipe from './components/Searchrecipe';
import Navbar from './components/Navbar';
import ViewRecipe from './components/ViewRecipe';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/add' element={<Addrecipe/>}/>
  <Route path='/search' element={<Searchrecipe/>}/>
  <Route path='/view' element={<ViewRecipe/>}/>
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
