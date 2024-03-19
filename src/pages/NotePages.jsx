import React from 'react'
import PropTypes from 'prop-types'
import { useSearchParams, useParams } from 'react-router-dom'
import {
  getActiveNotes,
  getArchivedNotes,
  getNoteByKeyword,
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
      keyword: props.defaultKeyword || '',
    }

    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this)
  }

  onKeywordChangeHandler(event) {
    const keyword = event.target.value

    this.setState({ keyword })
    this.props.keywordChange(keyword)
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.isArchived === this.props.isArchived &&
      nextState.keyword === this.state.keyword
    ) {
      return false
    }
    return true
  }

  render() {
    const { keyword } = this.state
    const notes = this.props.isArchived ? getArchivedNotes() : getActiveNotes()

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
          <NotesList notes={filteredNotes} />
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
