import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './HomePage.css'
import FavoriteDrinksGrid from '../FavoriteDrinksGrid/FavoriteDrinksGrid'
import AllDrinksGrid from '../AllDrinksGrid/AllDrinksGrid'

function HomePage() {
  const [drinkType, setDrinkType] = useState('')
  const navigate = useNavigate()

  const handleChoice = (choice) => {
    if (choice === 'alcoholic') {
      navigate('/all')
    } else if (choice === 'na') {
      navigate('/na')
    }
  }
  return (
    <div>
      <section className="home-title">
        <h1>Welcome to Mix Master</h1>
        <p>Your personal drink recipe book</p>
      </section>
      <section className="quiz-section">
        <h1 className="quiz-title">Do you prefer...</h1>
        <div className="radio-container">
          <label>
            <input
              type="radio"
              name="drinkType"
              value="alcoholic"
              onChange={(e) => setDrinkType(e.target.value)}
            />
            Alcoholic beverages
          </label>
          <label>
            <input
              type="radio"
              name="drinkType"
              value="na"
              onChange={(e) => setDrinkType(e.target.value)}
            />
            NA beverages
          </label>
        </div>
        <button onClick={() => console.log(drinkType)}>Find Drinks</button>
      </section>
      <AllDrinksGrid className="allDrinksGrid" />
      <FavoriteDrinksGrid className="favoriteDrinksGrid" />
    </div>
  )
}

export default HomePage
