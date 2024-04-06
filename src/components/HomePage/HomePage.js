import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import mixedDrinkRecipes from '../../mock-data' 
import './HomePage.css'

function HomePage({drinkType, setDrinkType, findRecipes}) {

  const navigate = useNavigate()

  const handleChoice = (choice) => {
    if (choice === 'true') {
      navigate('/all')
      findRecipes()
    } else if (choice === 'false') {
      navigate('/na')
      findRecipes()
    }
  }

  return (
    <div>
      <section className="home-title">
        <h1>Mix Master</h1>
        <p>your drink recipe companion</p>
      </section>
      <section className="quiz-section">
        <h1 className="quiz-title">Do you prefer...</h1>
        <div className="radio-container">
          <label className="radio">
              Alcoholic beverages
            <input
              type="radio"
              name="drinkType"
              value="true"
              onChange={(e) => setDrinkType(e.target.value)}
              />
          </label>
          <label className="radio">
              NA beverages
            <input
              type="radio"
              name="drinkType"
              value="false"
              onChange={(e) => setDrinkType(e.target.value)}
            />
          </label>
        </div>
        <button onClick={() => handleChoice(drinkType)}>Find Drinks</button>
      </section>
    </div>
  )
}

export default HomePage
