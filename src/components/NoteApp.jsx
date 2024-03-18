import React from 'react'
import { getInitialData } from '../utils'
import NoteForm from './NoteForm'
import NotesList from './NotesList'
import NavigationApp from './NavigationApp'

class NoteApp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      notes: getInitialData(),
      filteredNotes: getInitialData(),
      searchKeyword: '',
    }

    this.onAddContactHandler = this.onAddContactHandler.bind(this)
    this.onDeleteHandler = this.onDeleteHandler.bind(this)
    this.onArchiveMoveHandler = this.onArchiveMoveHandler.bind(this)
    this.searchInputEventHandler = this.searchInputEventHandler.bind(this)
  }

  onAddContactHandler({ title, body }) {
    const timestamp = new Date().getTime()
    const newNote = {
      id: timestamp,
      title,
      body,
      createdAt: timestamp,
      archived: false,
    }
    this.setState((prevState) => {
      return {
        notes: [newNote, ...prevState.notes],
        filteredNotes: [newNote, ...prevState.filteredNotes],
      }
    })
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id)
    const filteredNotes = this.state.filteredNotes.filter(
      (note) => note.id !== id
    )
    this.setState({ notes, filteredNotes })
  }

  onArchiveMoveHandler(id) {
    const notes = this.state.notes.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          archived: !note.archived,
        }
      }
      return note
    })

    const filteredNotes = this.state.filteredNotes.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          archived: !note.archived,
        }
      }
      return note
    })

    this.setState({ notes, filteredNotes })
  }

  searchInputEventHandler(event) {
    const keyword = event.target.value

    if (!keyword) {
      this.setState({ filteredNotes: this.state.notes })
      return
    }

    const filteredNotes = this.state.notes.filter((note) => {
      return note.title.toLowerCase().includes(keyword.toLowerCase())
    })
    this.setState({ filteredNotes: filteredNotes, searchKeyword: keyword })
  }

  render() {
    return (
      <>
        <div className='note-app__body'>
          <NoteForm addNote={this.onAddContactHandler} />

          <h2>Catatan Aktif</h2>
          <NotesList
            notes={this.state.filteredNotes}
            onDelete={this.onDeleteHandler}
            onArchiveMove={this.onArchiveMoveHandler}
          />

          <h2>Arsip</h2>
          <NotesList
            notes={this.state.filteredNotes}
            onDelete={this.onDeleteHandler}
            onArchiveMove={this.onArchiveMoveHandler}
            isArchived
          />
        </div>
      </>
    )
  }
}

export default NoteApp
