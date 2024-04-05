import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
  const [showAllDrinks, setShowAllDrinks] = useState(true)

  const toggleDrinks = () => {
    setShowAllDrinks(!showAllDrinks)
  }

  return (
    <div>
      <nav className="nav-container">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/random">Random Drink</Link>
          </li>
          <li className="nav-item" onClick={toggleDrinks}>
            <Link to={showAllDrinks ? '/all' : '/na'}>
              {showAllDrinks ? 'All Drinks' : 'NA Drinks'}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="favorites">Favorite Drinks</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
