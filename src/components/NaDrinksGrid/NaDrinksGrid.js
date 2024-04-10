import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './NaDrinksGrid.css';
import NavBar from '../NavBar/NavBar';
import HeartIcon from '../../assets/heart-icon.svg';
import HeartIconRed from '../../assets/heart-icon-red.svg';
import { Link } from 'react-router-dom';


function NaDrinksGrid({ recipes, setDrinkType, updateRecipes }) {
    useEffect(() => {
        if (recipes.length < 1) {
            updateRecipes()
        }
        showCocktails()
    }, [])

    const showCocktails = () => {
        setDrinkType('false')
    }

    const displayRecipes = recipes.map(recipe => {
        return (
            <Link to={`/drink/${recipe.id}`} className='drink-card'>
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

    return (
        <div>
            <section className="home-title">
                <h1>Mix Master</h1>
            </section>
            <NavBar setDrinkType={setDrinkType} />
            <section className="drinks-grid">
                {displayRecipes}
            </section>
        </div>
    )
}

export default NaDrinksGrid;

NaDrinksGrid.propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.shape({
        alcoholic: PropTypes.bool,
        directions: PropTypes.object,
        id: PropTypes.number,
        ingredients: PropTypes.array,
        isFavorite: PropTypes.bool,
        name: PropTypes.string,
        image: PropTypes.string
    })).isRequired,
    setDrinkType: PropTypes.func.isRequired
};