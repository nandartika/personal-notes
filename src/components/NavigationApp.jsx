import React from 'react'
import { Link } from 'react-router-dom'

function NavigationApp() {
  return (
    <div className='note-app__header'>
      <h1>
        <Link to='/notes/active'>Notes</Link>
      </h1>

      <nav>
        <ul>
          <li>
            <Link to='/add-note'>Add Note</Link>
          </li>
          <li>
            <Link to='/notes/archived'>Arsip</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavigationApp
