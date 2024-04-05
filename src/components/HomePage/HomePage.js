import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import FavoriteDrinksGrid from '../FavoriteDrinksGrid/FavoriteDrinksGrid'
import AllDrinksGrid from '../AllDrinksGrid/AllDrinksGrid'

function HomePage() {
  return (
    <div>
      <NavBar className="navbar"/>
        <section className="quiz-section">
            <h1>Do you prefer...</h1>
            <Link to="/all">Alcoholic Bevs</Link>
            <Link to="/na">Non-Alcoholic Bevs</Link>
            <button className="enter-btn">Cheers!</button>
        </section>
      <AllDrinksGrid className="allDrinksGrid"/>
      <FavoriteDrinksGrid className="favoriteDrinksGrid"/>
    </div>
  )
}

export default HomePage
