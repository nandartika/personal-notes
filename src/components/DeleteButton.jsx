import React from 'react'
import PropTypes from 'prop-types'

function DeleteButton({ onDelete, id }) {
  return (
    <button className='note-item__delete-button' onClick={() => onDelete(id)}>
      Delete
    </button>
  )
}

DeleteButton.propTypes = {
  onDelete: PropTypes.func,
  id: PropTypes.string,
}

export default DeleteButton
