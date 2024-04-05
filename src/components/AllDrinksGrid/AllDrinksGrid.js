import React from 'react'
import './AllDrinksGrid.css'
import mixedDrinkRecipes from '../../mock-data' // we will update with a real API call
import NavBar from '../NavBar/NavBar'

function AllDrinksGrid() {

 return (
    <div>
      <section className="home-title">
        <h1>Mix Master</h1>
      </section>
        <NavBar />
      <section className="drinks-grid">
        {mixedDrinkRecipes.map((recipe) => {
          return (
            <div className="drink-card" key={recipe.id}>
              <img src={recipe.image} alt={recipe.name} />
              <h2>{recipe.name}</h2>
              {/* <ul>
                {recipe.ingredients.map((ingredient, index) => {
                  return (
                    <li key={index}>
                      {ingredient}
                    </li>
                  )
                })}
              </ul> */}
            </div>
          )
        })}

      </section>
    </div>
 )

}

export default AllDrinksGrid;