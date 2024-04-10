// import mixedDrinkRecipes from '../../mock-data';
import { useParams, useNavigate } from 'react-router-dom';
import './DrinkDetails.css';
import NavBar from '../NavBar/NavBar';
import exit from '../../assets/exit.png'
import HeartIcon from '../../assets/heart-icon.svg';
import HeartIconRed from '../../assets/heart-icon-red.svg';
import { useState } from 'react';
import PropTypes from 'prop-types'

function DrinkDetails({ toggleFavorite, setDrinkType, mixedDrinkRecipes }) {
  let navigate = useNavigate();
  const { id } = useParams();
  const parsedId = parseInt(id);
  const [favorite, setFavorite] = useState(false);
  const targetDrink = mixedDrinkRecipes.find((drink) => {
    return drink.id === parsedId;
  })
  return (
    <section className='drink-details-page'>
      <NavBar className='drink-details-nav' setDrinkType={setDrinkType} />
      <div className='drink-details-container'>
        <img src={targetDrink.image} alt={`aesthetic view of a ${targetDrink.name}`} className='drink-details-image' />
        <img src={exit} alt='exit-details-page' className='drink-details-exit' onClick={() => { navigate(-1) }} />
        <img src={targetDrink.isFavorite ? HeartIconRed : HeartIcon} alt="heart icon" className='drink-details-heart-icon' onClick={() => {
          toggleFavorite(parsedId);
          setFavorite(!favorite);
        }} />
        <article className='drink-details-text'>
          <div className='drink-details-headers'>
            <h1 className='drink-details-name'>{targetDrink.name}</h1>
            {targetDrink.alcoholic ? <h2>Alcoholic</h2> : <h2>Non-Alcoholic</h2>}
          </div>
          <div className='drink-details-specifics'>
            <div className='drink-details-ingredients'>
              <h3>Ingredients</h3>
              {targetDrink.ingredients.map((ingredient, index) => {
                return <li key={index}>{ingredient}</li>
              })}
            </div>
            <div className='drink-details-directions'>
              <h3>Directions</h3>
              <ol>
                {Object.values(targetDrink.directions).map((value, index) => {
                  return <li key={index}>{value}</li>
                })}
              </ol>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default DrinkDetails;

DrinkDetails.propTypes = {
  toggleFavorite: PropTypes.func.isRequired,
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