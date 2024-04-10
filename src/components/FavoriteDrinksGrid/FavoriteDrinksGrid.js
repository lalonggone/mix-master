import React, { useEffect, useState } from 'react';
import PropTypes, { object } from 'prop-types';
import NavBar from '../NavBar/NavBar';
import HeartIcon from '../../assets/heart-icon.svg';
import HeartIconRed from '../../assets/heart-icon-red.svg';
import { Link } from 'react-router-dom';

function FavoriteDrinksGrid({ setDrinkType, mixedDrinkRecipes }) {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    findFavorites()
  }, [])

  const findFavorites = () => {
    const filteredRecipes = mixedDrinkRecipes.filter(recipe => {
      return recipe.isFavorite
    }).map(recipe => {
      return (
        <Link to={`/drink/${recipe.id}`}>
          <div className="drink-card" key={recipe.id}>
            <img src={recipe.image} alt={recipe.name} className='drink-card-image' />
            <div className="drink-card-info">
              <h2>{recipe.name}</h2>
              <img src={recipe.isFavorite ? HeartIconRed : HeartIcon} alt="heart icon" className="heart-icon" />
            </div>
          </div>
        </Link>
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

FavoriteDrinksGrid.propTypes = {
  setDrinkType: PropTypes.func.isRequired,
  mixedDrinkRecipes: PropTypes.arrayOf(PropTypes.shape({
    alcoholic: PropTypes.bool,
    directions: PropTypes.object,
    id: PropTypes.number,
    ingredients: PropTypes.array,
    isFavorite: PropTypes.bool,
    name: PropTypes.string,
    image: PropTypes.string
  })).isRequired
};