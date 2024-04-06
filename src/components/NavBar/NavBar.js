import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import mixedDrinkRecipes from '../../mock-data'
import './NavBar.css'

function NavBar({ setDrinkType }) {
  const location = useLocation()

  const initialShowAllDrinks = location.pathname === '/cocktails'
  const [showAllDrinks, setShowAllDrinks] = useState(initialShowAllDrinks)

  const toggleDrinks = () => {
    setShowAllDrinks(!showAllDrinks)
    if (showAllDrinks) {
      setDrinkType('false')
    } else {
      setDrinkType('true')
    }
  }

  const refreshPage = () => {
    window.location.reload()
  }

  return (
    <div>
      <div className="border"></div>
      <nav className="nav-container">
        <ul className="nav-list">
          <li className="nav-item" onClick={refreshPage} >
            <Link to="/random" >
              Random Drink
            </Link>
          </li>
          <li className="nav-item" onClick={toggleDrinks}>
            <Link to={showAllDrinks ? '/mocktails' : '/cocktails'}>
              {showAllDrinks ? 'Mocktails' : 'Cocktails'}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/favorites">Favorite Drinks</Link>
          </li>
        </ul>
      </nav>
      <div className="border"></div>
    </div>
  )
}

export default NavBar
