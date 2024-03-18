import React from 'react'
import { useSearchParams } from 'react-router-dom'
import {
  getActiveNotes,
  getNoteByKeyword,
} from '../utils/local-data'
import NoteForm from '../components/NoteForm'
import NotesList from '../components/NotesList'

function NotePages() {
  const [searchParams] = useSearchParams()
  const keyword = searchParams.get('keyword')

  const notes = getActiveNotes()
  const filteredNotes = keyword ? getNoteByKeyword(notes, keyword) : notes

  return (
    <>
      <div className='note-app__body'>
        <NoteForm />

        <h2>Catatan Aktif</h2>
        <NotesList
          notes={filteredNotes}
        />
      </div>
    </>
  )
}

export default NotePages
