import React from 'react'
import SearchInput from './SearchInput'
import { Link } from 'react-router-dom'

function NavigationApp({ onSearch, searchKeyword }) {
  return (
    <div className='note-app__header'>
      <h1>
        <Link to='/'>Notes</Link>
      </h1>

      <nav>
        <Link to='/archive'>Arsip</Link>
      </nav>
      <SearchInput onSearch={onSearch} keyword={searchKeyword} />
    </div>
  )
}

export default NavigationApp
