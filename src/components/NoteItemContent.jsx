import React from 'react'
import PropTypes from 'prop-types'
import { showFormattedDate } from '../utils'
import { useNavigate } from 'react-router-dom'

function NoteItemContent({ title, createdAt, body, id }) {
  const navigate = useNavigate()

  return (
    <div className='note-item__content'>
      <h3 className='note-item__title' onClick={() => navigate(`/note/${id}`)}>{title}</h3>
      <p className='note-item__date'>{showFormattedDate(createdAt)}</p>
      <p className='note-item__body'>{body}</p>
    </div>
  )
}

NoteItemContent.propTypes = {
  title: PropTypes.string,
  createdAt: PropTypes.string,
  body: PropTypes.string,
  id: PropTypes.string.isRequired,
}

export default NoteItemContent
