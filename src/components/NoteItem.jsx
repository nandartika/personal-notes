import React from 'react'
import PropTypes from 'prop-types'

import NoteItemContent from './NoteItemContent'
import DeleteButton from './DeleteButton'
import ArchivedMoveButton from './ArchivedMoveButton'
import { notePropTypes } from '../utils/local-data'

function NoteItem({ note, onDelete, onArchiveMove }) {
  return (
    <div className='note-item'>
      <NoteItemContent
        title={note.title}
        createdAt={note.createdAt}
        body={note.body}
        id={note.id}
      />

      <div className='note-item__action'>
        <DeleteButton onDelete={onDelete} id={note.id} />
        <ArchivedMoveButton
          onArchiveMove={onArchiveMove}
          isArchived={note.archived}
          id={note.id}
        />
      </div>
    </div>
  )
}

NoteItem.propTypes = {
  note: PropTypes.shape(notePropTypes).isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchiveMove: PropTypes.func.isRequired,
}

export default NoteItem
