import './App.css';
import HomePage from '../HomePage/HomePage';
import AllDrinksGrid from '../AllDrinksGrid/AllDrinksGrid';
import NaDrinksGrid from '../NaDrinksGrid/NaDrinksGrid';
import FavoriteDrinksGrid from '../FavoriteDrinksGrid/FavoriteDrinksGrid';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/all" element={<AllDrinksGrid />} />
        <Route path="/na" element={<NaDrinksGrid />} />
        <Route path="/favorites" element={<FavoriteDrinksGrid />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
