import logo from './logo.svg';
import './App.css';
import Addrecipe from './components/Addrecipe';
import Searchrecipe from './components/Searchrecipe';
import Navbar from './components/Navbar';
import ViewRecipe from './components/ViewRecipe';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
<BrowserRouter>
<Routes>
  <Route path='/' element={<ViewRecipe/>}/>
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
