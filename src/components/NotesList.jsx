import React from 'react'
import NoteItem from './NoteItem'

function NotesList({ notes, onDelete, onArchiveMove, isArchived = false }) {
  const filteredNotes = notes.filter((note) => note.archived == isArchived)

  return filteredNotes.length === 0 ? (
    <p className='notes-list__empty-message'>Tidak ada catatan</p>
  ) : (
    <div className='notes-list'>
      {filteredNotes.map((note) => (
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
