import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import './HomePage.css'

function HomePage({ drinkType, setDrinkType, findRecipes }) {

  const navigate = useNavigate()

  const handleChoice = (choice) => {
    if (choice === 'true') {
      navigate('/cocktails')
      findRecipes()
    } else if (choice === 'false') {
      navigate('/mocktails')
      findRecipes()
    }
  }

  return (
    <div className="home">
      <section className="home-title">
        <h1>Mix Master</h1>
        <p>your drink recipe companion</p>
      </section>
      <section className="quiz-section">
        <h2 className="quiz-title">Do you prefer...</h2>
        <div className="radio-container">
          <label className="radio">
            Cocktails
            <input
              type="radio"
              name="drinkType"
              value="true"
              onChange={(e) => setDrinkType(e.target.value)}
            />
          </label>
          <label className="radio">
            Mocktails
            <input
              type="radio"
              name="drinkType"
              value="false"
              onChange={(e) => setDrinkType(e.target.value)}
            />
          </label>
        </div>
        <button className="submit-button" onClick={() => handleChoice(drinkType)}>Find Drinks</button>
      </section>
    </div>
  )
}

export default HomePage

HomePage.propTypes = {
  drinkType: PropTypes.string,
  setDrinkType: PropTypes.func.isRequired,
  findRecipes: PropTypes.func.isRequired
}
