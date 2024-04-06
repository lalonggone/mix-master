import React from 'react'
import mixedDrinkRecipes from '../../mock-data';
import { useParams } from 'react-router-dom'
import './DrinkDetails.css';
import NavBar from '../NavBar/NavBar';
import HeartIcon from '../../assets/heart-icon.svg';
import HeartIconRed from '../../assets/heart-icon-red.svg';

function DrinkDetails({ toggleFavorite }) {
  const { id } = useParams();
  const parsedId = parseInt(id);
  const targetDrink = mixedDrinkRecipes.find((drink) => {
    return drink.id === parsedId;
  })
  return (
    <section className='drink-details-page'>
      <NavBar className='drink-details-nav'/>
      <div className='drink-details-container'>
        <img src={targetDrink.image} alt={`aesthetic view of a ${targetDrink.name}`} className='drink-details-image'/>
        <img src={HeartIcon} alt="heart icon" className='drink-details-heart-icon' onClick={toggleFavorite}/>
        <article className='drink-details-text'>
          <div className='drink-details-headers'>
            <h1 className='drink-details-name'>{targetDrink.name}</h1>
            {targetDrink.alcoholic ? <h2>Alcoholic</h2> : <h2>Non-Alcoholic</h2>}
          </div>
          <div className='drink-details-specifics'>
            <div className='drink-details-ingredients'>
              <h3>Ingredients</h3>
              {targetDrink.ingredients.map((ingredient) => {
                return <li>{ingredient}</li>
              })}
            </div>
            <div className='drink-details-directions'>
              <h3>Directions</h3>
              <ol>
                {Object.values(targetDrink.directions).map((value) => {
                  return <li>{value}</li>
                })}
              </ol>
            </div>
          </div>
        </article>
      </div>
    </section>
    
  )
}

export default DrinkDetails
