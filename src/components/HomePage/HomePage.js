import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './HomePage.css'

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
              value="alcoholic"
              onChange={(e) => setDrinkType(e.target.value)}
              />
          </label>
          <label className="radio">
              NA beverages
            <input
              type="radio"
              name="drinkType"
              value="na"
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
