import React from 'react'
import './AllDrinksGrid.css'
import NavBar from '../NavBar/NavBar'


function AllDrinksGrid({ recipes, setDrinkType }) {
  
  const displayRecipes = recipes.map(recipe => {
    return (
      <div className="drink-card" key={recipe.id}>
        <img src={recipe.image} alt={recipe.name} />
        <h2>{recipe.name}</h2>
      </div>
    )
  })

  return (
    <div>
      <section className="home-title">
        <h1>Mix Master</h1>
      </section>
      <NavBar setDrinkType={setDrinkType}/>
      <section className="drinks-grid">
        {displayRecipes}
      </section>
    </div>
  )

}

{/* <ul>
        {recipe.ingredients.map((ingredient, index) => {
          return (
            <li key={index}>
              {ingredient}
            </li>
          )
        })}
      </ul> */}

export default AllDrinksGrid;