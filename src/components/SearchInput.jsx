import React from 'react'

function SearchInput({ onSearch, keyword }) {
  return (
    <div className='note-search'>
      <input type='text' placeholder='Cari catatan ...' onChange={onSearch} value={keyword}/>
    </div>
  )
}

export default SearchInput