import React from 'react'
import PropTypes from 'prop-types'
import { useSearchParams, useParams } from 'react-router-dom'
import {
  archiveNote,
  deleteNote,
  getActiveNotes,
  getArchivedNotes,
  getNote,
  getNoteByKeyword,
  unarchiveNote,
} from '../utils/local-data'
import NotesList from '../components/NotesList'
import SearchInput from '../components/SearchInput'

function NoteWrapper() {
  const [searchParams, setSearchParam] = useSearchParams()
  const keyword = searchParams.get('keyword')

  const { noteStatus } = useParams()
  const isArchived = noteStatus === 'archived' ? true : false

  const changeSearchParam = (keyword) => {
    setSearchParam({ keyword })
  }

  return (
    <NotePages
      defaultKeyword={keyword}
      keywordChange={changeSearchParam}
      isArchived={isArchived}
    />
  )
}

class NotePages extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      notes: props.isArchived ? getArchivedNotes() : getActiveNotes(),
      keyword: props.defaultKeyword || '',
      isArchived: props.isArchived,
    }

    this.onArchiveMoveHandler = this.onArchiveMoveHandler.bind(this)
    this.onDeleteHandler = this.onDeleteHandler.bind(this)
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this)
    this.getNotes = this.getNotes.bind(this)
  }

  static getDerivedStateFromProps(props, state) {
    if (props.isArchived !== state.isArchived) {
      return {
        isArchived: props.isArchived,
        notes: props.isArchived ? getArchivedNotes() : getActiveNotes(),
      }
    }
    return null
  }

  onKeywordChangeHandler(event) {
    const keyword = event.target.value

    this.setState({ keyword })
    this.props.keywordChange(keyword)
  }

  getNotes() {
    return this.props.isArchived ? getArchivedNotes() : getActiveNotes()
  }

  onDeleteHandler(id) {
    deleteNote(id)

    this.setState(() => {
      return {
        notes: this.getNotes(),
      }
    })
  }

  onArchiveMoveHandler(id) {
    if (this.props.isArchived) {
      unarchiveNote(id)
    } else {
      archiveNote(id)
    }

    this.setState(() => {
      return {
        notes: this.getNotes(),
      }
    })
  }

  render() {
    const { keyword, notes } = this.state
    const filteredNotes = keyword
      ? getNoteByKeyword(notes, keyword, this.props.isArchived)
      : notes

    return (
      <>
        <div className='note-app__body'>
          <SearchInput
            onSearch={this.onKeywordChangeHandler}
            keyword={this.state.keyword}
          />

          <h2>Catatan Aktif</h2>
          <NotesList
            notes={filteredNotes}
            onDelete={this.onDeleteHandler}
            onArchiveMove={this.onArchiveMoveHandler}
          />
        </div>
      </>
    )
  }
}

NotePages.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func,
  isArchived: PropTypes.bool,
}

export default NoteWrapper
