import React from 'react'
import { getNote } from '../utils/local-data'
import { useParams } from 'react-router-dom'
import { showFormattedDate } from '../utils'

function DetailPage() {
  const { id } = useParams()
  const note = getNote(id)

  return (
    <section className='detail-page'>
      <h3 className='detail-page__title'>{note.title}</h3>
      <p className='detail-page__createdAt'>
        {showFormattedDate(note.createdAt)}
      </p>
      <div className='detail-page__body'>{note.body}</div>
    </section>
  )
}

export default DetailPage
