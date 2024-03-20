import React from 'react'
import PropTypes from 'prop-types'

function ArchivedMoveButton({ onArchiveMove, isArchived, id }) {
  return (
    <button className='note-item__archive-button' onClick={() => onArchiveMove(id)}>
      {isArchived ? 'Unarchive' : 'Move'}
    </button>
  )
}

ArchivedMoveButton.propTypes = {
  onArchiveMove: PropTypes.func.isRequired,
  isArchived: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired
}

export default ArchivedMoveButton