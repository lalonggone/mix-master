import React, { useState, useEffect } from 'react'
import NavBar from '../NavBar/NavBar'
import mixedDrinkRecipes from '../../mock-data'

const RandomDrink = () => {
  const [drink, setDrink] = useState('')

  useEffect(() => {
    generateRandomDrink()
  }, [])

  const generateRandomDrink = () => {
    const randomIndex = Math.floor(Math.random() * mixedDrinkRecipes.length)
    const randomDrink = mixedDrinkRecipes[randomIndex]
    setDrink(randomDrink)
  }

  return (
    <div>
      <section className="home-title">
        <h1>Mix Master</h1>
      </section>
      <NavBar />
      <section className="drinks-grid">
        <div className="drink-card" key={drink.id}>
          <img src={drink.image} alt={drink.name} />
          <h2>{drink.name}</h2>
        </div>
      </section>
    </div>
  )
}

export default RandomDrink
