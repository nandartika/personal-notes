import React from 'react'
import NoteItemContent from './NoteItemContent'
import DeleteButton from './DeleteButton'
import ArchivedMoveButton from './ArchivedMoveButton'

function NoteItem({ note, onDelete, onArchiveMove }) {
  return (
    <div className='note-item'>
      <NoteItemContent
        title={note.title}
        createdAt={note.createdAt}
        body={note.body}
      />

      <div className='note-item__action'>
        <DeleteButton onDelete={onDelete} id={note.id} />
        <ArchivedMoveButton
          onArchiveMove={onArchiveMove}
          isArchived={note.isArchived}
          id={note.id}
        />
      </div>
    </div>
  )
}

export default NoteItem
