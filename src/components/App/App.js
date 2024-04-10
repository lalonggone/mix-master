import './App.css';
import HomePage from '../HomePage/HomePage';
import AllDrinksGrid from '../AllDrinksGrid/AllDrinksGrid';
import NaDrinksGrid from '../NaDrinksGrid/NaDrinksGrid';
import FavoriteDrinksGrid from '../FavoriteDrinksGrid/FavoriteDrinksGrid';
import React, { useState, useEffect } from 'react'
import RandomDrink from '../RandomDrink/RandomDrink';
import DrinkDetails from '../DrinkDetails/DrinkDetails';
import NotFound from '../NotFound/NotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { findAllByAltText } from '@testing-library/react';
import { getRecipes } from '../../apiCalls'

function App() {
  const [mixedDrinkRecipes, setRecipes] = useState([])
  const [chosenRecipes, chooseRecipes] = useState([])
  const [drinkType, setDrinkType] = useState('')

  useEffect(() => {
    updateRecipes()
  }, [])

  async function updateRecipes() {
    await getRecipes()
    .then(data => setRecipes(data))
    .catch(error => console.log(error))
  }

  useEffect(() => {
    findRecipes()
  }, [mixedDrinkRecipes, drinkType])

  const findRecipes = () => {
    const filteredRecipes = mixedDrinkRecipes.filter(recipe => {
      return recipe.alcoholic.toString() === drinkType
    })
    chooseRecipes(filteredRecipes)
  }

  function toggleFavorite(id) {
    const targetDrink = mixedDrinkRecipes.find((drink) => {
      return drink.id === id;
    })
    targetDrink.isFavorite = !targetDrink.isFavorite;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage drinkType={drinkType} setDrinkType={setDrinkType} findRecipes={findRecipes} />} />
          <Route path="/cocktails" element={<AllDrinksGrid recipes={chosenRecipes} setDrinkType={setDrinkType} updateRecipes={updateRecipes}/>} />
          <Route path="/mocktails" element={<NaDrinksGrid recipes={chosenRecipes} setDrinkType={setDrinkType} updateRecipes={updateRecipes}/>} />
          <Route path="/favorites" element={<FavoriteDrinksGrid setDrinkType={setDrinkType} mixedDrinkRecipes={mixedDrinkRecipes} />} />
          <Route path="/random" element={<RandomDrink setDrinkType={setDrinkType} />} />
          <Route path="/drink/:id" element={<DrinkDetails toggleFavorite={toggleFavorite} setDrinkType={setDrinkType} mixedDrinkRecipes={mixedDrinkRecipes} />} />
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
