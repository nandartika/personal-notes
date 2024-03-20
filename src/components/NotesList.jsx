import React from 'react'
import PropTypes from 'prop-types'
import NoteItem from './NoteItem'
import { notePropTypes } from '../utils/local-data'

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

NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape(notePropTypes)).isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchiveMove: PropTypes.func.isRequired,
}

export default NotesList

