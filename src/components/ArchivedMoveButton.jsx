import React from 'react'

function ArchivedMoveButton({ onArchiveMove, isArchived, id }) {
  return (
    <button className='note-item__archive-button' onClick={() => onArchiveMove(id)}>
      {isArchived ? 'Unarchive' : 'Move'}
    </button>
  )
}

export default ArchivedMoveButton