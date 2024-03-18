import React, { useState } from 'react'
import SearchInput from './SearchInput'
import { Link, useSearchParams } from 'react-router-dom'

function NavigationApp() {
  const [searchParams, setSearchParams] = useSearchParams()
  const keyword = searchParams.get('keyword')

  const searchInputEventHandler = (event) => {
    const value = event.target.value
    setSearchParams({ keyword: value })
  }

  return (
    <div className='note-app__header'>
      <h1>
        <Link to='/'>Notes</Link>
      </h1>

      <nav>
        <Link to='/archive'>Arsip</Link>
      </nav>
      <SearchInput onSearch={searchInputEventHandler} keyword={keyword} />
    </div>
  )
}

export default NavigationApp
