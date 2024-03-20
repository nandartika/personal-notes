import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainContainer from './layouts/MainContainer'
import NotePages from './pages/NotePages'
import AddNotePage from './pages/AddNotePage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainContainer />}>
        <Route path='/notes/:noteStatus' element={<NotePages />} />
        <Route path='/add-note' element={<AddNotePage />} />
      </Route>
    </Routes>
  )
}

export default App
