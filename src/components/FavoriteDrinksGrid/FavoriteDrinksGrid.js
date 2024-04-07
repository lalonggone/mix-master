import React, { useEffect, useState } from 'react';
import DrinkDetails from '../DrinkDetails/DrinkDetails';
import mixedDrinkRecipes from '../../mock-data';
import NavBar from '../NavBar/NavBar';
import HeartIcon from '../../assets/heart-icon.svg';
import HeartIconRed from '../../assets/heart-icon-red.svg';

function FavoriteDrinksGrid({ setDrinkType }) {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    findFavorites()
  }, [])

  const findFavorites = () => {
    const filteredRecipes = mixedDrinkRecipes.filter(recipe => {
      return recipe.isFavorite
    }).map(recipe => {
      return (
        <div className="drink-card" key={recipe.id}>
          <img src={recipe.image} alt={recipe.name} />
          <div className="drink-card-info">
              <h2>{recipe.name}</h2>
              <img src={recipe.isFavorite ? HeartIconRed : HeartIcon} alt="heart icon" className="heart-icon"/>
          </div>
        </div>
      )
    })
    setFavorites(filteredRecipes)
  }

  return (
    <div>
      <section className="home-title">
        <h1>Mix Master</h1>
      </section>
      <NavBar setDrinkType={setDrinkType} />
      <section className="drinks-grid">
        {favorites}
      </section>
    </div>
  )

}


export default FavoriteDrinksGrid;