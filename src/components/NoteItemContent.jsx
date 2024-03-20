import React from 'react'
import PropTypes from 'prop-types'
import { showFormattedDate } from '../utils'

function NoteItemContent({ title, createdAt, body }) {
  return (
    <div className='note-item__content'>
      <h3 className='note-item__title'>{title}</h3>
      <p className='note-item__date'>{showFormattedDate(createdAt)}</p>
      <p className='note-item__body'>{body}</p>
    </div>
  )
}

NoteItemContent.propTypes = {
  title: PropTypes.string,
  createdAt: PropTypes.string,
  body: PropTypes.string,
}

export default NoteItemContent
