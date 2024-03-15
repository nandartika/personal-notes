import React from 'react'
import SearchInput from './SearchInput'

function NavigationApp({ onSearch, searchKeyword }) {
  return (
    <div className='note-app__header'>
      <h1>Notes</h1>

      <SearchInput onSearch={onSearch} keyword={searchKeyword} />
    </div>
  )
}

export default NavigationApp
