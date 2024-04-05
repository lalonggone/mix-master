import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
  const location = useLocation()

  const initialShowAllDrinks = location.pathname === '/all'
  const [showAllDrinks, setShowAllDrinks] = useState(initialShowAllDrinks)

  const toggleDrinks = () => {
    setShowAllDrinks(!showAllDrinks)
  }

  return (
    <div>
    <div className="border"></div>
      <nav className="nav-container">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/random">Random Drink</Link>
          </li>
          <li className="nav-item" onClick={toggleDrinks}>
            <Link to={showAllDrinks ? '/na' : '/all'}>
              {showAllDrinks ? 'NA Drinks' : 'All Drinks'}
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
