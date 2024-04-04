import React from 'react'
import NavBar from '../NavBar/NavBar'
import FavoriteRecipeGrid from '../FavoriteRecipeGrid/FavoriteRecipeGrid'
import AllRecipesGrid from '../AllRecipesGrid/AllRecipesGrid'

function HomePage() {
  return (
    <div>
      <NavBar />
      <AllRecipesGrid />
      <FavoriteRecipeGrid />
    </div>
  )
}

export default HomePage
