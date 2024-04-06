import './App.css';
import mixedDrinkRecipes from '../../mock-data'
import HomePage from '../HomePage/HomePage';
import AllDrinksGrid from '../AllDrinksGrid/AllDrinksGrid';
import NaDrinksGrid from '../NaDrinksGrid/NaDrinksGrid';
import FavoriteDrinksGrid from '../FavoriteDrinksGrid/FavoriteDrinksGrid';
import React, { useState, useEffect } from 'react'
import RandomDrink from '../RandomDrink/RandomDrink';
import DrinkDetails from '../DrinkDetails/DrinkDetails';
// import NotFound from '../NotFound/NotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { findAllByAltText } from '@testing-library/react';


function App() {

  const [chosenRecipes, chooseRecipes] = useState([])
  const [drinkType, setDrinkType] = useState('')

  useEffect(() => {
    findRecipes()
  }, [drinkType])

  const findRecipes = () => {
    const filteredRecipes = mixedDrinkRecipes.filter(recipe => {
      return recipe.alcoholic.toString() === drinkType
    })
    chooseRecipes(filteredRecipes)
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage drinkType={drinkType} setDrinkType={setDrinkType} findRecipes={findRecipes} />} />
          <Route path="/cocktails" element={<AllDrinksGrid recipes={chosenRecipes} setDrinkType={setDrinkType} />} />
          <Route path="/mocktails" element={<NaDrinksGrid recipes={chosenRecipes} setDrinkType={setDrinkType} />} />
          <Route path="/favorites" element={<FavoriteDrinksGrid setDrinkType={setDrinkType} />} />
          <Route path="/random" element={<RandomDrink />} />
          <Route path="/drink/:id" element={<DrinkDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
