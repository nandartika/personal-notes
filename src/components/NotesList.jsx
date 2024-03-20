import React from 'react'
import PropTypes from 'prop-types'
import NoteItem from './NoteItem'

function NotesList({ notes, onDelete, onArchiveMove }) {
  return notes.length === 0 ? (
    <p className='notes-list__empty-message'>Tidak ada catatan</p>
  ) : (
    <div className='notes-list'>
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          onDelete={onDelete}
          onArchiveMove={onArchiveMove}
        />
      ))}
    </div>
  )
}

export default NotesList

// NoteList.propTypes = {
//   notes: PropTypes.arrayOf(PropTypes.object).isRequired,
//   onDelete: PropTypes.func.isRequired,
//   onArchived: PropTypes.func.isRequired,
// }
