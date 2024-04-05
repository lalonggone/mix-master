import React from 'react'
import DrinkDetails from '../DrinkDetails/DrinkDetails'
import NavBar from '../NavBar/NavBar'

function RecipeGrid() {
  return (
    <div>
      <section className="home-title">
        <h1>Mix Master</h1>
      </section>
        <NavBar />
        <DrinkDetails />
    </div>
  )
}

export default RecipeGrid
