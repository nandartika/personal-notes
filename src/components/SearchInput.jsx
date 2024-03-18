import React from 'react'
import PropTypes from 'prop-types'

function SearchInput({ onSearch, keyword }) {
  return (
    <div className='note-search'>
      <input type='text' placeholder='Cari catatan ...' onChange={onSearch} value={keyword}/>
    </div>
  )
}

SearchInput.propTypes = {
  onSearch: PropTypes.func.isRequired,
  keyword: PropTypes.string.isRequired
}

export default SearchInput